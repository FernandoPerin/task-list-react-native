import styled, {css} from 'styled-components/native';
import {TextStyleProps} from '../../props';

const variantText = {
  body: theme => css`
    ${theme.typography.variants.body};
  `,
  input: theme => css`
    ${theme.typography.variants.input};
  `,
  title: theme => css`
    ${theme.typography.variants.title};
  `,
  subtitle: theme => css`
    ${theme.typography.variants.subtitle};
  `,
  button: theme => css`
    ${theme.typography.variants.button};
  `,
  footer: theme => css`
    ${theme.typography.variants.footer};
  `,
};

export const Text = styled.Text<TextStyleProps>`
  ${({theme, color = 'primary', variant = 'body', checked}) => css`
    ${variantText[variant](theme)}
    color: ${theme.colors[color]};
    ${checked &&
    css`
      text-decoration: line-through;
      opacity: 0.5;
    `}
  `};
`;
