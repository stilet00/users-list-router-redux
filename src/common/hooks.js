import { useState } from "react";
import { SCROLL } from "../constants/constants";

export function useLazyLoading(list) {
  const [currentRender, setCurrentRender] = useState(SCROLL.firstLoadSize);
  function handleScroll(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && currentRender <= list.length) {
      setCurrentRender(currentRender + SCROLL.loadStep);
    }
  }
  return {
    currentRender,
    handleScroll,
  };
}
