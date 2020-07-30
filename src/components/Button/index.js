import styled from "styled-components";

const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    padding: 16px 24px;
    outline: none;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }
    @media(max-width: 800px) {
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        color: var(--white);
        left: 0;
        outline: 0;
        position: fixed;
        z-index: 11;
        right: 0;
        text-align: center;
    }
`;

export default Button;
