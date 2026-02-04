import { register } from "@/api/authService";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useSignUp = () => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const onSignUp = async () => {
    try {
      const result = await register(email, password);
      console.log(result);
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
    acceptedTerms,
    setAcceptedTerms,
    insets,
    onSignUp,
  };
};
