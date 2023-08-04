import React, { useContext, useEffect } from 'react'
import GameContext from '../../hooks/GamesContext'
import { getSingleGame } from '../../hooks/useFetch'
import { Link, useParams } from 'react-router-dom'


function Game() {
  const {game, dispatch} = useContext(GameContext) 
  const params = useParams()
  
  useEffect(() => {
    const getGame = async() => {
      const game = await getSingleGame(params.id);
      dispatch({type: 'GET_SINGLE_GAME_INFO', payload: game})
    }
    getGame();
  }, [dispatch, params.id])

  const {
    title,
    thumbnail,
    short_description,
    game_url,
    genre,
    platform,
    developer,
    screenshots,
    release_date,
  } = game;

  return (
    <div>
        { game !== {} && (
        <div className="hero min-h-screen px-2 py-4 bg-slate-100 bankai">
        <div className="hero-content flex-shrink max-w-5xl w-full p-3  flex-col lg:flex-row-reverse">
          <img src={thumbnail} className="md:max-w-lg  object-contain rounded-lg h-[320px]" alt='' />
          <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <h3 className='text-3xl'>{genre}</h3>
          <h3 className='text-2xl'>{platform}, {developer}</h3>
          <p className="py-6">{short_description}</p>
          <h4 className="text-xl font-medium">Screenshots</h4>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                {screenshots !== undefined ? screenshots.map((shot, index) => (
                  <div key={index}>
                    <div className='relative'>
                      <img src={shot.image} alt="" className='object-contain'/>
                      <div className="badge badge-primary text-white bg-transparent badge-lg absolute top-0">{index + 1}</div>
                    </div>
                  </div>
                )) : ''}
              </div>
          <h4 className='text-md mb-2'>Release_date: {release_date}</h4>
          <div className="space-x-4">
              <Link target='_blank' to={`${game_url}`}>
                <button className="btn btn-primary">Play Now</button>
              </Link>            
              <Link to='/'>
                <button className="btn btn-primary">Back to Home</button>
              </Link>   
          </div>
      </div>
    </div>
</div>
     )}
    </div>
  )
}

export default Game