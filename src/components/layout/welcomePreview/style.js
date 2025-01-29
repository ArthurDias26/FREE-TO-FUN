import styled from "styled-components";

export const PreviewContainer = styled.section`
    width: 100%;
    height: 45vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 60%, rgba(0, 0, 0, 0.65)),
    url(${props => props.url});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

    h1{
        font-size: 1.8em;
        margin-bottom: 6vh;
        max-width: 90%;
        text-align: center;
    }

    h1 span{
        color: ${props => props.theme.secondary};
    }

    p{
        margin-bottom: 4vh;
        font-size: 1.08em;
        text-align: center;
        max-width: 90%;
    }

    a{
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.05em;
        padding: 10px 24px;
        border-radius: 6px;
        transition: all .25s;
        opacity: 0.9;
    }

    a:first-child{
        background-color: #355BD4;
        box-shadow: 0 0 22px #355BD4;
        margin-right: 25px;
    }

    a:first-child:hover{
        padding: 12px 28px;
        box-shadow: 0 0 44px #355BD4;
        opacity: 1;

    }

    a:last-child{
        border: 3px solid ${props => props.theme.secondary};
        box-shadow: 0 0 22px ${props => props.theme.secondary};
        margin-right: 25px;

    }

    a:last-child:hover{
        box-shadow: 0 0 44px ${props => props.theme.secondary};
        opacity: 1;
    }

    @media (max-width: 1050px) {
        h1{
        font-size: 1.55em;
    }

    p{
        font-size: .97em;
    }
    }

    @media (max-width: 768px) {
        h1{
        font-size: 1.45em;
    }

    p{
        font-size: .9em;
    }

    a{
        font-size: .95em;
        padding: 8px 20px;
    }

    a:first-child:hover{
        padding: 10px 24px;

    }
    }

    @media (max-width: 500px) {
        h1{
        font-size: 1.35em;
    }

    p{
        font-size: .8em;
    }

    a{
        font-size: .9em;
        padding: 6.8px 18px;
    }

    a:first-child{
        margin-right: 15px;
    }

    a:first-child:hover{
        padding: 8px 20px;

    }
    }
    
`