import { apiAdd, apiEdit, apiGet, apiRemove } from "../../services/services";

export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';
export const ACTION_CHANGE_USER = 'ACTION_CHANGE_USER';
export const ACTION_CREATE_USER = 'ACTION_CREATE_USER';
export const ACTION_SET_USERS = 'ACTION_SET_USER';

export function remove(payload) {
    return { type: ACTION_DELETE_USER, payload };
}
export function create(payload) {
    return { type: ACTION_CREATE_USER, payload };
}
export function set(payload) {
    return { type: ACTION_SET_USERS, payload };
}
export function change(payload) {
    return { type: ACTION_CHANGE_USER, payload };
}

export const fetchUsers = ()  => (dispatch) => {
        apiGet().then(({ data }) => dispatch(set(data)))
    };

export const deleteUser = (userId) => (dispatch, getState) => {
        let { users } = getState()
        users = users.users.filter(item => item.id !== userId)
        apiRemove(userId).then(res => dispatch(set(users)))
    }
export const addUser = (newUser) => (dispatch) => {
        apiAdd(newUser).then(({data}) => dispatch(create(data)))
    }

export const editUser = (user) => (dispatch) => {
        apiEdit(user).then(res => dispatch(change(user)))
    }
