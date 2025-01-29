import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import { getCategoryGames } from '../../../api/request'

import { CategoryExhibition, CategoryTitle } from './style'
import PanelGame from '../../layout/panelGame'
import GameList from '../../layout/gameList'
import Loading from '../../layout/loading'


export default function Index() {

    const {category} = useParams()

    const [categoryData, setCategoryData] = useState()

    const [randomGameID, setRandomGameID] = useState()

    window.scrollTo(0, 0)

    useEffect(() => {
        async function loadData(){
            const Data = await getCategoryGames(category)
            setCategoryData(Data)
            const randomGameNum = Math. floor(Math. random() * Data.length)
            setRandomGameID(Data[randomGameNum].id)
        }

        loadData()
    } ,[category])

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.substr(1);
    }

    const categoryTitle = category.replace('-', ' ').capitalize()


  return (
    <CategoryExhibition>
        {categoryData ? (
            <>
                <CategoryTitle>
                    <h1>Top Free {categoryTitle} Games for PC and Browser!</h1>
                    <p>{categoryData.length}  free-to-play {categoryTitle} games found in our games list!</p>

                    <div className='line'></div>
                </CategoryTitle>


                {randomGameID && (
                    <div className='panel'>
                        <h2>Recommended</h2>
                        <PanelGame gameId={randomGameID}/>
                    </div>
                )}

                <GameList gameList={categoryData} title=''/>
            </>
        ) : (
            <Loading/>
        )}
    </CategoryExhibition>
  )
}
