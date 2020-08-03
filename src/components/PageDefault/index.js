import React from 'react';
import styled, { css } from 'styled-components';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--grayDark);
    color: var(--white);
    flex: 1;
    padding-top: 94px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 30px;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}

    a {
        color: var(--primary);
    }

    @media (max-width: 800px) {
        padding-top: 40px;
    }
`;

function PageDefault({ children, paddingAll }) {
    return (
        <>
            <Menu />
                <Main paddingAll={paddingAll}>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;
