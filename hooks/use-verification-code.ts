import { sendVerificationCode } from "@/api/authService";
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
      router.push("/");
      console.log(result);
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
