import { useEffect } from "react";

export function useList(fetchUsers) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
}
