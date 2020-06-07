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
    min-width: 256px;
    width: 100%;
    background-image: url('https://i.ibb.co/TW8GbS8/folder-icon.png');
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 256px;
    text-align: center;
    padding: 15px;
    margin: 10px;
`

export const TitleCard = styled.h2`
    color: #333;
    font-size: 16pt;
`