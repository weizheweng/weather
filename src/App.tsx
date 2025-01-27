import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './global.css'
import { Weather } from './components/Weather'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: '/', element: <Navigate to="/weather" replace /> },
        { path: '/weather', element: <Weather /> },
        { path: '*', element: 'NotFound' },
      ],
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}
