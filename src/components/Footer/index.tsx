import React from 'react';
import * as S from './styles';
import {Text} from '@src/components/Text';

export function Footer() {
  return (
    <S.Container>
      <Text variant="footer" color="secondary">
        Desenvolvido por Fernando Perin
      </Text>
    </S.Container>
  );
}
