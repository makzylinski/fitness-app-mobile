import apiClient from "./apiClient";

export const register = async () => {
  const response = await apiClient.post("/auth/register", {
    email: "test",
    password: "test",
  });
};
