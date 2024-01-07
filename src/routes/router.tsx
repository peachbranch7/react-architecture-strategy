import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '../components/layout'

const UserPage = lazy(() => import('../pages/user/user.page'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <>Home</>,
      },
      {
        path: '/user',
        index: true,
        element: <UserPage />,
      },
    ],
  },
])

export const AppRoutes = () => {
  return <RouterProvider router={router} />
}
