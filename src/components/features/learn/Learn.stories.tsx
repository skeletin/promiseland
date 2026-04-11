import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuthContext } from "@/contexts/AuthContext";
import layoutStyles from "@/components/navigation/AuthenticatedLayout.module.css";
import SideBar from "@/components/navigation/SideBar";
import { MemoryRouter } from "react-router-dom";
import Learn from "./Learn";

const mockUser: User = {
  id: "00000000-0000-4000-8000-000000000001",
  email: "learner@example.com",
  username: "Alex",
  userProfile: {
    id: "00000000-0000-4000-8000-000000000002",
    displayName: "Alex",
    avatarUrl: null,
    experienceLevel: "intermediate",
    dayStreak: 3,
    level: 5,
    xp: 2400,
  },
};

const meta = {
  title: "Features/Learn",
  component: Learn,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/learn"]}>
        <AuthContext.Provider
          value={{
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          }}
        >
          <div className={layoutStyles["authenticated-layout"]}>
            <SideBar />
            <main className={layoutStyles["authenticated-layout__main"]}>
              <Story />
            </main>
          </div>
        </AuthContext.Provider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Learn>;

export default meta;
type Story = StoryObj<typeof Learn>;

export const LearningPath: Story = {};
