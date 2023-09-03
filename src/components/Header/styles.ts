import styled from 'styled-components/native';

export const Container = styled.View``;

export const HeaderLogo = styled.View`
  width: '100%';
  height: 70px;
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const Image = styled.Image`
  position: relative;
  bottom: -15px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
