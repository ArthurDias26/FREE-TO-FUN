import styled from "styled-components";

export const Exhibition = styled.div`
    position: relative;

    button.return{
        user-select: none;
        background: none;
        border: none;
        outline: none;
        font-size: 3em;
        color: white;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        z-index: 10;
    }

`

export const GameBillboard = styled.section`
    position: relative;

    @media (max-width: 1060px) {
        margin: auto;
        margin-bottom: 6vh;
    }

`

export const BackImage = styled.div`
    user-select: none;
    height: 50vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.65) 30%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.30)), 
    url(${props => props.url});
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.6);

`

export const GameInformation = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1060px) {
        align-items: unset;
        min-width: 100%;
        flex-direction: column;
    }
`

export const GameInfoCard = styled.div`
    width: max-content;
    max-width: 35%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    text-align: center;
    transform: translate(5%, -50%);
    display: block;
    background-color: ${props => props.theme.primary};
    width: max-content;
    padding: 10px 30px;
    border-radius: 25px;
    user-select: none;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);



    h2{
        font-size: 2.2em;
        margin-bottom: 30px;
        user-select: text;

    }

    img{
        border-radius: 20px;
        max-width: 100%;
        margin-bottom: 30px;
    }

    p{
        margin-bottom: 20px;
        user-select: text;

    }
    
    div.buttons{
        margin-top: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    div.buttons button a{
        font-size: 1.3em;
        padding: 10px 28px;
    }

    div.buttons button:first-child{
        margin-right: 10px;
    }

    @media (max-width: 1600px) {
        h2{
            font-size: 1.7em;
        }


    }

    @media (max-width: 1400px) {
        h2{
            font-size: 1.45em;
        }

        button  a{
        font-size: 1.09em !important;
        padding: 8px 20px !important;
        }
    }

    @media (max-width: 1060px) {
        max-width: 90%;
        margin-left: 50vw;
        transform: translate(-50%, -50%);
        
    }

    @media (max-width: 415px) {
        button  a{
        font-size: 1em !important;
        }
    }

    @media (max-width: 395px) {
        button  a{
        font-size: .93em !important;
        padding: 6.5px 17px !important;
        }
    }
   
`

export const GameDesc = styled.div`
    margin-left: 5%;
    max-width: 58%;
    margin-top: -250px;

    h2{
        font-size: 2.2em;
        margin-bottom: 20px;
        margin-top: 10px;
    }

    p{
        text-align: center;
        font-size: 0.9em;
        max-width: 100%;

        overflow: hidden;
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 14; 
        -webkit-box-orient: vertical;
    }

    @media (max-width: 1400px) {
        h2{
            font-size: 1.8em;
        }

        p{
            font-size: 0.85em;
            margin-left: 15px;
        }
    }

    @media (max-width: 1060px) {
        max-width: 90%;
        margin: auto;
        text-align: center;
        margin-top: -20%;
    }
`

export const GameMinimumRequirements = styled.section`

    margin-top: -150px;

    h2{
        max-width: 92%;
        margin: auto;
        margin-bottom: 1.3em;
        text-align: center;
    }


    div.flex_container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10vh;
    }

    div.colunm{
        text-align: left;
        text-align: left;
        max-width: 50%;
    }

    div.colunm:first-child{
        margin-right: 3em;
    }

    div.colunm h3{
        background-color: ${props => props.theme.primary};
        padding: 3.5px;
    }

    div.colunm p{
        margin-top: 3px;
        margin-bottom: 20px;
    }

    div.browser_requirements{
        text-align: center;
        max-width: 65%;
        font-size: 1.1em;
    }

    div.browser_requirements p:first-child{
        margin-bottom: 20px;
    }

    div.browser_requirements p:last-child{
        margin-bottom: 12vh;

    }

    @media (max-width: 1060px) {
        margin-top: 15px;

    }
    
    @media (max-width: 900px) {
        max-width: 90%;
        margin: auto;
        h2{
            font-size: 1.3em;
        }

        div.colunm h3{
            font-size: 1.15em;
        }

        div.colunm p{
            font-size: .9em;
        }
    }

    @media (max-width: 560px) {
        max-width: 100%;
        transform: scale(.96);
    }

    @media (max-width: 460px) {
        div.colunm h3{
            font-size: .95em;
        }

        div.colunm p{
            font-size: .85em;
        }
    }

`

export const GameScreenshots = styled.section`

    margin-bottom: 20vh;

    h2{
        text-align: center;
        font-size: 1.9em;
        margin-bottom: 25px;
    }

    div.swiper_container{
        width: 80vw;
        margin: auto;
        padding-bottom: -4px;
        box-shadow: 0 0 12px 8px rgba(0,0,0,0.45);
        border-radius: 12px;
    }

    div.swiper_container img{
        width: 80vw;
        border-radius: 12px;
        transform: translateY(4px);
    }

    .swiper-button-prev, .swiper-button-next{
        height: 100% !important;
        width: 0 !important;
        color: white !important;
        padding: 30px;
        transition: all .3s;
        top: 24px !important;
        background-color: rgba(0, 0, 0, 0.45);
    }

    .swiper-button-prev{
        left: 0px;
        border-radius: 12px 0 0 12px;
    }

    .swiper-button-next{
        right: 0px;
        border-radius: 12px 0 12px 0;
    }

    .swiper-button-prev:hover, .swiper-button-next:hover{
        background-color: rgba(0, 0, 0, 0.85);
    }

    @media (max-width: 1060px) {
        margin-top: 40px; 
    }

    @media (max-width: 768px) {
        div.swiper_container{
            width: 90vw;
        }

        div.swiper_container img{
            width: 90vw;
        }
    }
`