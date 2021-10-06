
import endpoints from './endpoints.js';
import * as api from './api.js';
import {setUserData, removeUserData} from '../utility.js';

export async function register(body) {
    const result = await api.post(endpoints.register, body);
    setUserData(result);
    return result;

}

export async function login(body) {
    const result = await api.post(endpoints.login, body);
    setUserData(result);
    return result;

}

export async function logout() {
    const result = await api.post(endpoints.logout);
    removeUserData();
    return result;

}

export default {
    register,
    login,
    logout
}