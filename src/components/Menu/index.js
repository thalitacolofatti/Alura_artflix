import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuWrapper } from './style.js'
import Button from '../Button';
//import ButtonLink from './components';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <Link to="/">
                <LogoImage className="Logo" src={Logo} alt="ArtFlix logo" />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </MenuWrapper>
    );
}

export default Menu;