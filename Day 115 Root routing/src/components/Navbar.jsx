import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const router = createBrowserRouter([


    ])
  return (
        <div>
            <nav>
                <Link to="/"><li>Home</li></Link>
                <Link to="/"><li>About</li></Link>
                <Link to="/"><li>Contact</li></Link>
            </nav>
        </div>
    )
}

export default Navbar


