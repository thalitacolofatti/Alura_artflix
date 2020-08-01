import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--grayDark);
    color: var(--white);
    flex: 1;
    padding-top: 110px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 30px;

    a {
        color: var(--primary);
    }

    @media (max-width: 800px) {
        padding-top: 50px;
    }
`;

function PageDefault({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;
