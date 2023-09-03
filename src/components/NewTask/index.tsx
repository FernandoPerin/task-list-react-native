import React from 'react';
import {Text} from '@src/components/Text';
import {Input} from '@src/components/Input';
import {Modal} from '@src/components/Modal';
import {NewTaskProps} from '@src/props';

export function NewTask({modalVisible, closeModal, createTask, value, setValue}: NewTaskProps) {
  return (
    <>
      <Modal modalVisible={modalVisible} onSuccess={createTask} onCancel={closeModal}>
        <Text variant="subtitle">Nova Tarefa</Text>
        <Text variant="body" color="secondary">
          Insira o nome da nova tarefa.
        </Text>
        <Input value={value} setValue={setValue} placeholder="Nome da Tarefa" />
      </Modal>
    </>
  );
}
