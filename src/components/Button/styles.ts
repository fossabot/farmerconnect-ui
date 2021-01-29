import styled from 'styled-components';
import { IButton, IButtonProps } from './interfaces';

export const buttonDefaultStyles: IButton = {
    colors: {
        primary: '#00E394',
        secondary: '#FFFFFF',
        tertiary: '#00AF72'
    }
}

const Container = styled.button<IButtonProps>`
    background-color: ${(props) => props.backgroundColor || props.theme?.button?.colors?.primary || buttonDefaultStyles.colors.primary};
    border: 0px;
    border-radius: 12px;
    color: ${(props) => props.color || props.theme?.button?.colors?.secondary || buttonDefaultStyles.colors.secondary};
    cursor: pointer;
    font-weight: bold;
    max-width: 10rem;
    min-height: 2rem;
    min-width: 7rem;
    outline: none;
    padding: 10px 15px 10px 15px;

    &:hover {
        background-color: ${(props) => props.hoverColor || props.theme?.button?.colors?.tertiary || buttonDefaultStyles.colors.tertiary};
    }

    ${props => props.customStyles}
`;

export default Container;