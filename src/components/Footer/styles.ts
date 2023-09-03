import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  /* margin-top: 30px; */
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${({theme}) => theme.colors.neutral1};
  display: flex;
  align-items: center;
`;
