import React, { useState } from 'react'
import img from '../../img/wp12267277-desktop-game-hd-wallpapers.jpg'
import { useContext,  } from 'react'
import GameContext from '../../hooks/GamesContext'
import { getGameCategory, /*getGames*/ } from '../../hooks/useFetch'
import GamesList from './games/GamesList'

function Showcase() {
  const gameTypes = ['shooter', 'sports', 'fantasy', 'action', 'military', 'horror', 'space', 'flight', 'superhero'];
  const {/*latest*/ dispatch} = useContext(GameContext)
  const [loading, /*setLoading */] = useState(false);
  const[category] = useState(gameTypes)

  // const fetchGames = async() => {
  //   setLoading(true)
  //   const games = await getGames()
  //     dispatch({type:'GET_LISTS', payload: games.slice(0 , 100)})
  //     setLoading(false)
  // }

  const getCategory = async(value) => {
    const category = await getGameCategory(value)
    dispatch({type: 'GET_LIST_CATEGORY', payload: category})
  } 

  return (
    <>
          <div className="hero md:min-h-screen min-h-[400px]" style={{backgroundImage: `url(${img})`}}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Schatten Bereich</h1>
          <p className="mb-5">Welcome to the gaming world my underlings, prepare to fight and attain glory in pure combat against the best of the best</p>
          <div className="flex space-x-2 justify-center">
          {/* <button onClick={(e) => {e.preventDefault(); fetchGames()}} className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
    <div className="bankai my-12 flex flex-col justify-center space-y-1 md:space-x-1 md:flex-row p-2 md:space-y-0">
          {/* <a href='!#' className='btn' onClick={reUseFetch}>all</a> */}
            {category.map((type, index) => (
                <a href="!#" id={`clicked${type}`}className='btn' 
                onClick={async(e) => {
                  e.preventDefault()
                  getCategory(type)}} 
                  key={index}
               >{type}</a>
            ))}
          </div>
      {category.length > 0 && (
        <>
        <GamesList load={loading}/>
        </>
      )}
    </>
  )
}

export default Showcase