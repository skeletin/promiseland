# PromiseLand Architecture and Product Roadmap

## Vision

PromiseLand is a full-stack interactive learning platform focused exclusively on JavaScript Promises.  
Target users are junior-to-mid-level JavaScript developers who want hands-on, progressive exercises similar to Codecademy and CodeWars.

This document defines the recommended architecture, data model, feature priorities, challenge design standards, UI/UX rules, deployment setup, and a 12-week delivery roadmap.

---

## 1) Recommended Technical Stack (Lit Frontend + Rails API)

### Frontend (separate repo: `promiseland-web`)

- Framework: **Lit + TypeScript + Vite**
- Routing: **`@vaadin/router`** (or equivalent lightweight router)
- State/data fetching: **TanStack Query (core)** or a thin custom API client + store
- Styling: **Tailwind CSS** (or CSS modules if preferred) with a small design token layer
- Code editor: **Monaco Editor**
- In-browser code execution: **Web Worker sandbox**

Why this works:
- Lit keeps the frontend lightweight and fast.
- Vite gives fast dev/build loops.
- Monaco provides a familiar coding experience.
- Web Worker-based execution enables instant feedback without freezing the main UI.

### Backend (separate repo: `promiseland-api`)

- Framework: **Ruby on Rails (API mode)**
- Job processing: **Sidekiq**
- Cache/rate-limits: **Redis**
- API format: **JSON REST** (OpenAPI documented)

Why this works:
- Rails gives fast development for auth, content APIs, and progress logic.
- Sidekiq handles async grading and long-running evaluation workloads.
- Redis supports queues, temporary grading states, and throttling.

### Database

- Primary DB: **PostgreSQL**
- ORM: **ActiveRecord**

Why this works:
- Relational modeling is ideal for users, challenge versions, submissions, and progress joins.
- Strong constraints reduce invalid progress/submission states.

### Auth

- Auth strategy: **JWT access + refresh token flow** (or secure cookie sessions if same-site deployment)
- Provider options: email/password first, optional OAuth later

Why this works:
- Easy integration across separate frontend and API repos/domains.
- Works cleanly for mobile app expansion later if needed.

### Deployment

- Frontend: **Vercel** (or Netlify)
- API + Sidekiq: **Render / Fly.io / Railway**
- PostgreSQL: **Managed Postgres** (Neon/Supabase/RDS)
- Redis: **Upstash/Redis Cloud**
- Monitoring: **Sentry + structured logs**

Why this works:
- Minimal ops overhead, fast deploys, and clear path to scale.

---

## 2) Repository and Folder Structures

Because you are using separate repos, keep strict API contracts and consistent naming across both.

## `promiseland-web` (Lit frontend)

```text
promiseland-web/
  src/
    app/
      router/
      layouts/
      guards/
    pages/
      home/
      auth/
        login/
        register/
      learn/
        lessons/
        challenges/
      dashboard/
      profile/
    components/
      common/
      challenge/
        challenge-shell/
        editor/
        runner/
        feedback/
        hints/
      progress/
      navigation/
    features/
      auth/
      lessons/
      challenges/
      submissions/
      progress/
    services/
      api/
        client.ts
        auth-api.ts
        lessons-api.ts
        challenges-api.ts
        submissions-api.ts
        progress-api.ts
      telemetry/
    state/
      auth-store.ts
      challenge-store.ts
      progress-store.ts
    workers/
      challenge-runner.worker.ts
    utils/
    styles/
      tokens.css
      globals.css
    types/
  public/
  tests/
    unit/
    e2e/
```

Placement guidance:
- Challenge UI and execution orchestration live in `components/challenge` + `workers`.
- User-facing progress rendering lives in `components/progress`.
- API-bound domain logic lives in `services/api` and `features/*`.

## `promiseland-api` (Rails API)

```text
promiseland-api/
  app/
    controllers/
      api/v1/
        auth/
        users_controller.rb
        lessons_controller.rb
        challenges_controller.rb
        submissions_controller.rb
        progress_controller.rb
        hints_controller.rb
    models/
      user.rb
      lesson.rb
      challenge.rb
      challenge_test.rb
      hint.rb
      submission.rb
      submission_result.rb
      user_challenge_progress.rb
      user_lesson_progress.rb
    services/
      auth/
      grading/
      progress/
      challenge_content/
    jobs/
      grade_submission_job.rb
    serializers/
    policies/
    lib/
      sandbox/
      scoring/
  config/
    routes.rb
    initializers/
  db/
    migrate/
    seeds/
      lessons/
      challenges/
  spec/
    requests/
    models/
    services/
    jobs/
```

Placement guidance:
- Grading orchestration belongs in `services/grading` + `jobs`.
- Progress state transitions belong in `services/progress`.
- Auth/session/token logic belongs in `services/auth` and auth controllers.

