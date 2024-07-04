import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import Home from '../src/pages/Home/HomePage.jsx';
import Articles from '../src/pages/Articles/ArticlesPage.jsx';
import About from '../src/pages/About/AboutPage.jsx';
import Quizz from '../src/pages/quizz/QuizzPage.jsx';
import Data from '../src/pages/Data/DataPage.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/articles',
        element: <Articles />,
      },

      {
        path: '/about',
        element: <About />,
      },

      {
        path: '/quizz',
        element: <Quizz />,
      },

      {
        path: '/data',
        element: <Data />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
