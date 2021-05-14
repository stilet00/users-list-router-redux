export const ACTION_DELETE_TODO = "ACTION_DELETE_USER";
export const ACTION_CHANGE_STATUS = "ACTION_CHANGE_STATUS";
export const ACTION_CREATE_TODO = "ACTION_CREATE_USER";
export const ACTION_SET_TODOS = "ACTION_SET_USER";

export function removal(payload) {
  return { type: ACTION_DELETE_TODO, payload };
}
export function create(payload) {
  return { type: ACTION_CREATE_TODO, payload };
}
export function set(payload) {
  return { type: ACTION_SET_TODOS, payload };
}
export function change(payload) {
  return { type: ACTION_CHANGE_STATUS, payload };
}