---

## 3) Database Schema Design

Use these core tables as the stable MVP schema.

### Users and Identity

- `users`
  - `id`, `email` (unique), `password_digest` (or external auth id), `username`, `role`, timestamps
- `user_profiles`
  - `user_id` (unique FK), `display_name`, `experience_level`, `avatar_url`, timestamps

### Learning Content

- `lessons`
  - `id`, `slug` (unique), `title`, `summary`, `difficulty`, `position`, `published`, timestamps
- `challenges`
  - `id`, `lesson_id` FK, `slug` (unique), `title`, `prompt_md`, `starter_code`, `solution_code_private`, `difficulty`, `xp_reward`, `published`, timestamps
- `challenge_tests`
  - `id`, `challenge_id` FK, `name`, `test_code`, `visibility` (`public`/`hidden`), `weight`, `position`
- `hints`
  - `id`, `challenge_id` FK, `tier` (1..n), `content_md`, `xp_penalty`

### Progress and Evaluation

- `submissions`
  - `id`, `user_id` FK, `challenge_id` FK, `code_snapshot`, `status`, `runtime_ms`, `pass_rate`, `submitted_at`
- `submission_results`
  - `id`, `submission_id` FK, `test_name`, `passed`, `message`, `execution_time_ms`
- `user_challenge_progress`
  - `id`, `user_id` FK, `challenge_id` FK, `state` (`not_started`/`in_progress`/`completed`), `attempts_count`, `best_score`, `completed_at`
- `user_lesson_progress`
  - `id`, `user_id` FK, `lesson_id` FK, `percent_complete`, `completed_at`, `last_challenge_id`

### Optional (Post-MVP but recommended)

- `achievements`, `user_achievements`
- `activity_events` (analytics/events)
- `challenge_versions` (authoring/version history)

---

## 4) Feature Breakdown in Priority Order

## P0 — Must-have MVP

1. User auth (register/login/logout/session refresh)
2. Lesson/challenge browsing
3. Challenge workspace (instructions + editor + run)
4. Deterministic test feedback
5. Server-side submit and grade
6. Per-user challenge/lesson progress tracking

## P1 — Strong MVP Enhancements

1. Difficulty levels (`beginner`, `intermediate`, `advanced`)
2. Tiered hint system with optional score penalties
3. Submission history and best-attempt indicators
4. Dashboard with "continue where you left off"

## P2 — Post-MVP Product Depth

1. Rich real-time feedback (assertion hints, timing insights)
2. Streaks/gamification badges
3. Authoring/admin workflow for challenge review
4. Advanced analytics for challenge quality and drop-off

---

## 5) Challenge Design Rules

Each challenge should teach one Promise concept clearly and test it rigorously.

### Required Challenge Structure

Every challenge should include:
- Concept objective (one concept per challenge)
- Real-world scenario framing
- Clear success criteria
- Starter code
- Constraints (what not to change)
- Public tests (learning guidance)
- Hidden tests (robustness checks)
- Tiered hints

### Difficulty Guidelines

- Beginner: simple chaining, `.then/.catch`, return behavior
- Intermediate: `Promise.all`, sequencing vs parallel, error branches
- Advanced: retry logic, race conditions, failure isolation, concurrency caps

### What Makes a Good Promise Challenge

- Asks for behavior, not syntax trivia
- Includes at least one edge case
- Teaches a transferable mental model
- Avoids ambiguity in expected output/order

### Submission Validation Safety (Browser)

- Execute code inside a Web Worker
- Hard timeout for execution
- Prevent access to dangerous globals/APIs where feasible
- Cap memory/loop behavior as much as practical
- Never treat browser results as authoritative pass/fail

Authoritative grading should happen server-side in an isolated runner path.

---

## 6) UI/UX Design Rules

Goal: modern, minimal, focused learning flow.

### Core Layout

- Left panel: challenge instructions and objectives
- Center panel: editor + run/submit controls + output
- Right panel: hints + progress + related concept links

### UX Principles

- Keep one primary action visible at all times: `Run` or `Submit`
- Show first failing assertion clearly and explain why
- Keep progress persistent and visible (lesson + global path)
- Use short content chunks and progressive disclosure
- Keep visual hierarchy clean and low-noise

### Progress Display

- Lesson completion bars
- Difficulty badges
- Last completed challenge + recommended next challenge
- Attempt counts and best score in challenge detail

---

## 7) Deployment and Operations Plan

### Services

- `promiseland-web` -> Vercel
- `promiseland-api` -> Render/Fly/Railway
- Sidekiq worker -> same platform as API
- Postgres -> managed provider
- Redis -> managed provider

### Environment Variables (baseline)

