import axios from "axios";
import { BASE_USERS_URL } from "../constants/Constants";


export function apiGet() {
    return axios.get(BASE_USERS_URL);
}
export function apiRemove(userId) {
    return axios.delete(BASE_USERS_URL + userId, {
        data: {
            id: userId,
        },
    });
}
export function apiAdd(data) {
    return axios.post(BASE_USERS_URL, {
        name: data.name,
        surname: data.email,
        phone: data.phone,
    });
}
export function apiEdit( {id, name, email, phone}) {
    return axios.put(BASE_USERS_URL + id, {
        id,
        name,
        email,
        phone
    });
}