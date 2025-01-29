import styled from "styled-components";

export const CategoryExhibition = styled.div`
    padding-top: 8vh;

    h1{
        margin-bottom: 10px;
    }
    
    h1, p{
        max-width: 95%;
    }

    h2{
        text-align: center;
        transform: translateY(8vh);
        font-size: 1.8em;
    }

    div.panel{
        margin-top: -6vh;
    }

    @media (max-width: 990px) {
        h2{
            font-size: 1.6em;
        }
    }

    @media (max-width: 768px) {
        h2{
            font-size: 1.4em;
        }
    }
`

export const CategoryTitle = styled.div`
    padding-left: 30px;

    div.line{
        height: 3px;
        background-color: ${props => props.theme.primary};
        border-radius: 4px;
        width: calc(100% - 30px);
        margin-bottom: 40px;
    }

    @media (max-width: 990px) {
        h1{
            font-size: 1.7em;
        }
    }

    @media (max-width: 768px) {
        h1{
            font-size: 1.5em;
        }
    }
`
