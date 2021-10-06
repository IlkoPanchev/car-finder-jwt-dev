
// const host = 'http://localhost:8080';
const host = 'https://cars-rest-jwt.herokuapp.com';

const register = host + '/api/users/register';
const login = host + '/api/users/login';
const logout = host + '/api/users/logout';

export default {
    host,
    register,
    login,
    logout
}