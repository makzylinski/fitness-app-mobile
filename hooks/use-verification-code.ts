import { sendVerificationCode } from "@/api/authService";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export const UseVerificationCode = () => {
  const { email } = useLocalSearchParams();
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [finalCode, setFinalCode] = useState(0);

  const onSendVerificationCode = async () => {
    console.log(code);
    try {
      const result = await sendVerificationCode(String(email), finalCode);
      router.push("/verification-code");
      console.log(result);
    } catch (err) {
      console.error(err);
    }
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
  };
};
