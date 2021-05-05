export const ACTION_DELETE_USER = "ACTION_DELETE_USER";
export const ACTION_CHANGE_USER = "ACTION_CHANGE_USER";
export const ACTION_CREATE_USER = "ACTION_CREATE_USER";
export const ACTION_SET_USERS = "ACTION_SET_USER";

export function removal(payload) {
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
