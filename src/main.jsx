import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Play from './pages/Play';
import './styles/main.css'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/play',
    element: <Play />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
