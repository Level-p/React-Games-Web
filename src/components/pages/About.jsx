import React from 'react'
import img from '../../img/wp6059194-desktop-game-hd-wallpapers.jpg'
import { Link } from 'react-router-dom'

function About({child}) {
  return (
    <>
     <div className="bankai hero min-h-screen bg-base-300">
            <div className="hero-content flex-shrink max-w-5xl w-full p-3 mx-auto flex-col lg:flex-row-reverse">
              <img src={img} className=" md:max-w-lg  object-contain rounded-lg shadow-2xl" alt='' />
              <div>
            <h1 className="text-5xl font-bold">{child}</h1>
            <p className="py-6">This is an online website that shows the new and latest games available on different gaming platforms as well as links to knowing more about the individual games or playing it yourself</p>
            <Link to='/'>
               <button className="btn btn-primary">Back To Home</button>
            </Link>            
          </div>
        </div>
    </div>
    </>
  )
}

About.defaultProps = {
    child: 'About Us'
}

export default About