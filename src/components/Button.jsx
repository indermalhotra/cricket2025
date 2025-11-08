import styled, { css } from "styled-components";

const sizes = {
    small: css`
        padding: 1rem 2rem;
        font-size: var(--smallFont);
    `,
     midium: css`
        padding: 2rem 4rem;
        font-size: var(--mediumFont);
    `
}
const Button = styled.button`
    background-color: var(--color-secondary-100);
    border: 0;
    margin: 1rem;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
        background-color: var(--color-secondary-200);
    }
    ${props=>sizes[props.size]}
`;

Button.defaultProps = {
    size: "midium"
}

export default Button;
