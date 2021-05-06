import axios from "axios";
import { BASE_USERS_URL } from "../constants/constants";

export function get() {
  return axios.get(BASE_USERS_URL);
}
export function remove(userId) {
  return axios.delete(BASE_USERS_URL + userId, {
    data: {
      id: userId,
    },
  });
}
export function add(data) {
  return axios.post(BASE_USERS_URL, {
    name: data.name,
    surname: data.email,
    phone: data.phone,
  });
}
export function edit({ id, name, email, phone }) {
  return axios.put(BASE_USERS_URL + id, {
    id,
    name,
    email,
    phone,
  });
}
