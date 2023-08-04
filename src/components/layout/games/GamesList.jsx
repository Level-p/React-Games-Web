import {useContext, useState} from 'react'
import GameContext from '../../../hooks/GamesContext'
import GamesDisplay from './GamesDisplay'
import Spinner from '../Spinner'
import { Pagination } from '../../../hooks/Pagination'

function GamesList({loading}) {
  const [currentGamePage, setCurrentPage]= useState(1)
  const [gamesPerPage] = useState(9)
  const {category} = useContext(GameContext)

  // Get current posts
  const indexOfLastPage = currentGamePage * gamesPerPage
  const indexOfFirstPage = indexOfLastPage - gamesPerPage;
  const currentPage = category.slice(indexOfFirstPage, indexOfLastPage)

  // Change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  if(loading === true) {
    return <Spinner/>
  } else {
    return (
      <div id='games' className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto justify-center space-y-7 md:space-x-3 overflow-y-visible my-12 bankai pb-56 md:pb-0'>
          {currentPage.map((item) => (
              <GamesDisplay  key={item.id} item={item}/>
          ))}
          <div className='md:col-span-2 xl:col-span-3 col-span-1'>  
          <Pagination postPerPage={gamesPerPage} totalPosts={category.length} paginate={paginate}/>
          </div>
      </div>
    )
  }
}

export default GamesList
