import React from 'react';
import ReactDOM from 'react-dom/client';
import {
     createBrowserRouter,
     RouterProvider
} from "react-router-dom"
import App from './App';
import Landing from './pages/landing';
import ErrorPage from './pages/error';
import StrainDetail from './pages/strainDetail';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cookie&family=Fredoka+One&family=Inter&display=swap');
</style>

const router = createBrowserRouter([
    {
        path: "/",
        element:<Landing/>,
        errorElement: <ErrorPage />
    },
    {
     path: "strain/:strainId",
     element: <StrainDetail />   
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
);

