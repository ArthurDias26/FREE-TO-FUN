import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background: none;


    a{
        color: #fff;
        text-decoration: none;
        font-size: 1.4em;
        font-weight: bold;
        background-color: ${props => props.theme.secondary};
        padding: 14px 32px;
        border-radius: 22px;
        background-color: ${props => props.color ? props.color : props.theme.secondary};
        box-shadow: 0 0 16px ${props => props.color ? props.color : props.theme.secondary};
        transition: all .35s;
    }

    a:hover{
        box-shadow: 0 0 60px ${props => props.color ? props.color : props.theme.secondary};
    }

    @media (max-width: 1000px) {
        a{
            font-size: 1.28em;
            padding: 10px 28px;

        }
    }

    @media (max-width: 1000px) {
    a{
        font-size: 1.1em;
        padding: 8px 24px;

    }
    }
`