module.exports = {
    get: () => Promise.resolve({
        data: [
            { id: 'abys', name: 'Abyssinian' },
            { id: 'aege', name: 'Aegean' },
            { id: 'esho', name: 'Exotic Shorthair' },
            { id: 'hbro', name: 'Havana Brown' },
            { id: 'hima', name: 'Himalayan' },
            { id: 'jbob', name: 'Japanese Bobtail' },
            { id: 'java', name: 'Javanese' },
            {
                id: 'khao',
                name: 'Khao Manee',
                description: 'The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.',
                temperament: 'Calm, Relaxed, Talkative, Playful, Warm',
            },
            { id: 'mala', name: 'Malayan' },
            { id: 'manx', name: 'Manx' },
            { id: 'ycho', name: 'York Chocolate' }
        ]
    })
}
