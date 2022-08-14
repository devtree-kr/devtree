import { useEffect, useState } from "react";

/**값 모두가 Truthy인가 평가해서 반환
 * @param checks 평가하고 싶은 값
 */
export const useAllPassed = (...checks: any[]) => {
  const [passed, setPassed] = useState(false);
  useEffect(() => {
    setPassed(checks.map(Boolean).every((x) => x === true));
  }, [checks]);
  return passed;
};
