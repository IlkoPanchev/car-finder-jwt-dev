
import { getUserData } from '../utility.js'

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        } else {
            try {
                const data = await response.json();
                return data;

            } catch (err) {
                return response;
            }
        }

    } catch (err) {
        alert(err.message);
        //notify(err.message);
        throw err;
    }
}

function getOptions(method = 'get', body, isMultipart) {
    let options = {
        method,
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    }

    const user = getUserData();

    if (user) {
        options.headers['Authorization'] = 'Bearer ' + user.accessToken;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        if(isMultipart){
            options.body = body;
        }
        else{
            options.body = JSON.stringify(body)
        }
    }

    if (isMultipart) {
        delete options.headers['Content-Type'];
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions())
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function postDataMultipart(url, data, isMultipart) {
    return await request(url, getOptions('post', data, isMultipart));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function putDataMultipart(url, data, isMultipart) {
    return await request(url, getOptions('put', data, isMultipart));
}

export async function del(url) {
    return await request(url, getOptions('delete'));
}



