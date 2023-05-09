export const searchBreeds = (name) => {
    return fetch('/api/breeds?name=' + name)
        .then(res => res.json())
}

export const getBreedDetails = (id) => {
    return fetch('/api/breeds/' + id)
        .then(res => res.json())
}

// export const getTop10 = (name) => {
//     return fetch('/api/top-10' + name)
//         .then(res => res.json())
// }

export const getTop10 = () => {
    return fetch('/api/top-10')
        .then(res => res.json());
}
