import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {BreedDetails} from './index';
import {act, render, screen} from '@testing-library/react';

test('BreedDetails without image', async () => {
    const routes = [{
        path: '/breeds/123',
        element: <BreedDetails />,
        loader: () => ({
            name: 'Test Cat',
            description: 'Cat for testing',
        }),
    }];

    const router = createMemoryRouter(routes, { initialEntries: ['/breeds/123'] });

    await act(async () => {
        await render(<RouterProvider router={router} />);
    })

    const element = screen.getByText('Test Cat').parentElement;
    expect(element).toHaveTextContent('Cat for testing');
})

test('BreedDetails with image', async () => {
    const routes = [{
        path: '/breeds/123',
        element: <BreedDetails />,
        loader: () => ({
            name: 'Test Cat',
            description: 'Cat for testing',
            image: { url: 'test-image' }
        }),
    }];

    const router = createMemoryRouter(routes, { initialEntries: ['/breeds/123'] });

    await act(async () => {
        await render(<RouterProvider router={router} />);
    })

    const element = screen.getByText('Test Cat').parentElement;
    expect(element.querySelector('img')).toHaveAttribute('src', 'test-image');
})
