import styled from 'styled-components';

export const LoginForm = styled.div`
    height: 90vh;
    background: ${props => props.theme.colors.background}; 
    color: ${ props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormGroup = styled.div`
    background: ${props => props.theme.colors.primary}; 
    color: ${ props => props.theme.colors.navtext};
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Label = styled.label`
    margin:20px 5px;
  position:relative;
  display:block;
`

export const Input = styled.input`
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.text};
    padding: 8px;
    margin:10px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text} !important;
    :focus + span, :not(:placeholder-shown) + span{
        opacity:1;
        transform: scale(0.75) translateY(-100%) translateX(-30px);
    };
    :focus {
        outline: none;
        box-shadow: 0 5px 5px ${props => props.theme.colors.navtext};
    }
`

export const Submit = styled.button`
    border: none;
    padding: 10px;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.navtext};
    border-radius: 5px;
    cursor: pointer;
    :hover{
        background-color: ${props => props.theme.colors.primary};
        border: 1px solid ${props => props.theme.colors.background}
    }
`

export const Span = styled.span`
    padding:10px;
    margin: 5px;
  pointer-events: none;
  position:absolute;
  left:0;
  top:0;
  transition: 0.2s;
  transition-timing-function: ease;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity:0.5;
  color: ${props => props.theme.colors.text}
`