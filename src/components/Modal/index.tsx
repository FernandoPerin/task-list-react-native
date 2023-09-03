import React from 'react';
import * as S from './styles';
import {Button} from '@src/components/Button';
import {ModalProps} from '@src/props';

export function Modal({
  children,
  modalVisible,
  textSuccess = 'Confirmar',
  onSuccess,
  textCancel = 'Cancelar',
  onCancel,
}: ModalProps) {
  return (
    <>
      {modalVisible ? (
        <S.Container>
          <S.Modal>
            {children}
            <S.Buttons>
              <Button onPress={onSuccess} variant="success">
                {textSuccess}
              </Button>
              <Button onPress={onCancel} variant="error">
                {textCancel}
              </Button>
            </S.Buttons>
          </S.Modal>
        </S.Container>
      ) : (
        <></>
      )}
    </>
  );
}
