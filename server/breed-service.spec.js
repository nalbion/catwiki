import mockAxios from 'jest-mock-axios';
import {searchBreed} from "./breed-service";

// const mockAxios = require('jest-mock-axios');
// const {searchBreed} = require("./breed-service");

describe('breed-service', () => {
    afterEach(() => {
        mockAxios.reset();
    })

    it('searches breeds by name', (done) => {
        // When
        const results = searchBreed('ma');
        mockBreedsResponse();

        // Then
        results.then(results => {
            expect(results.length).toEqual(3);
            expect(results.map(breed => breed.name)).toEqual(['Khao Manee', 'Malayan', 'Manx']);
            done();
        }).catch(done)
    })
})

const mockBreedsResponse = () => {
    mockAxios.mockResponse({
        data: [
            { id: 'abys', name: 'Abyssinian' },
            { id: 'aege', name: 'Aegean' },
            { id: 'khao', name: 'Khao Manee' },
            { id: 'mala', name: 'Malayan' },
            { id: 'manx', name: 'Manx' },
            { id: 'ycho', name: 'York Chocolate' }
        ]
    })
}
