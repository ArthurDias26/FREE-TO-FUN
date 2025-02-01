import {useState, useEffect, useContext} from 'react'
import { getGameDetails } from '../../../api/request'

import { PanelGame, Background, GameInfo } from './style'
import Button from '../button'

import {Link} from 'react-router-dom'

import {MdMonitor, MdFavorite} from 'react-icons/md'

import {FaChrome, FaPlay} from 'react-icons/fa'

import { AuthContext } from '../../../contexts/AuthUserContext'

import ResrveBackground from '../../../assets/image/reserve-background.png'

export default function Index({gameId}) {

  const {isLogged, AddCart} = useContext(AuthContext)

    const [gameData, setGameData] = useState(null)

    useEffect(() => {
        async function loadData() {
            const Data = await getGameDetails(gameId)
            setGameData(Data)
        }

        loadData()
    }, [gameId])

    function AddItemCart() {
        if(isLogged){
            AddCart({
                title: gameData.title,
                thumb: gameData.thumbnail,
                id: gameData.id
            })
        }else{
            alert('faça login')
        }
    }

  return (
    <PanelGame>
        {gameData && (
            <Background url={gameData.screenshots[0] ? gameData.screenshots[0].image : ResrveBackground}>
                
                <GameInfo>

                    <h3>{gameData.title}</h3>

                    <Link to={`/exhibition/${gameData.id}`}>
                        <img src={gameData.thumbnail} alt='Game Thumb'/>
                    </Link>

                    <p className='desc'>{gameData.description}</p>

                    <p><span>Platform</span> {gameData.platform} {gameData.platform === "Windows" ? (<MdMonitor/>): (<FaChrome/>)}</p>
                    
                    <p><span>Genre</span> {gameData.genre}</p>

                    <p><span>Developer</span> {gameData.developer}</p>

                    <p><span>Release Date</span> {gameData.release_date}</p>

                    <div className='buttons'>
                        <Button text='Play Now' url={gameData.game_url} icon={<FaPlay/>}/>

                        <span onClick={AddItemCart}><Button text={`Add to favorite`} icon={<MdFavorite/>} color={'#4A27E3'} type='internal' /></span>
                    </div>

                   

                </GameInfo>
            </Background>
        )}
    </PanelGame>
  )
}
//interest list 

