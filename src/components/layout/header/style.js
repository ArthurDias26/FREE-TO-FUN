import styled, {keyframes} from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: ${props => props.theme.primary};
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 100;
    user-select: none;

    @media (max-width: 1125px) {
        justify-content: space-between;
        padding: 10px 35px;
    }
`

export const IconContainer = styled.div`
   h2 a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
        transition: all .4s;
   }

   h2 a:hover{
        color: ${props => props.theme.secondary};
   }

   @media (max-width: 640px) {
        font-size: .8em;
   }
`

export const NavigateContainer = styled.nav`


    ul li{
        margin-left: 30px;
        display: inline-block;
        cursor: pointer;
        transition: all .35s;
        border-radius: 6px;
        font-size: 1.15em;
    }

    ul li a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
    }

    ul li:hover, ul li a:hover{
        color: ${props => props.theme.secondary};
    }

    ul li span{
        transition: all .35s;
    }


    ul li span:hover{
        color: ${props => props.theme.secondary};
    }

    li.categories{
        position: relative;
    }

    li.categories:hover{
        color: ${props => props.theme.fontColor};
    }

    ul.categories_menu{
        font-size: .95em;
        min-width: max-content;
        background-color: ${props => props.theme.primary};
        display: none;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: absolute;
        top: calc(100% + 14px);
        left: 0;
        padding: 4px 0;
        border-radius: 4px;

        @media (max-width: 1125px) {
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            z-index: 10;
            background-color: ${props => props.theme.background};
        
        }
    }

    ul.categories_menu a{
        transition: all .3s;
        font-size: .95em;
        padding: 5px 80px 8px 8px;
        width: 100%;
        text-decoration: none;
        color: ${props => props.theme.fontColor};
        height: 100%;
        width: 100%;
    }

    ul.categories_menu a:hover{
        text-decoration: underline;
        background-color: ${props =>props.theme.background};
    }

    ul.active{
        display: flex !important;
        animation: showSmooth .5s;
    }

    @keyframes showSmooth {
        from{
            opacity: 0;
        }

        to{
            opacity: 1;
        }
    }

`

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
        color: ${props => props.theme.fontColor};
        transition: all .35s;
        cursor: pointer;
        padding: 8px;
        font-size: 2.6em;
        border-radius: 50%;
        margin-left: 10px;
    }

    a.login_link{
        color: ${props => props.theme.secondary};
        font-weight: bold;
        background-color: transparent;
        transition: all .35s;
        cursor: pointer;
        padding: 6px 10px;
        border: 2px solid ${props => props.theme.secondary};
        margin-left: 10px;
        transition: all .4s;
        font-size: .95em;
        text-decoration: none;
    }

    a.login_link:hover{
        background-color: ${props => props.theme.secondary};
        color: ${props => props.theme.fontColor};
        text-decoration: underline;
        
    }

    svg:hover{
        background-color: ${props => props.theme.secondary};
    }

    span.cart{
        position: relative;
    }

    span.switch_button{
        margin-left: 10px;
    }

    .switch_button svg{
        font-size: 2.2em;
        margin-top: -2px;
        margin-left: -3px;
    }

    .switch_button svg.moon{
        color: #5696c7;
    }

    .switch_button svg.sun{
        color: #e08138;
    }
`

