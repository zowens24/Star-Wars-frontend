import { getUserFromToken, setToken, removeToken } from "./tokenService";

const BASE_URL='https://project-3-backend-2.herokuapp.com';

function signup(user) {
return fetch(BASE_URL + '/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'Application/json'
    },
    body: JSON.stringify(user)
}).then(response => {
    if(response.ok) return response.json();
    throw new Error('Email already taken');
}).then(({ token }) => setToken(token));
}

function login(credentials) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => {
        if(response.ok) return response.json();
        throw new Error('bad credentials');
    }).then(({ token }) => setToken(token));
}

function logout() {
    removeToken();
}

function getUser() {
return getUserFromToken();
}

export {
    signup,
    login,
    getUser,
    logout
}