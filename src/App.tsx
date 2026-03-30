import { Route, Routes } from "react-router-dom";
import Auth from "./components/features/auth/Auth";
import Landing from "./components/features/landing/Landing";
import Onboarding from "./components/features/onboarding/Onboarding";
import Learn from "./components/features/learn/Learn";
import AuthenticatedRoutes from "./components/navigation/AuthenticatedRoutes";
import UnauthenticatedRoutes from "./components/navigation/UnauthenticatedRoutes";

export default function App() {
  return (
    <Routes>
      <Route element={<UnauthenticatedRoutes />}>
        <Route index element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Route>

      <Route element={<AuthenticatedRoutes />}>
        <Route path="/learn" element={<Learn />} />
      </Route>
    </Routes>
  );
}
