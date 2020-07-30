import React from 'react';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuWrapper } from './style.js'
import Button from '../Button';
//import ButtonLink from './components';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage className="Logo" src={Logo} alt="ArtFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </MenuWrapper>
    );
}

export default Menu;