import styled, {css} from 'styled-components/native';

export const Input = styled.TextInput`
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.neutral};
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 20px;
  ${({theme}) => css`
    ${theme.typography.variants.input};
  `}
`;
