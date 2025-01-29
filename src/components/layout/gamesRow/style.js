import styled from "styled-components";

export const GamesRow = styled.section`

    margin-top: 12vh;
    padding: 10px 0 15px 25px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);


    h2{
        margin-bottom: 15px;
        font-size: 2.2em;
    }

    .swiper-button-prev, .swiper-button-next{
        height: 0 !important;
        width: 0 !important;
        color: white !important;
        padding: 45px;
        transition: all .3s;
        border-radius: 50%;
        top: 45% !important;
    }

    .swiper-button-prev{
        left: 10px;
    }

    .swiper-button-next{
        right: 10px;
    }

    .swiper-button-prev:hover, .swiper-button-next:hover{
        background-color: rgba(0, 0, 0, 0.85);
    }

    @media (max-width: 1200px) {
        .swiper-button-prev, .swiper-button-next{
            padding: 30px;
        }

        .swiper-button-prev::after, .swiper-button-next::after{
            font-size: 2.2em;
        }
    }

    @media (max-width: 768px) {
        h2{
            font-size: 1.8em;
        }
    }

    @media (max-width: 460px) {
        h2{
            font-size: 1.6em;
        }
    }
`