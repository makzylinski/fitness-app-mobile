import apiClient from "./apiClient";

export const register = async (email: string, password: string) =>
  await apiClient.post("/auth/register", {
    email,
    password,
  });

export const login = async (email: string, password: string) =>
  await apiClient.post("/auth/login", {
    email,
    password,
  });
