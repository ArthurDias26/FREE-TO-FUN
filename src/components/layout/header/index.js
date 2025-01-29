import React, {useContext, useState, useEffect} from 'react'


import ToggleThemeContext from '../../../contexts/ToggleThemeContext'
import { AuthContext } from '../../../contexts/AuthUserContext'

import {Header, IconContainer, NavigateContainer, ProfileContainer, MobileMenu, Cart} from './style'
import { Link} from 'react-router-dom'
import Switch from "react-switch";
import ErrorMessage from '../alertMessage'

import './styles.css'

import {FaSearch, FaCartArrowDown, FaSun, FaMoon} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {HiMenu} from 'react-icons/hi'


export default function Index() {

  const {toggleTheme, theme} = useContext(ToggleThemeContext)

  const DarkTheme = () => theme.title==='dark' ? true : false

  const {isLogged, Logout, cart, RemoveItemCart, ClearCart} = useContext(AuthContext)

  const [cartItems, setCartItems] = useState([])

  const [alertMessage, setAlertMessage] = useState({})

  const [alertVisible, setAlertVisible] = useState(false)

  const [widthState, setWidthState] = useState(2.5)

  const  [date, setDate] = useState(new Date)

    const setView = () => {
        setWidthState(window.innerWidth)       
    }
    
    useEffect(() =>{
        setView()
    }, [])

    window.addEventListener('resize', setView)

    useEffect(() => {
      setCartItems(JSON.parse(cart))
    }, [cart])

    const VisibleCart = () =>{
      if(!isLogged){
        setAlertMessage({
          title: 'Error',
          message: 'User not logged in, Please create an account or login.',
          actionBtn: <Link to='/login' onClick={() => setAlertVisible(false)}>OK</Link>
        })
        setAlertVisible(true)
      }
      else{
        document.querySelector('#cart').classList.toggle('active')
      }
    }

    function handleLogout() {
      if(isLogged){
        setAlertMessage({
          title: 'Warning',
          message: 'Are you sure you want to log out of your account?.',
          actionBtn: <button onClick={() => {Logout(); setAlertVisible(false)}}>OK</button>
        })
        setAlertVisible(true)
      }
    }

  return (
    <Header>
      <IconContainer>
          <h2 className='logo'><Link to='/'>Free to Fun</Link></h2>
      </IconContainer>

      { widthState >= 1125 ? (
        <>
        <NavigateContainer>
        <ul>
          <li onClick={() => {document.querySelector('.categories_menu').classList.toggle('active')}} className='categories'>
            <span >Categories</span>

            <ul className='categories_menu'>

              <Link to={'/categories/shooter'}>Shooter</Link>
              <Link to={'/categories/MMORPG'}>MMORPG</Link>
              <Link to={'/categories/card'}>Card Games</Link>
              <Link to={'/categories/fantasy'}>Fantasy</Link>
              <Link to={'/categories/strategy'}>Strategy</Link>
              <Link to={'/categories/anime'}>Anime</Link>
              <Link to={'/categories/moba'}>MOBA</Link>
              <Link to={'/categories/racing'}>Racing</Link>
              <Link to={'/categories/sports'}>Sports</Link>
              <Link to={'/categories/fighting'}>Fighting</Link>
              <Link to={'/categories/battle-royale'}>Battle Royale</Link>

              
            </ul>

          </li>
          <li><Link to={'/top'}>Top {date.getFullYear()}</Link></li>
          <li><Link to={'/contact'}>Contact us</Link></li>
  
        </ul>
      </NavigateContainer>

      <ProfileContainer>

        {!isLogged ? (
          <Link to={'/login'} className='login_link'>Login</Link>
        ) : (
          <CgProfile onClick={handleLogout}/>
        )}

        <Link to={'/search'}><FaSearch/></Link>

        <span className='cart'>
          <FaCartArrowDown onClick={VisibleCart}/>

          <Cart id='cart'>
 
              {isLogged ? (
                <>
                {cartItems.length >= 1 ? (
                <div className='cart_container'>
                  {cartItems.map((item, index) => (
                      <div className='cart_item' key={index}>
                        <Link to={`/exhibition/${item.id}`}>
                        <img src={item.thumb} alt='thumb'/>
                        <h3>{item.title}</h3>
                        </Link>

                        <button onClick={() => RemoveItemCart(item.id)}>Remove</button>
                      </div>
                  ))}
                  <button className='clear_cart' onClick={() => ClearCart()}>Clear Cart</button>
              </div>
              ) : (
                <p className='no_games_message'>There are no saved games</p>
              )} 
              </>
              ) : (
                <></>
              )}    
           
          </Cart>

        </span>

        <span className='switch_button'><Switch checked={DarkTheme()} onChange={() => toggleTheme()} onColor={'#555'} offColor='#efefef' uncheckedIcon={<FaSun className='sun'/>} checkedIcon={<FaMoon className='moon'/>}/></span>

      </ProfileContainer>

        </>

      ) : (

      <MobileMenu>

      <HiMenu onClick={() => {document.querySelector('.menu_mobile').classList.toggle('active')}}/>

      <div className='menu_mobile'>
          
          <NavigateContainer>
        <ul>
          <li onClick={() => {document.querySelector('.categories_menu').classList.toggle('active')}} className='categories'>
            <span >Categories</span>

            <ul className='categories_menu'>

              <Link to={'/categories/shooter'}>Shooter</Link>
              <Link to={'/categories/MMORPG'}>MMORPG</Link>
              <Link to={'/categories/card'}>Card Games</Link>
              <Link to={'/categories/fantasy'}>Fantasy</Link>
              <Link to={'/categories/strategy'}>Strategy</Link>
              <Link to={'/categories/anime'}>Anime</Link>
              <Link to={'/categories/moba'}>MOBA</Link>
              <Link to={'/categories/racing'}>Racing</Link>
              <Link to={'/categories/sports'}>Sports</Link>
              <Link to={'/categories/fighting'}>Fighting</Link>
              <Link to={'/categories/battle-royale'}>Battle Royale</Link>

              
            </ul>

          </li>
          <li><Link to={'/top'}>Top {date.getFullYear()}</Link></li>
          <li><Link to={'/contact'}>Contact us</Link></li>
          <li className='switch_button'><Switch checked={DarkTheme()} onChange={() => toggleTheme()} onColor={'#555'} offColor='#efefef' uncheckedIcon={<FaSun className='sun'/>} checkedIcon={<FaMoon className='moon'/>}/></li>
        </ul>
      </NavigateContainer>

      <ProfileContainer>

        {!isLogged ? (
          <Link to={'/login'} className='login_link'>Login</Link>
        ) : (
          <CgProfile onClick={handleLogout}/>
        )}

        <Link to={'/search'}><FaSearch/></Link>

        <span className='cart'>
          <FaCartArrowDown onClick={VisibleCart}/>

          <Cart id='cart'>
 
              {isLogged ? (
                <>
                {cartItems.length >= 1 ? (
                <div className='cart_container'>
                  {cartItems.map((item, index) => (
                      <div className='cart_item' key={index}>
                        <Link to={`/exhibition/${item.id}`}>
                        <img src={item.thumb} alt='thumb'/>
                        <h3>{item.title}</h3>
                        </Link>

                        <button onClick={() => RemoveItemCart(item.id)}>Remove</button>
                      </div>
                  ))}
                  <button className='clear_cart' onClick={() => ClearCart()}>Clear Cart</button>
              </div>
              ) : (
                <p className='no_games_message'>There are no saved games</p>
              )} 
              </>
              ) : (
                <></>
              )}    
           
          </Cart>

        </span>

      </ProfileContainer>

      </div>
      </MobileMenu>
      )}


    <ErrorMessage title={alertMessage.title} message={alertMessage.message} visible={alertVisible} setVisible={setAlertVisible} ActionButton={alertMessage.actionBtn}/>

    </Header>
  )
}
