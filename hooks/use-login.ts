import { login } from "@/api/authService";
import { router } from "expo-router";
import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = async () => {
    try {
      const response = await login();
      if (response?.status === 200) {
        router.push("/");
      }
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    onLogin,
  };
};
