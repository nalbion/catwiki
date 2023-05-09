import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import ErrorPage from './pages/error/ErrorPage';
import { BreedDetails, breedDetailsLoader } from './pages/breed-details';
import {homepageLoader} from './pages/homepage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
    loader: homepageLoader,
  },
  {
    path: '/breeds/:breedId',
    element: <BreedDetails />,
    errorElement: <ErrorPage />,
    loader: breedDetailsLoader,
  }
]);

function App() {
  return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
