import { Route, Routes } from "react-router-dom";
import Auth from "./components/features/auth/Auth";
import Onboarding from "./components/features/onboarding/Onboarding";

export default function App() {
  return (
    <Routes>
      <Route index element={<>Home</>} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  );
}
