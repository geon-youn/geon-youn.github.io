import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/main.css'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
