import { useEffect } from "react";

export function useTodos(fetchTodos) {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
}
