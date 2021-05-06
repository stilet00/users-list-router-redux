import { useEffect, useState } from "react";
import { PAGE_STEP } from "../../../constants/constants";

export function usePagination(fetchUsers) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const [currentPage, setCurrentPage] = useState(1)
  const [firstBorder, setFirstBorder] = useState(0)
  const [secondBorder, setSecondBorder] = useState(PAGE_STEP)
  function handlePrev() {
    setCurrentPage(currentPage-1)
    setFirstBorder(firstBorder-PAGE_STEP)
    setSecondBorder(secondBorder-PAGE_STEP)
  }
  function handleFow() {
    setCurrentPage(currentPage+1)
    setFirstBorder(firstBorder+PAGE_STEP)
    setSecondBorder(secondBorder+PAGE_STEP)

  }
  return {
    handlePrev,
    handleFow,
    currentPage,
    firstBorder,
    secondBorder

  }
}
