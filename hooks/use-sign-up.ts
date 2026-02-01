import { register } from "@/api/authService";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useSignUp = () => {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const onSignUp = async () => {
    try {
      const result = await register();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    acceptedTerms,
    setAcceptedTerms,
    insets,
    onSignUp,
  };
};
