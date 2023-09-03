import React from 'react';
import * as S from './styles';
import {Text} from '@src/components/Text';

export function Header() {
  return (
    <S.Container>
      <S.HeaderLogo>
        <S.Image source={require('@src/assets/images/logo-check.png')} />
      </S.HeaderLogo>
      <S.HeaderContent>
        <Text variant="title">Lista de Tarefas</Text>
        <Text>Crie e gerencie suas tarefas com um clique!</Text>
      </S.HeaderContent>
    </S.Container>
  );
}
