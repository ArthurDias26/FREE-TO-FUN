import styled from "styled-components";

export const BackgroundMessage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.65);
    z-index: 100000;
`

export const Message = styled.div`
    padding: 20px 50px;
    border-radius: 10px;
    text-align: center;
    background-color: ${props => props.theme.background};

    h3{
        font-size: 1.6em;
        color: ${props => props.theme.secondary};
        margin-bottom: 15px;
    }

    p{
        max-width: 240px;
        font-size: 1.08em;
        margin-bottom: 20px;
    }

    div.flex_container{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    div.flex_container button, div.flex_container a{
        font-size: 1.1em;
        padding: 8px 22px;
        border-radius: 6px;
        border: none;
        outline: none;
        color: white;
        text-decoration: none;
        cursor: pointer;
        transition: all .4s;
    }

    div.flex_container button:last-child{
        background-color: rgb(219, 106, 106);
    }

    div.flex_container button:last-child:hover{
        background-color: rgba(230, 43, 40, 1);
    }

    div.flex_container button:first-child, div.flex_container a{
        background-color: rgba(161, 162, 255, 1);
        
    }

    div.flex_container button:first-child:hover, div.flex_container a:hover{
        background-color: rgba(66, 68, 209, 1);
    }


    
`