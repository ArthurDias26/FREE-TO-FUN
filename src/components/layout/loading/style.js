import styled, { keyframes } from "styled-components";

export const Backgorund = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.background};
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    user-select: none;
`
const animationLoad = keyframes`   
   33%{
        transform: translateY(-30px);
    }

    100%{
        transform: translateY(30px);
    }
`

export const LoaderBall = styled.div`
    width: 30px;
    height: 30px;
    max-width: 10vw;
    border-radius: 50%;
    background-color: ${props => props.theme.secondary} !important;
    margin-right: 15px;
    animation: ${animationLoad} 1.5s alternate infinite ease-in-out;
    animation-delay: ${props => props.delay}

    
`



