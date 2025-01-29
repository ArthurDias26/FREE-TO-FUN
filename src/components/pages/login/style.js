import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    min-height: calc(90vh - 50px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginForm = styled.section`
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: ${props => props.theme.primary};
    box-shadow: 1.5px 1.5px 4.5px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        flex-direction: column;
    }

    span.password_container{
        position: relative;
    }

    span.password_container svg{
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2.7em;
        cursor: pointer;
        padding: 12px;
        border-radius: 50%;
        transition: all .2s;
    }

    span.password_container svg:hover{
        background-color: rgba(0, 0, 0, 0.6);
    }
`

export const FormImage = styled.aside`
    padding: 220px 180px;
    background-color: ${props => props.theme.primary};
    border-radius: 20px 0 0 20px;
    background-image: url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 1050px) {
        padding: 180px 130px;
        padding: 220px 180px;

    }

    @media (max-width: 768px) {
        min-width: 100%;
        padding: 80px 0;
        background-position: center bottom;
        

    }

`

export const FormContainer = styled.div`
   padding: 40px;
   min-width: 400px;

   h2{
    text-align: center;
    margin-bottom: 8px;
   }

   span{
    display: block;
    margin-bottom: 3px;
   }

   input{
    width: 100%;
    padding: 8px 12px;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.fontColor};
   }

   div.error_message{
    color: ${props => props.theme.secondary};
    margin-bottom: 15px;
   }

   button{
        width: 100%;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 10px;
        padding: 12px;
        cursor: pointer;
        transition: all .25s;
        box-shadow: .5px .5px 5px rgba(0, 0, 0, 0.6);
    }

    button.valid:hover{
        background-color: darkgray;
    }

    @media (max-width: 1050px) {
        padding: 25px;
        min-width: 320px;
    }

    @media (max-width: 768px) {
        min-width: 0;
        width: 400px;
        max-width: 80vw;
    }

`