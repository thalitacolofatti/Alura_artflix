import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  background-size: cover;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  color: var(--white);
  display: flex;
  height: 197px;
  overflow: hidden;
  position: relative;
  padding: 16px;
  text-decoration: none;
  flex: 0 0 298px;
  width: 298px;
  transition: opacity .3s;

  &:hover,
  &:focus {
    transform: scale(1.2);
    overflow: none;
    z-index: 11;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
