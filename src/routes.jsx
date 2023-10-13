import React from 'react'
import Layout from './components/Layout.jsx'

const Landing = React.lazy(() => import('./pages/Landing.jsx'))
const Questions = React.lazy(() => import('./pages/Questions.jsx'))
const Recipe = React.lazy(() => import('./pages/Recipe.jsx'))
const SearchRecipes = React.lazy(() => import('./pages/SearchRecipts.jsx'))
const Calendar = React.lazy(() => import('./pages/Calendar.jsx'))

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/questions',
        element: <Questions />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/recipe/:id/:name',
        element: <Recipe />,
      },
      {
        path: '/search',
        element: <SearchRecipes />,
      },
    ],
  },
]
