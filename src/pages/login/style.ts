import styled from 'styled-components';

export const LoginForm = styled.div`
    height: 90vh;
    background: ${props => props.theme.colors.background}; 
    color: ${ props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
`