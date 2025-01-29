import styled from "styled-components";

export const Footer = styled.footer`
    background-color: ${props => props.theme.primary};
    padding: 40px;
    margin-top: 10vh;

    @media (max-width: 500px) {
        padding: 25px;

    }

    a{
        color: ${props => props.theme.fontColor};
        text-decoration: none;
        transition: all .4s;
    }

    a:hover{
        color: ${props => props.theme.secondary};
    }

    li{
        list-style: none;
    }
    
`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 840px) {
        flex-direction: column;
    }
`

export const LinksContainer = styled.ul`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 25px;

    li{
        margin-bottom: 6px;
    }

    a:hover{
        color: ${props => props.theme.fontColor};
        text-decoration: underline;
    }

    @media (max-width: 1250px) {
        width: 45%;
    }

    @media (max-width: 840px) {
        margin-bottom: 40px;
        width: 100%;

    }

    @media (max-width: 500px) {
        justify-content: space-between;
    }
`

export const LogoAndSocial = styled.div`
    width: 30%;
    text-align: center;

    h2 a{
            color: ${props => props.theme.fontColor};
            text-decoration: none;
            transition: all .5s;
    }

   h2 a:hover{
        color: ${props => props.theme.secondary};
   }

   div{
    width: 40%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
   }

   svg{
    font-size: 1.8em;
   }

   svg:first-child{
   }

   @media (max-width: 1050px) {
        width: 45%;
    }

    @media (max-width: 840px) {
        width: 100%;
    }
`

export const Credits = styled.div`
margin-top: 8px;
    text-align: center;
    font-size: .8em;
    text-decoration: underline;
`
