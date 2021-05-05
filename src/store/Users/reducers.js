import {  ACTION_CHANGE_USER, ACTION_CREATE_USER, ACTION_SET_USERS } from "./actions";
import { INITIAL_STATE } from "../../constants/Constants";
export default function reducer(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ACTION_CHANGE_USER:
            return {
                ...state,
                users: state.users.map((item) =>
                    item.id === payload.id ? payload : item
                ),
            };
        case ACTION_CREATE_USER:
            return { ...state, users: [...state.users, payload] };
        case ACTION_SET_USERS:
            return { users: [...payload] };
        default:
            return state;
    }
}