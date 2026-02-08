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

export const sendVerificationCode = async (email: string, code: number) =>
  await apiClient.post("/auth/verification-code", {
    email,
    code,
  });
