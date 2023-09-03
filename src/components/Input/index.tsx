import React from 'react';
import * as S from './styles';
import {InputProps} from '@src/props';

export function Input({value, setValue, placeholder = '', onChangeWithAction = () => {}}: InputProps) {
  return (
    <>
      <S.Input
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        onChange={event => onChangeWithAction(event.nativeEvent.text)}
      />
    </>
  );
}
