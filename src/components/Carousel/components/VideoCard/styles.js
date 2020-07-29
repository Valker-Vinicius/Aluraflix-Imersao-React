import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: transform 150ms linear, opacity 100ms linear, margin-right 200ms linear, margin-left 200ms linear;
  &:hover,
  &:focus {
    margin-left: 100px;
    margin-right: 100px;
    opacity: 1;
    transform: scale(1.5);
    transition: transform 150ms linear, opacity 100ms linear, margin-right 200ms linear, margin-left 200ms linear;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
