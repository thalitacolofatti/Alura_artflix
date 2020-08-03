import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img style={{height: '40px'}} src={Logo} alt="Logo Artflix" />
      </a>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>por
        {' '}
        <a href="https://github.com/thalitacolofatti/Alura_artflix">
          Thalita Colofatti 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
