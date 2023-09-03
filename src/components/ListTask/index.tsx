import React from 'react';
import * as S from './styles';
import {ItemList} from './components/ItemList';
import {ListTaskProps} from '@src/props';

export function ListTask({listTask, changeStatusTask, deleteTask}: ListTaskProps) {
  return (
    <>
      <S.Container>
        <S.ListTaskContainer>
          {listTask.map(task => (
            <ItemList key={task.id} task={task} changeStatusTask={changeStatusTask} deleteTask={deleteTask} />
          ))}
        </S.ListTaskContainer>
      </S.Container>
    </>
  );
}
