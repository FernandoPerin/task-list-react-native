import styled, {css} from 'styled-components/native';
import {TextStyleProps} from '@src/props';
import {Theme} from '@src/styles/theme';

const variantText = {
  body: (theme: Theme) => css`
    ${theme.typography.variants.body};
  `,
  input: (theme: Theme) => css`
    ${theme.typography.variants.input};
  `,
  title: (theme: Theme) => css`
    ${theme.typography.variants.title};
  `,
  subtitle: (theme: Theme) => css`
    ${theme.typography.variants.subtitle};
  `,
  button: (theme: Theme) => css`
    ${theme.typography.variants.button};
  `,
  footer: (theme: Theme) => css`
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
