import { useEffect, useState } from "react";
import { SCROLL } from "../../../constants/constants";

export function useList(users, fetchUsers) {
  const [currentRender, setCurrentRender] = useState(SCROLL.firstLoadSize);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  function handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && currentRender <= users.length) {
      setCurrentRender(currentRender + SCROLL.loadStep);
    }
  }
  return {
    currentRender,
    handleScroll,
  };
}
