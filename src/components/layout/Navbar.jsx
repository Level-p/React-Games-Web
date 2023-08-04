import React from 'react'
import { Link } from 'react-router-dom'
import {FaGamepad} from 'react-icons/fa'

function Navbar({child}) {
  return (
    <>
        <nav className='container max-w-5xl mx-auto bg-transparent'>
            <div className="flex justify-between p-2 px-4 py-4">
                <Link to='/'>
                    <div className='flex space-x-2'>
                        <FaGamepad color='blue' size={'30'}/>
                        <h1 className='text-xl font-medium'>{child}</h1>
                    </div>
                </Link>

                <div className='space-x-4 '>
                    <Link to='/' className='links'>
                        Home
                    </Link>
                    <Link className='links' to='/about'>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

Navbar.defaultProps = {
    child: 'Games Web'
}

export default Navbar