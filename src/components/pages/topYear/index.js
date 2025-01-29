import {useEffect, useState} from 'react'
import { TopYearContainer } from './style'
import GameLine from '../../layout/gameCardLine/'

import { getGamesSorted } from '../../../api/request'

export default function Index() {

    const [popularGames, setPopularGames] = useState()

    const [currentPages, setCurrentPages] = useState(1)

    const  [date, setDate] = useState(new Date)

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

        const DateNow = new Date
        var Year = DateNow.getFullYear()

        window.scrollTo(0, 0)

        Observer.observe(document.querySelector('div#sentinel'))

        return () => Observer.disconnect()
    }, [])


    useEffect(() => {}, [])

    const loadData = async () =>{
        const Data = await getGamesSorted('popularity')
        setPopularGames(Data)
    }

    loadData()

    if(popularGames) {
        var popularGamesFiltered = popularGames.filter((game, index) => {
            if (index < currentPages * 10){
                return game
            }
    
            return null
        })
    }

  return (
    <TopYearContainer>

            <h1>Top Free To Play Games for PC and Browser in {date.getFullYear()}</h1>
            <p>Below, you can find our ongoing Top Free To Play Games in {date.getFullYear()}. Our ranking is based on our users preferences during this calendar month and all results are updated daily. You can also use the menu to explore even more Top 30's for your favorite platforms.</p>
            <div className='line'></div>

            {popularGamesFiltered && (
                <>
                    {popularGamesFiltered.map((game, index) => (
                        <span key={index}>
                            {index <= 29 && (
                                <GameLine gameData={game} number={index + 1} key={index}/>
                            )}
                        </span>
                        ))}
                </>
            )}
            <div id='sentinel'></div>

    </TopYearContainer>
  )
}
