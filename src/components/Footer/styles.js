import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 1px solid var(--primary);
  color: var(--white);
  padding: 16px 16px;
  text-align: center;

  a {
    color: var(--primary);
  }
  
  @media (max-width: 800px) {
    margin-bottom: 40px;
  }
`;
