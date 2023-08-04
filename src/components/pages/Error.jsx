import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Error({children}) {
  return (
    <div className='hero text-center mx-auto bg-base-200 h-screen w-full font-medium py-10 px-6'>
      <div className='space-y-7'>
               <h1 className="text-6xl">{children}</h1>
              <Link to='/' className='btn btn-lg btn-primary'>
                  <FaHome color='white'/>
                  Back to Home
              </Link>
      </div>
    </div>
  )
}

Error.defaultProps = {
    children: 'Opps we ran into a problem'
}

Error.propTypes = {
  children: PropTypes.string.isRequired
}

export default Error