export const MobileMenu = styled.div`

    svg{
        font-size: 1.6em; 
        cursor: pointer;
    }

    div.menu_mobile{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        right: -45vw;
        top: 38px;
        width: 40vw;
        height: 100vh;
        background-color: ${props => props.theme.primary};
        transition: all .5s;
        padding: 30px;
    }

    div.menu_mobile.active{
        right: 0;
        top: 38px;
    }

    div.menu_mobile > nav{
        width: 100%;
    }

    div.menu_mobile > nav > ul{
        display: flex;
        flex-direction: column;
        min-width: 100%;
    }

    div.menu_mobile > nav > ul > li{
        width: 100%;
        margin-left: 0;
        text-align: center;
        margin-bottom: 5px;
        font-size: 1.4em;
        padding: 10px;
    }

    div.menu_mobile > nav > ul > li > span, div.menu_mobile > nav > ul > li a{
        transition: all .25s;
        display: block;
        max-width: 100%;
    }

    div.menu_mobile > div{
        margin-top: 30px;
        font-size: 1.1em;
    }

    div.menu_mobile svg{
        font-size: 2.8em;
    }

    .switch_button svg{
        font-size: 1em !important;
        margin-top: 3px;
        margin-left: 2px;
    }

    .switch_button svg.moon{
        color: #5696c7;
    }

    .switch_button svg.sun{
        color: #e08138;
    }
    
    @media (max-width: 768px) {
        div.menu_mobile{
        right: -65vw;
        min-width: 60vw;
        padding: 25px;
    }

    div.menu_mobile > div{
        margin-top: 20px;
    }
    }

    @media (max-width: 460px) {
        div.menu_mobile{
        right: -85vw;
        min-width: 80vw;
        padding: 20px;
    }

    div.menu_mobile > div{
        margin-top: 12px;
    }
    }

`

export const Cart = styled.div`
    &.active{
        display: block;
        animation: showSmooth .5s;
    }

    width: 24vw;
    display: none;
    position: absolute;
    top: 48px;
    left: -70%;
    transform: translateX(-50%);
    max-height: calc(65vh - 50px);
    overflow-y: scroll;
    width: max-content;
    background-color: ${props => props.theme.primary};
    scrollbar-color: #333 lightgray;
    font-size: 16px;

    &::-webkit-scrollbar{
        width: 12px;
    }
 
    &::-webkit-scrollbar-track {
    background: #555;        
    }

    &::-webkit-scrollbar-thumb {
    background-color: lightgray;    
    }

    div.cart_container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    div.cart_item{
        position: relative;
        margin-bottom: 20px;
        transition: all .3s;
        border-radius: 3px;
        width: 100%;
    }

    div.cart_item:last-child{
        margin-bottom: 0;
    }

    div.cart_item:hover{
        background-color: ${props => props.theme.background};
    }

    div.cart_item a{
        padding: 8px 8px 34px 20px;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        color: ${props => props.theme.fontColor};
        text-decoration: none;

    }

    div.cart_item img{
        max-width: 35%;

    }

    div.cart_item h3{
        font-size: 18px;
        margin-left: 12px;
    }

    div.cart_item button{
        border: none;
        outline: none;
        background-color: ${props => props.theme.secondary};
        color: white;
        font-size: 16px;
        font-weight: bold;
        padding: 6px 12px;
        border-radius: 6px;
        position: absolute;
        bottom: 0;
        right: 5px;
        transition: all .2s;
        box-shadow: 0 0 14px ${props => props.theme.secondary};
        cursor: pointer;
    }

    div.cart_item button:hover{
        box-shadow: 0 0 24px ${props => props.theme.secondary};
    }

    p.no_games_message{
        margin: 40px 20px;
        color: ${props => props.theme.secondary};
        padding: 3px;
        border: 1px solid ${props => props.theme.secondary};
        font-size: 16px;
        text-align: center;
    }

    .clear_cart{
        border: none;
        outline: none;
        text-align: center;
        padding: 10px 0;
        min-width: 100%;
        border-radius: 4px;
        margin-bottom: 6px;
        background-color: rgb(166, 20, 20);
        font-weight: bold;
        font-size: 16px;
        color: white;
        cursor: pointer;
        transition: all .35s;
        box-shadow: 0 0 4px ${props => props.theme.secondary};
    }

    .clear_cart:hover{
        box-shadow: 0 0 14px ${props => props.theme.secondary};
        text-decoration: underline;
    }

    @media (max-width: 1125px) {
        width: 35vw;
        border: 1px solid #555;
        right: 0%;
    }

    @media (max-width: 768px) {
        margin-left: 8px;
        width: 55vw;

        div.cart_item button{
        font-size: 14px;
        padding: 5px 10px;
        cursor: pointer;
    }

    div.cart_contaner{
        margin-top: 15px;
    }
    }

    @media (max-width: 460px) {
        width: 75vw;
    }
`
