const {breedDetails, searchBreed, topTenBreeds} = require('./breed-service');

describe('breed-service', () => {

    it('searches breeds by name', async () => {
        // When
        const results = await searchBreed('ma');

        // Then should only contain matches
        expect(results.length).toEqual(4);
        expect(results.map(breed => breed.name)).toEqual(['Himalayan', 'Khao Manee', 'Malayan', 'Manx']);
        // just return id and name for search
        expect(results.some(breed => breed.hasOwnProperty('description'))).toBeFalsy();
    })

    it('provides breed details', async () => {
        // When
        const breed = await breedDetails('khao');

        // Then
        expect(breed.description).toEqual('The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.')
    })

    it('tracks the top 10 most searched cat breeds', async () => {
        // Given
        await Promise.all([
            breedDetails('abys'),
            breedDetails('aege'),
            // no esho bah
            breedDetails('hbro'), breedDetails('hbro'), breedDetails('hbro'),
            breedDetails('hima'),
            breedDetails('manx'), breedDetails('manx'),
            breedDetails('java'), breedDetails('java'),
            breedDetails('jbob'),
            breedDetails('khao'), breedDetails('khao'), breedDetails('khao'), breedDetails('khao'),
            breedDetails('mala'),
            breedDetails('ycho'),
        ]);

        // When
        const top10 = await topTenBreeds()

        // Then
        expect(top10.length).toEqual(10)
        expect(top10[0].id).toEqual('khao')
        expect(top10[1].id).toEqual('hbro')
        expect(top10[2].id).toEqual('java')
        expect(top10[3].id).toEqual('manx')
        expect(top10[4].id).toEqual('abys')
        expect(top10[5].id).toEqual('aege')
        expect(top10[6].id).toEqual('hima')
        expect(top10[7].id).toEqual('jbob')
        expect(top10[8].id).toEqual('mala')
        expect(top10[9].id).toEqual('ycho')
    })
})
