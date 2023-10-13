import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes.jsx'
import './index.css'

const App = () => {
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} />
}

export default App
