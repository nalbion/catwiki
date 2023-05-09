import mockAxios from 'jest-mock-axios';
import {breedDetails, searchBreed, topTenBreeds} from "./breed-service";

// const mockAxios = require('jest-mock-axios');
// const {searchBreed} = require("./breed-service");

describe('breed-service', () => {
    afterEach(() => {
        mockAxios.reset();
    })

    it('searches breeds by name', (done) => {
        // When
        const request = searchBreed('ma');
        mockBreedsResponse();

        // Then should only contain matches
        request.then(results => {
            expect(results.length).toEqual(3);
            expect(results.map(breed => breed.name)).toEqual(['Khao Manee', 'Malayan', 'Manx']);
            // just return id and name for search
            expect(results.some(breed => breed.hasOwnProperty('description'))).toBeFalsy()
            done();
        }).catch(done)
    })

    it('provides breed details', (done) => {
        // When
        const request = breedDetails('khao');
        mockBreedsResponse();

        // Then
        request.then(breed => {
            expect(breed.description).toEqual('The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.')
            done();
        }).catch(done)
    })

    it('tracks the top 10 most searched cat breeds', async () => {
        // Given
        const requests = Promise.all([
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
        mockBreedsResponse();
        await requests

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

const mockBreedsResponse = () => {
    mockAxios.mockResponse({
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
