import styled from "styled-components";

export const Search = styled.div`
    padding: 8vh 0 0 30px;
    user-select: none;

    h1{
        font-size: 2.5em;
    }

    div.line{
        height: 3px;
        background-color: ${props => props.theme.primary};
        border-radius: 4px;
        width: calc(100% - 30px);
        margin-bottom: 40px;
    }

    div.flex-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div input{
        width: 80%;
        outline: none;
        border: none;
        border-radius: 6px;
        height: 40px;
        padding: 8px;
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.fontColor};
        box-shadow: 2px 2.5px 6px rgba(0, 0, 0, 0.6);
    }

    div svg{
        font-size: 1.4em;
        transform: translate(-130%, 5px);
    }
`