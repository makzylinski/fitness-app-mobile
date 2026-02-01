import apiClient from "./apiClient";

export const register = async () =>
  await apiClient.post("/auth/register", {
    email: "test",
    password: "test",
  });

export const login = async () =>
  await apiClient.post("/auth/login", {
    email: "test",
    password: "test",
  });
