import * as api from './api.js';
import endpoints from './endpoints.js';

const host = endpoints.host;

async function setDelay(timeout) {
    return new Promise((r) => setTimeout(() => r(), timeout));
}

export async function getRecord(id) {
    // await setDelay(500);
    return await api.get(`${host}/api/cars/${id}`);
}

export async function createRecord(body, isMultipart) {
    return await api.postDataMultipart(`${host}/api/cars`, body, isMultipart);
}

export async function editRecord(id, body, isMultipart) {
    return await api.putDataMultipart(`${host}/api/cars/${id}`, body, isMultipart);
}

export async function deleteRecord(id) {
    return await api.del(`${host}/api/cars/${id}`);
}

export async function getRecordsPagination(page = 1, pageSize) {
    // await setDelay(500);
    return await api.get(`${host}/api/cars?page=${(page - 1)}&pageSize=${pageSize}`)
}

export async function getRecordsByUserPagination(userId, page = 1, pageSize) {
    // await setDelay(500);
    return await api.get(`${host}/api/cars?ownerId=${userId}&page=${(page - 1)}&pageSize=${pageSize}`);
}

export async function getRecordsByKeywordPagination(keyword, page = 1, pageSize) {
    // await setDelay(500);
    return await api.get(`${host}/api/cars?keyword=${keyword}&page=${(page - 1)}&pageSize=${pageSize}`);

}

export async function getCollectionSize() {
    // await setDelay(500);
    return await api.get(`${host}/api/cars/count`)
}


export async function getCollectionSizeByKeyword(keyword) {
    // await setDelay(500);
    return await api.get(`${host}/api/cars/count?keyword=${keyword}`)
}

export async function getCollectionSizeByUser(userId) {
    // await setDelay(500);
    return await api.get(`${host}/api/cars/count?ownerId=${userId}`);
}


export default {
    getRecord,
    getRecordsByUserPagination,
    getRecordsByKeywordPagination,
    getRecordsPagination,
    getCollectionSize,
    getCollectionSizeByKeyword,
    getCollectionSizeByUser,
    createRecord,
    editRecord,
    deleteRecord
}


