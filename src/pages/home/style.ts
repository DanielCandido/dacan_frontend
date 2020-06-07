import styled from 'styled-components';

export const ContainerFolder = styled.div`
  /* display: flex;
  max-width: 450px;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;
  height: 300px; */
  text-align: center;
`

export const Card = styled.div`
    background-image: url('https://i.ibb.co/TW8GbS8/folder-icon.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    min-width: 125px;
    min-height: 125px;
    padding: 15px;
    margin: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* font-weight: 700; */
    color: #fff;
    :hover{
        background-position: 45% 45%;
        opacity: 0.7;
    };
`
