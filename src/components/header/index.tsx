import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { Container } from './style';
import Switch from 'react-switch';


interface Props {
    toogleTheme(): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <div>
                <a href="https://www.linkedin.com/in/danielfcandido/" target="_blank" rel="noopener noreferrer" style={{padding: '0 6px'}}><FaLinkedin fontSize={'16pt'} color={colors.navtext}/></a>
                <a href="https://www.instagram.com/daniel_candid0/" target="_blank" rel="noopener noreferrer" style={{padding: '0 6px'}}><FaInstagram fontSize={'16pt'} color={colors.navtext}/></a>
                <a href="https://www.facebook.com/danielfcandido" target="_blank" rel="noopener noreferrer" style={{padding: '0 6px'}}><FaFacebook fontSize={'16pt'} color={colors.navtext}/></a>
                <a href="https://github.com/DanielCandido" target="_blank" rel="noopener noreferrer" style={{padding: '0 6px'}}><FaGithub fontSize={'16pt'} color={colors.navtext}/></a>
            </div>
            <Switch
                onChange={toogleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={'#000'}
                onColor={'#fdfdfd'}
            />
        </Container>
    )
}

export default Header;