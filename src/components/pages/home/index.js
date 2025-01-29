import React from 'react'
import { Home } from './style'

import GamesRow from '../../layout/gamesRow'
import WelcomePreview from '../../layout/welcomePreview'
import PanelGame from '../../layout/panelGame'

import Loading from '../../layout/loading'


export default function index({gameData}) {
  return (
   <>
    {gameData ? (
       <Home>
    
        <WelcomePreview/>
  
        <GamesRow gamesData={gameData[0]}/>
  
        <GamesRow gamesData={gameData[1]}/>

        <PanelGame gameId={gameData[0].data[0].id}/>
  
        <GamesRow gamesData={gameData[2]}/>
  
        <GamesRow gamesData={gameData[3]}/>
  
        <GamesRow gamesData={gameData[4]}/>
 
     </Home>

    ) : (
      <Loading/>
    )}
   </>
  )
}
