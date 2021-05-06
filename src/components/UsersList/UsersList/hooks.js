import { useEffect, useState } from "react";
import { SCROLL_STEP } from "../../../constants/Constants";

export function useList(users, fetchUsers) {
  const [currentRender, setCurrentRender] = useState(4);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  function handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && currentRender <= users.length) {
      setCurrentRender(currentRender + SCROLL_STEP);
    }
  }
  return {
    currentRender,
    handleScroll,
  };
}
