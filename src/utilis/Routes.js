import {Routes, Route, Navigate, Link} from 'react-router-dom'
import {useContext, useState} from 'react'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import Main from '../components/layout/main'

import Home from '../components/pages/home'
import GameExhibition from '../components/pages/gameExhibition'
import CategoryExhibition from '../components/pages/categoryExhibition'
import TopYear from '../components/pages/topYear'
import Contact from '../components/pages/contactUs'
import Search from '../components/pages/search'
import Login from '../components/pages/login'

import AlertMessage from '../components/layout/alertMessage'

import Loading from '../components/layout/loading'

import {AuthContext} from '../contexts/AuthUserContext';

export default function RoutesElements({gameData}) {

    const { isLogged, loading} = useContext(AuthContext)

    const [errorVisible, setErrorVisible] = useState(false)

    const Private = ({children}) => {
        if(loading){
            return <Loading/>
        }

        if(!isLogged){
            setErrorVisible(true)
            return <Navigate to='/'/>
        }

        return children
    }  

  return (
    <>
        {gameData ? (
            <>
                <Header>
        
                </Header>
        
                <Main>
                    <Routes>

                        <Route path={'/'} element={<Home gameData={gameData}/>}/>
                        <Route path={'/exhibition/:id'} element={<GameExhibition/>}/>
                        <Route path={'/categories/:category'} element={<CategoryExhibition/>}/>
                        <Route path={'/top'} element={<TopYear popularGames={gameData[5]}/>}/>
                        <Route path={'/contact'} element={<Private><Contact/></Private>}/>
                        <Route path={'/search'} element={<Search/>}/>
                        <Route path={'/login'} element={<Login/>}/>

                    </Routes>
                </Main>
        
                <Footer>
        
                </Footer>

                <AlertMessage title={'Error'} message={'User not logged in, Please create an account or login.'} ActionButton={<Link to='login' onClick={() => setErrorVisible(false)}>OK</Link>}  visible={errorVisible} setVisible={setErrorVisible}/>

            </>
        ) :
        
        (
            <Loading/>
        )}
    </>
  )
}
