import React from 'react'
import { Link } from 'react-router-dom'
import { GameLineContainer, GameLine } from './style'

export default function Index({gameData, number}) {
  return (
    <GameLineContainer>
        <Link to={`/exhibition/${gameData.id}`}>
        {gameData && (
            <GameLine>
                <div className='flex_container'>
                    <h3>{number}</h3>
                    <img src={gameData.thumbnail} alt='thumb'/>
                </div>

                <div className='flex_container'>
                    <h2>{gameData.title}</h2>
                    <p>{gameData.short_description}</p>


                </div>

            </GameLine>
        )}
        </Link>
    </GameLineContainer>
  )
}
