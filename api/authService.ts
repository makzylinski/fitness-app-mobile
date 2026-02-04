import apiClient from "./apiClient";

export const register = async (email: string, password: string) =>
  await apiClient.post("/auth/register", {
    email,
    password,
  });

export const login = async () =>
  await apiClient.post("/auth/login", {
    email: "test",
    password: "test",
  });
