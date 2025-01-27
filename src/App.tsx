import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'
import CssBaseline from '@mui/material/CssBaseline'
import { Weather } from './components/Weather'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '/',
          element: (
            <Weather />
          ),
        },
      ],
    },
  ])

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}
