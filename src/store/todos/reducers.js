import {
  ACTION_CHANGE_STATUS,
  ACTION_CREATE_TODO,
  ACTION_DELETE_TODO,
  ACTION_SET_TODOS,
} from "./actions";

import { INITIAL_STATE } from "../../constants/constants";
export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_CHANGE_STATUS:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };
    case ACTION_CREATE_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case ACTION_SET_TODOS:
      return { ...state, todos: [...payload] };
    case ACTION_DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
}
