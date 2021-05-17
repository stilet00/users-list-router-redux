import axios from "axios";
import { BASE_TODOS_URL } from "../constants/constants";

export function get() {
    return axios.get(BASE_TODOS_URL);
}
export function remove(todoId) {
    return axios.delete(BASE_TODOS_URL + todoId, {
        data: {
            id: todoId,
        },
    });
}
export function add(data) {
    return axios.post(BASE_TODOS_URL, {
        title: data.title,
        isDone: data.isDone
    });
}
export function edit({ id, title, isDone }) {
    return axios.put(BASE_TODOS_URL + id, {
        id,
        title,
        isDone
    });
}
