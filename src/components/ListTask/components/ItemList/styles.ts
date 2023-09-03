import styled from 'styled-components/native';

export const Item = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.neutral1};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
`;

export const ContentItem = styled.TouchableHighlight`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentDelete = styled.TouchableHighlight`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentIcon = styled.View`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentText = styled.View`
  width: 80%;
  padding-left: 20px;
`;
