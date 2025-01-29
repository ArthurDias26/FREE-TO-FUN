import styled from "styled-components";

export const TopYearContainer = styled.div`
    padding: 8vh 0 0 0;
    width: 70%;
    margin: auto;


    h1{
        margin-bottom: 20px;
    }

    div.line{
        height: 3px;
        background-color: ${props => props.theme.primary};
        border-radius: 4px;
        width: calc(100% - 30px);
        margin-bottom: 40px;
    }

    h1, p, descent-override.line{
        margin-left: 8px;
    }

    @media (max-width: 1600px) {
        width: 80%;
    }

    @media (max-width: 1300px) {
        width: 85%;

        h1{
            font-size: 1.6em;
        }
    }

    @media (max-width: 1050px) {
        width: 96%;
    }

    @media (max-width: 800px) {
        h1{
            font-size: 1.4em;
        }

        P{
            font-size: .9em;
        }
        
    }

    @media (max-width: 460px) {

        P{
            font-size: .75em;
        }

}

`