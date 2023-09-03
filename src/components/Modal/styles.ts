import styled from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.modalBackground};
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.View`
  position: absolute;
  background-color: ${({theme}) => theme.colors.white};
  width: 85%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
