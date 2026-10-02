import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 '>
      <div className="mycontainer flex justify-between items-center mycontainer py-8 px-4 h-6">

        <div className="logo font-bold text-2xl text-white">
          <span className='text-green-700'>
            &lt;
          </span>
          Pass
          <span className='text-green-700'>

            OP/&gt;
          </span>
        </div>
        <ul>
          <li className='flex gap-4 text-white'>
            <a className='hover:font-bold' href='/'>Home</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Contact</a>

          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
