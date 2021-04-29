import { ACTION_DELETE_USER, ACTION_CHANGE_USER, ACTION_CREATE_USER } from "./actions";
import { INITIAL_STATE } from "../mocs/mocs";
export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_DELETE_USER:
            return {
                ...state,
                list: state.list.filter((item) => item.id !== payload),
            };
        case ACTION_CHANGE_USER:
            const changedTodo = { ...payload, completed: !payload.completed };
            return {
                ...state,
                list: state.list.map((item) =>
                    item.id === changedTodo.id ? changedTodo : item
                ),
            };
        case ACTION_CREATE_USER:
            payload.completed = false;
            payload.id = Math.floor(Date.now());
            return { ...state, list: [...state.list, payload] };
        default:
            return state;
    }
}