import apiClient from "./apiClient";

export const register = async () =>
  await apiClient.post("/auth/register", {
    email: "test",
    password: "test",
  });
