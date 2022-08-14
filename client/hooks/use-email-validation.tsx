import { useEffect, useState } from "react";
import { validateEmail } from "../utils";

/**문자열을 올바른 이메일 형식인지 평가해서 반환.
 * 공백일경우에는 합격처리
 * @param email 평가대상 문자열
 */
export const useEmailValidation = (email: string) => {
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (!email) setIsValid(true);
    else {
      setIsValid(validateEmail(email));
    }
  }, [email]);
  return isValid;
};
