import { add, edit, get, remove } from "../../services/services";
import { change, create, set, removal } from "./actions";

export const fetchUsers = () => (dispatch) => {
  get().then(({ data }) => dispatch(set(data)));
};

export const deleteUser = (userId) => (dispatch) => {
  remove(userId).then((res) => dispatch(removal(userId)));
};
export const addUser = (newUser) => (dispatch) => {
  add(newUser).then(({ data }) => dispatch(create(data)));
};

export const editUser = (user) => (dispatch) => {
  edit(user).then((res) => dispatch(change(user)));
};
