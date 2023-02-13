import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter,
     createBrowserRouter,
     RouterProvider
} from "react-router-dom"
import App from './App';
import Landing from './pages/landing';
import ErrorPage from './pages/error';
import StrainDetail from './pages/strainDetail';
import { ChakraProvider } from '@chakra-ui/react';
import AgeVerification from './pages/ageVerification';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Cookie&family=Fredoka+One&family=Inter&display=swap');
</style>

const router = createBrowserRouter([
    {
        path: "/",
        element:<AgeVerification/>,
       
    },
    {
     path: "strain",
     element: <StrainDetail />   
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ChakraProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </ChakraProvider>
);

