import {useState, useEffect} from 'react'
import { Search } from './style'
import {FaSearch} from 'react-icons/fa'

import GameList  from '../../layout/gameList/'

import { getGamesSorted } from '../../../api/request'

export default function Index() {

    const [gameList, setGameList] = useState()

    const [search, setSearch] = useState(null)

    const [gameListSearch, setGameListSearch] = useState()


    useEffect(() => {
        async function loadData() {
            const Data = await getGamesSorted('alphabetical')
            setGameList(Data)
        }

        loadData()
    }, [])

    useEffect(() => {
        if(search){
            var gameListFiltered = gameList.filter((game) => {
                if (game.title.toLowerCase().includes(search.toLowerCase())){
                    return game
                }
        
                return null
            })
        }

        setGameListSearch(gameListFiltered)
    }, [search])

  return (
    <Search>
        <h1>Find Games</h1>

        <div className='line'></div>

        <div className='flex_container'>
            <input type='text' placeholder='Serch for games' onChange={(e) => setSearch(e.target.value)}/>
            <FaSearch/>
        </div>

        <GameList title={search ? `Results for "${search}"` : 'Games listed alphabetically'} gameList={gameListSearch ? gameListSearch : gameList}/>

    </Search>
  )
}
