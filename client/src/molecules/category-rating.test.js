import {render, screen} from '@testing-library/react';
import CategoryRating from './category-rating';

test('CategoryRating', () => {
    render(<CategoryRating name="Test" rating={4} data-testid="rating"/>)
    const element = screen.getByTestId('rating');
    expect(element).toHaveTextContent('Test');
    expect(element).toHaveTextContent('****');
})
