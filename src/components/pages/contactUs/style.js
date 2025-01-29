import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    min-height: calc(90vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
    
    div.flex_container{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        align-items: center;

        h1{
            width: 100%;
            text-align: center;
            margin-bottom: 6vh;
        }

        @media (max-width: 768px) {
        flex-direction: column;

        h1{
            margin-top: 80px;
        }
    }

    }
    
`

export const ContactForm = styled.div`
    form{
        padding: 30px;
        border-radius: 12px;
        background-color: ${props => props.theme.primary};
        min-width: 400px;
        max-width: 90vw;
        box-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.6);
    }

    form span{
        display: block;
        font-size: 1.2em;
        margin-bottom: 4px;
    }

    form input{
        width: 100%;
        border: none;
        outline: none;
        padding: 15px;
        border-radius: 4px;
        background-color: ${props => props.theme.background} !important;
        color: ${props => props.theme.fontColor};
        
    }

    div.error_message{
        margin-bottom: 20px;
    }

    form button{
        width: 100%;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 10px;
        padding: 12px;
        cursor: pointer;
        transition: all .25s;
    }

    form button.valid:hover{
        background-color: darkgray;
    }

    @media (max-width: 1050px) {
        form{
            min-width: 350px;
        }
    }

    @media (max-width: 768px) {
        form{
            min-width: 400px;
        }
    }

    @media (max-width: 500px) {
        form{
            min-width: 0;
            width: 80vw;
        }
    }

`

export const ContactNotes = styled.div`
    margin-left: 60px;
    max-width: 540px;
    font-size: 1.15em;

    ul li{
        list-style: none;
        margin-bottom: 10px;
    }
    
    h3{
        font-size: 1.45;
        margin: 25px 0 15px 0;
    }

    @media (max-width: 1050px) {
    margin-left: 40px;
    font-size: 1em;
    max-width: 320px;
    }

    @media (max-width: 768px) {
    margin: 40px 20px 0 20px;
    font-size: 1.15em;
    max-width: 540px;
    }
`