- `APP_ENV`
- `API_BASE_URL`
- `WEB_BASE_URL`
- `DATABASE_URL`
- `REDIS_URL`
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `CORS_ALLOWED_ORIGINS`
- `SENTRY_DSN`
- `RATE_LIMIT_*`
- `GRADING_TIMEOUT_MS`

### CI/CD Considerations

- Separate pipelines per repo
- Required checks:
  - lint + type checks (frontend)
  - RuboCop + test suite (backend)
  - API contract validation
- Preview environments for frontend PRs
- Staging deploy before production
- DB migrations are explicit and reversible

---

## 8) Hardest Gotchas and Risk Areas

1. **Sandbox security and trust boundaries**  
   Client-side checks are easy to bypass. Keep server grading as source of truth.

2. **Async determinism**  
   Promise timing/order can be flaky. Build deterministic tests and explicit expectations.

3. **Schema drift across two repos**  
   Avoid frontend/backend mismatch with OpenAPI contracts and contract tests.

4. **Progress state complexity**  
   Retries, hints, rescoring, and unlock logic can become inconsistent without strict state rules.

5. **Content is the true bottleneck**  
   Challenge quality, not just engineering speed, determines product success.

6. **Scope creep early**  
   Defer social/community features until core loop is excellent.

---

## 9) 12-Week Delivery Roadmap

## Week 1 — Scope and Architecture Lock

Deliverables:
- MVP scope document
- Architecture diagram and domain boundaries
- OpenAPI draft (auth, challenges, submissions, progress)
- Challenge authoring spec v1

Exit criteria:
- Major technical decisions finalized

## Week 2 — Repo Foundations and CI

Deliverables:
- Lit repo scaffolded with routing shell and design tokens
- Rails API scaffolded with Postgres + Redis + Sidekiq
- CI pipelines enabled in both repos
- Local + staging environments booting

Exit criteria:
- Both apps pass baseline CI and deploy to staging

## Week 3 — Authentication End-to-End

Deliverables:
- Register/login/logout/refresh in API
- Frontend auth pages and protected routes
- `me` endpoint integration

Exit criteria:
- Authenticated user session works consistently

## Week 4 — Content Delivery (Lessons + Challenges)

Deliverables:
- Lessons/challenges schema + seeds
- API endpoints for listing and fetching challenge details
- Frontend lesson/challenge browsing pages

Exit criteria:
- User can navigate seeded learning content

## Week 5 — Challenge Workspace + Local Run

Deliverables:
- Monaco editor integration
- Web Worker execution pipeline
- Public test result rendering

Exit criteria:
- User can run code and see immediate feedback

## Week 6 — Submission Pipeline + Grading Jobs

Deliverables:
- Submission persistence
- Sidekiq grading job flow
- Hidden tests in authoritative grading
- Frontend submit flow and result display

Exit criteria:
- Challenge completion depends on server-side grade

## Week 7 — Progress Tracking and Difficulty Paths

Deliverables:
- Per-challenge and per-lesson progress updates
- Difficulty filters and progression rules
- Dashboard progress summaries

Exit criteria:
- Completed submissions update learning path correctly

## Week 8 — Hint System + MVP Stabilization

Deliverables:
- Tiered hints with optional score penalty
- Retry/edge-case handling
- Bug triage and MVP freeze

Exit criteria:
- Complete core loop from challenge start to progression update

## Week 9 — Security and Abuse Controls

Deliverables:
- Endpoint rate-limits
- Payload validation hardening
- Audit events for suspicious submission patterns

Exit criteria:
- No critical security gaps in internal review

## Week 10 — Analytics and Product Insights

Deliverables:
- Event instrumentation (open/run/hint/submit/pass)
- Drop-off/failure analytics by challenge
- Admin insight endpoints or simple dashboard

Exit criteria:
- Team can identify weak challenges from real usage data

## Week 11 — UX Polish and Performance

Deliverables:
- Challenge UI refinement (clarity, hierarchy, responsiveness)
- Performance improvements and loading states
- Keyboard shortcuts and interaction polish

Exit criteria:
- New users can complete first challenge with minimal friction

## Week 12 — Launch Readiness

Deliverables:
- Regression testing pass
- Runbooks (incident, rollback, migration safety)
- Monitoring/alerts tuning
- Staged production rollout

Exit criteria:
- Production-ready MVP live with observability in place

---

## 10) Suggested Team Operating Rhythm

- Weekly planning:
  - 1 engineering goal
  - 1 content goal
  - 1 UX improvement goal
- Weekly metrics:
  - sign-up to first challenge completion
  - challenge completion rate by difficulty
  - hint usage per challenge
  - fail-to-pass attempt ratio

This keeps engineering effort aligned with learning outcomes, not just feature count.

