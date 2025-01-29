import {useState, useEffect} from 'react'
import { GameListContainer, GameList } from './style'
import GameCard from '../gameCard'

export default function Index({gameList, title}) {

    const [currentPages, setCurrentPages] = useState(1)

    if(gameList) {
            var gameListFiltered = gameList.filter((game, index) => {
            if (index < currentPages * 12){
                return game
            }
    
            return null
        })
    }

    useEffect(() => {
        const Observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    setTimeout(() => {
                    setCurrentPages((currentPageInState) => currentPageInState + 1)
                    }, 100)
                }
            })
        })

        Observer.observe(document.querySelector('div#sentinel'))

        return () => Observer.disconnect()

    }, [])
  

  return (

    <GameListContainer>
        <h2>{title}</h2>

            {gameList && (

                <GameList>
                    {gameListFiltered.map((game, index) => (
                        <span key={index} className='game_container'>
                            <GameCard id={game.id} title={game.title} thumb={game.thumbnail} platform={game.platform}/>
                        </span>
                    ))}
                </GameList>

            )}
            
            <div id='sentinel'></div>

    </GameListContainer>
  )
}
