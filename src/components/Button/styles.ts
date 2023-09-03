import styled from 'styled-components/native';
import {ButtonStyleProps} from '@src/props';

export const Button = styled.View<ButtonStyleProps>`
  width: 120px;
  background-color: ${({variant, theme}) => (variant === 'success' ? theme.colors.primary : theme.colors.error)};
  border-radius: 5px;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  padding-left: 5px;
`;
