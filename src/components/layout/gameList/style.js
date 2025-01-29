import styled from "styled-components";

export const GameListContainer = styled.section`
    margin-top: 12vh;
    max-width: 95%;
    margin: auto;

    h2{
        font-size: 1.8em;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    @media (max-width: 640px) {
        h2{
        font-size: 1.5em;
    }
    }

`

export const GameList = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    span.game_container{
        padding: 5px 2px;
    }

`