import {render, screen} from '@testing-library/react';
import TopTen from './TopTen';

test('TopTen', () => {
    const breeds = [
        createBreed('1', 'test-1'),
        createBreed('2', 'test-2'),
        createBreed('3', 'test-3'),
        createBreed('4', 'test-4'),
        createBreed('5', 'test-5'),
    ]

    render(<TopTen breeds={breeds} data-testid="top10"/>);

    const element = screen.getByTestId('top10');
    expect(element.querySelectorAll('img')[4]).toHaveAttribute('src', 'test-5');
})

test('TopTen without image', () => {
    const breeds = [
        createBreed('1', 'test-1'),
        createBreed('2', 'test-2'),
        createBreed('3', 'test-3'),
        createBreed('4', 'test-4'),
        createBreed('5'), // Malayan does not have an image.
    ]

    render(<TopTen breeds={breeds} data-testid="top10"/>);

    const element = screen.getByTestId('top10');
    expect(element.querySelectorAll('img')[3]).toHaveAttribute('src', 'test-4');
    expect(element.querySelectorAll('img')).toHaveLength(4)
})

function createBreed(id, image) {
    return image ? { id,  image: { url: image }} : { id };
}
