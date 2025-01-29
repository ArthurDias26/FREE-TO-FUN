import styled from "styled-components";

export const GameLineContainer = styled.div`
    margin-bottom: 40px;
    background-color: ${porps => porps.theme.primary};
    width: 100%;
    padding: 15px 10px;
    border-radius: 20px;
    transform: scale(.95);
    transition: all .3s;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.6);
    position: relative;

    &:hover{
        transform: scale(1);
    }

    a{
        z-index: -5;
        text-decoration: none;
        color: ${props => props.theme.fontColor};
    }

    @media (max-width: 800px) {
        width: 70%;
        margin: auto;
        margin-bottom: 30px;
    }

    @media (max-width: 460px) {
        width: 85%;
    }
`

export const GameLine = styled.div`
    width: 100%;
    display: flex;

    div.flex_container{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div.flex_container:last-child{
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
    }

    h3{
        padding: 50px;
        font-size: 2.6em;
        color: #355BD4;
    }

    img{
        border-radius: 4px;
        margin-right: 25px;
        height: 140px;
    }

    h2{
        margin-bottom: 10px;
    }

    @media (max-width: 1300px) {
        h3{
            padding: 40px;
            font-size: 2.2em;
        }

        img{
            border-radius: 4px;
            height: 140px;
        }
        
        P{
            font-size: .95em;
        }

    }
    
    @media (max-width: 1050px) {
        h3{
            padding: 30px;
            font-size: 2em;
        }

        img{
            border-radius: 4px;
            margin-right: 20px;
            height: 120px;
        }
        
        P{
            font-size: .9em;
        }
    }

    @media (max-width: 800px) {
        display: block;

        img{
            max-width: 80%;
            height: max-content;
            margin-bottom: 15px;
        }

        p{
            font-size: .85em;
        }
        
    }

    @media (max-width: 460px) {

        h3{
            padding: 10px 15px 10px 10px;
        }

        h2{
            font-size: 1.3em;
        }

        img{
            max-width: 75%;
        }

        p{
            font-size: .8em;
        }
        
    }

`