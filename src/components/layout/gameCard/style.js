import styled from "styled-components";

export const GameCard = styled.div`
    margin-right: 15px;
    margin-bottom: 5px;
    border-radius: 20px;
    transform: scale(0.95);
    transition: all .25s;
    position: relative;
    background-color: ${props => props.theme.primary};
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.6);

    &:hover{
        transform: scale(1);
    }
  
    a{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.fontColor};
        text-decoration: none;
    }

    img{
        width: 100.5%;
        border-radius: 20px;

    }

    svg{
        font-size: 1.45em;
        position: absolute;
        right: 5px;
        bottom: 8px;
    }

    svg.small{
        font-size: 1.2em;
    }

    h3{
        max-width: 80%;
        text-align: center;
        margin: 10px 0 4px 0;
    }

    @media (max-width: 1200px) {
        h3{
            font-size: 1em;
        }
    }

    @media (max-width: 768px) {
        h3{
            font-size: .9em;
        }
    }

    @media (max-width: 460px) {
        h3{
            font-size: .8em;
        }
    }

`