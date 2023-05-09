import axios from "axios";
// const axios = require('axios');

const baseURL = 'https://api.thecatapi.com'
const headers = {
    'x-api-key': process.env.CAT_API_KEY,
    'Content-Type': 'application/json'
}

const client = axios.create({ baseURL, headers })

/**
 * @typedef Breed
 * @field {string} id
 * @field {string} name
 */

/**
 * @type {{[id: string]: Breed}}
 */
let breedsById = null;
/**
 * @type {{[id: string]: number}}
 */
let requestsById = null;

const loadBreeds = async () => {
    const response = await axios.get('/breeds')
    breedsById = {};
    requestsById = {};

    response.data.forEach(breed => {
        breedsById[breed.id] = breed;
        requestsById[breed.id] = 0;
    });
}

/**
 * @param {string} name
 * @returns {Promise<Array<{id: string, name: string}>>}
 */
export const searchBreed = async (name) => {
    if (!breedsById) {
        await loadBreeds()
    }

    const search = name.toLowerCase();
    return Object.values(breedsById)
        .filter(breed => breed.name.toLowerCase().includes(search))
        .map(({ id, name }) => ({ id, name }));
}

/**
 * @param id
 * @returns {Promise<Breed>}
 */
export const breedDetails = async (id) => {
    if (!breedsById) {
        await loadBreeds()
    }

    recordRequestForBreed(id);

    return breedsById[id];
}

export const topTenBreeds = async () => {
    Object.entries(requestsById)
        .toSorted((a, b) => (b[1] === a[1]) ? a[0].localeCompare(b[0]) : b[1] - a[1])
        .map(entry => breedsById[entry[0]])
}

const recordRequestForBreed = (id) => {
    let count = requestsById[id];
    if (count === undefined) {
        count = 0;
    } else {
        count++;
    }

    requestsById[id] = count;
}
