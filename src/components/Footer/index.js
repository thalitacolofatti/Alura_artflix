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
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>
        por Thalita Colofatti 
      </p>
    </FooterBase>
  );
}

export default Footer;
