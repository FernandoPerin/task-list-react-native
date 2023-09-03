import React from 'react';
import * as S from './styles';
import {TouchableOpacity} from 'react-native';
import {Text} from '@src/components/Text';
import {ButtonProps} from '@src/props';

export function Button({children, variant, onPress}: ButtonProps) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <S.Button variant={variant}>
          <Text variant="button" color="white">
            {children}
          </Text>
        </S.Button>
      </TouchableOpacity>
    </>
  );
}
