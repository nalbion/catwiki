import {render, screen} from '@testing-library/react';
import RatingIndicator from './rating-indicator';

test('RatingIndicator', () => {
    render(<RatingIndicator rating={3} data-testid="rating"/>)
    const ratingElement = screen.getByTestId('rating');
    expect(ratingElement).toHaveTextContent('***');
})
