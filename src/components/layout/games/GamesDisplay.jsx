import React from 'react'
import img from '../../../img/wp12267277-desktop-game-hd-wallpapers.jpg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function GamesDisplay({item: {title, thumbnail, genre, release_date, id}}) {
   let hey=  release_date.split('-')
   let year = hey[0];
  return (
    <>
        <div className="card md:w-96 w-80 bg-base-100 shadow-xl">
          <figure><img src={thumbnail ? thumbnail: img} alt='' /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {title}
              {year >= 2020 ? <div className="badge badge-secondary">NEW</div> : ''}
            </h2>
            <p>{genre}</p>
            <small className='text-sm'>{release_date}</small>
            <Link to={`/game/${id}`} className='btn btn-md btn-primary bg-slate-500 border-none hover:bg-slate-600 text-white'>
                Learn more
            </Link>
          </div>
       </div>
    </>
  )
}

GamesDisplay.propTypes = {
  item: PropTypes.object.isRequired,
}

export default GamesDisplay