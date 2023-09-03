import React from 'react';
import * as S from './styles';
import {TextProps} from '@src/props';

export function Text({children, color, variant, ...props}: TextProps) {
  return (
    <>
      <S.Text color={color} variant={variant} {...props}>
        {children}
      </S.Text>
    </>
  );
}
