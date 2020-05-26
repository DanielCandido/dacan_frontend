import styled from 'styled-components';

export const GridFolders = styled.div`
    height: 100%;
    background: ${props => props.theme.colors.background}; 
    color: ${ props => props.theme.colors.text};
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: center;
`

export const CardFolder = styled.div`
    min-width: 25%;
    width: 100%;
    background-color: ${props => props.theme.colors.secundary};
    height: 350px;
    text-align: center;
    padding: 15px;
    margin: 10px;
`

export const TitleCard = styled.h2`
    color: ${props => props.theme.colors.text};
    font-size: 16pt;
`