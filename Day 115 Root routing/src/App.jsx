import './App.css'
import Navbar from './Components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>

    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/username",
      element: <><Navbar /><User /></>
    }

  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />

    </>
  )
}

export default App
