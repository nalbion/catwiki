import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import ErrorPage from "./pages/error/ErrorPage";
import { BreedDetails, breedDetailsLoader } from "./pages/breed-details";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [

    ]
  },
  {
    path: '/breed/:breedId',
    element: <BreedDetails />,
    // errorElement: <ErrorPage />,
    loader: breedDetailsLoader,
  }
]);

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>*/
  );
}

export default App;
