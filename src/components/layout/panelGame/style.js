import styled from "styled-components";

export const PanelGame = styled.section`
    position: relative;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
    width: 90vw;
    margin: auto;
    margin-top: 12vh;
    border-radius: 22px;
`

export const Background = styled.div`
    height: 70vh;
    background: linear-gradient(90deg, rgba(20, 20, 20, .95) 32%, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.20)), 
    url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 22px;

    @media (max-width: 1400px) {
        background: linear-gradient(90deg, rgba(20, 20, 20, .94) 42%, rgba(0, 0, 0, 0.60) 60%, rgba(0, 0, 0, 0.30)), 
        url(${props => props.url});
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media (max-width: 800px) {
        background: linear-gradient(0deg, rgba(20, 20, 20, .9) 42%, rgba(0, 0, 0, 0.60) 50%, rgba(0, 0, 0, 0.20)), 
        url(${props => props.url});
        justify-content: center;
        align-items: flex-end;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }

`

export const GameInfo = styled.div`
    padding-left: 20px;
    max-width: 35%;
    text-align: center;

    h3{
        font-size: 1.75em;
        margin-bottom: 25px;
        text-decoration: underline;
    }

    p{
        margin-top: 15px;
        font-size: 1.1em;
    }

    p span{
        display: block;
        font-weight: bold;
    }

    p.desc{
        font-size: 1em;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 7; 
        -webkit-box-orient: vertical;
    }

    div.buttons{
        margin-top: 35px;
        width: 100%;
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
    }

    button:last-child{
        margin-left: 15px;
    }

    img{
        transform: scale(.9);
        border-radius: 20px;
        position: absolute;
        top: 30%;
        right: 15%;
        box-shadow: 0 0 16px white;
        transition: all .25s;
        max-width: 38%;
    }

    img:hover{
        transform: scale(1);
        box-shadow: 0 0 40px white;
        
    }

    @media (max-width: 1400px) {
        max-width: 55%;
        padding-left: 8px;

        button{
        margin-top: 20px;
        margin-left: 10px;
        }

        img{
            right: 2.5%;
        }

    }       

        @media (max-width: 800px) {

        min-width: 90%;
        max-width: 100%;
        margin-bottom: 25px;
        padding-left: 0;

        button{
        margin-top: 20px;
        margin-left: 10px;
        }

        p.desc{
            display: none;
        }

        p span{
        display: inline-block;
        }

        img{
        position: unset;
        max-width: 80%;
    }
    }

    
`