import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Statistics from './components/Statistics'
import Blog from './components/Blog'
import Error from './components/Error'
import AppliedJobs from './components/AppliedJobs'
import JobDetails from './components/JobDetails'
import { jobAndCartData } from './components/Loader/Cart&JobData'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('/jobs.json')
      },
      {
        path : 'statistics',
        element : <Statistics></Statistics>
      },
      {
        path : 'jobs',
        element : <AppliedJobs></AppliedJobs>,
        loader : jobAndCartData
      },
      {
        path : 'jobDetails/:id',
        element : <JobDetails></JobDetails>,
        loader : () => fetch(`/jobs.json`)
        
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
