import { sendVerificationCode } from "@/api/authService";
import { AuthStorage } from "@/storage/auth-storage";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export const useVerificationCode = () => {
  const { email } = useLocalSearchParams();
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [finalCode, setFinalCode] = useState(0);
  const [isResending, setIsResending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const onSendVerificationCode = async () => {
    try {
      const result = await sendVerificationCode(String(email), finalCode);
      AuthStorage.setToken((result.data as { token: string }).token);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => setIsResending(false), 1000); // TODO
  };

  const handleVerify = () => {
    setIsVerifying(true);
    onSendVerificationCode();
  };

  useEffect(() => {
    const codeAsNumber = Number(code.join(""));
    setFinalCode(codeAsNumber);
    console.log(codeAsNumber);
  }, [code]);

  return {
    code,
    setCode,
    onSendVerificationCode,
    handleResend,
    handleVerify,
    isResending,
    isVerifying,
  };
};
