const axios = require('axios');

const baseURL = 'https://api.thecatapi.com/v1'
const headers = {
    'x-api-key': process.env.CAT_API_KEY,
    'Content-Type': 'application/json'
}

// const client = axios.create({ baseURL, headers })

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

let pendingBreedsRequest = null

const loadBreeds = async () => {
    if (pendingBreedsRequest === null) {
        // const client = axios.create({ baseURL, headers });
        pendingBreedsRequest = axios.get('/breeds', { baseURL, headers });
    }
    const response = await pendingBreedsRequest;
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
const searchBreed = async (name) => {
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
const breedDetails = async (id) => {
    try {
        if (!breedsById) {
            await loadBreeds();
        }

        recordRequestForBreed(id);
    } catch (err) {
        console.error('Failed to get breed details', err);
    }

    return breedsById[id];
}

const topTenBreeds = async () => {
    const entries = Object.entries(requestsById);
    entries.sort((a, b) =>
        (b[1] === a[1])
            ? a[0].localeCompare(b[0])
            : b[1] - a[1]);

    return entries.slice(0, 10).map(entry => breedsById[entry[0]]);
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

module.exports = {
    searchBreed,
    breedDetails,
    topTenBreeds
}
