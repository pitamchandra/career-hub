import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Jobs from './components/Jobs'
import Error from './components/Error'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('categories.json')
      },
      {
        path : 'statistics',
        element : <Statistics></Statistics>
      },
      {
        path : 'jobs',
        element : <Jobs></Jobs>,
      },
      {
        path : 'blog',
        element : <Blog></Blog>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
