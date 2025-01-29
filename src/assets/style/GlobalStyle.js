import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        min-height: calc(100vh - 50px);
        width: 100%;
    }

    html{
        scrollbar-color: #222 darkgray;
    }

    body{
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.background};
        font-family: 'Noto Sans', sans-serif;

    }

    body::-webkit-scrollbar{
        width: 12px;
    }
 
    body::-webkit-scrollbar-track {
    background: darkgray;        
    }

    body::-webkit-scrollbar-thumb {
    background-color: #222;    
    border-radius: 20px;       
    }
`

export default GlobalStyle