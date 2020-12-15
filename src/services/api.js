const BASE_URL = 'https://swapi.dev/api/';

// define a function to get all the starship resources
export function getStarShips() {
    return fetch(BASE_URL + 'starships/').then(res => res.json());
}

export function getPeople() {
    return fetch(BASE_URL + 'people/').then(res => res.json());
}