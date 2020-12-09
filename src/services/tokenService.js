function setToken(token) {
    if(token) {
        localStorage.setItem('token', token);
    } else {
        localStorage.removeItem('token');
    }
}

function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function getToken() {
    let token = localStorage.getItem('token');
    // check if we even have the token
    if(token) {
        // extract the payload
        const payload = JSON.parse(atob(token.split('.')[1]));
        // check the expiration date
        if(payload.exp < Date.now() / 1000){
            localStorage.removeItem('token');
            token = null;
        }
    }
    return token
     //if all good return token to the next function
    
}

function removeToken() {
    localStorage.removeItem('token');
}

export {
    setToken,
    getUserFromToken,
    getToken,
    removeToken
}