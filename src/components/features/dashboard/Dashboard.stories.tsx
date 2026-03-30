import type { Meta, StoryObj } from "@storybook/react-vite";
import { AuthContext } from "@/contexts/AuthContext";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

const mockUser: User = {
  id: "00000000-0000-4000-8000-000000000001",
  email: "julian@example.com",
  username: "Julian",
  userProfile: {
    id: "00000000-0000-4000-8000-000000000002",
    displayName: "Julian",
    avatarUrl: null,
    experienceLevel: "intermediate",
  },
};

const meta = {
  title: "Features/Dashboard",
  component: Dashboard,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/dashboard"]}>
        <AuthContext.Provider
          value={{
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
          }}
        >
          <Story />
        </AuthContext.Provider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {};
