import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 1px solid var(--primary);
  color: var(--white);
  padding: 32px 16px;
  text-align: center;
  
  @media (max-width: 800px) {
    margin-bottom: 30px;
  }
`;
