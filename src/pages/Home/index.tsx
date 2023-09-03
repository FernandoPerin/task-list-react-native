import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as S from './styles';
import {useTheme} from '@src/styles/ThemeProvider';
import {Header} from '@src/components/Header';
import {Footer} from '@src/components/Footer';
import {ListTask} from '@src/components/ListTask';
import {NewTask} from '@src/components/NewTask';
import {TaskProps} from '@src/props';
import {Input} from '@src/components/Input';
import {Text} from '@src/components/Text';

export function Home() {
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  const [listTask, setListTask] = useState([]);
  const [filteredListTask, setFilteredListTask] = useState([]);

  useEffect(() => {
    (async () => {
      let datalistTask = [];
      datalistTask = await getDataStorage();
      if (datalistTask !== null) {
        setListTask(datalistTask);
      } else {
        setListTask([]);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setFilteredListTask(listTask);
      await storeDataStorage(listTask);
    })();
  }, [listTask]);

  async function changeStatusTask(task: TaskProps) {
    setListTask(prevState => {
      const newState = prevState.map(t => {
        if (t.id === task.id) {
          return {...t, completed: !task.completed};
        }

        return t;
      });
      return newState;
    });
    setSearch('');
  }

  async function deleteTask(task: TaskProps) {
    setListTask(current =>
      current.filter(obj => {
        return obj.id !== task.id;
      }),
    );
    setSearch('');
  }

  async function createTask() {
    let newId = 1;
    if (listTask.length > 0) {
      newId = listTask[listTask.length - 1].id;
    }
    setListTask([...listTask, {id: newId + 1, name: newTask, completed: false}]);
    changeModal();
    setSearch('');
    setNewTask('');
  }

  function searchTask(value: string) {
    setSearch(value);
    if (value) {
      const newData = listTask.filter(function (task) {
        const taskData = task.name ? task.name.toUpperCase() : ''.toUpperCase();
        const textData = value.toUpperCase();
        return taskData.indexOf(textData) > -1;
      });
      setFilteredListTask(newData);
    } else {
      setFilteredListTask(listTask);
    }
  }

  function changeModal() {
    setModalVisible(!modalVisible);
  }

  async function storeDataStorage(value: TaskProps[]) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('dataListTask', jsonValue);
    } catch (e) {
      console.log('Erro ao salvar os dados');
    }
  }

  async function getDataStorage() {
    try {
      const jsonValue = await AsyncStorage.getItem('dataListTask');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Erro ao ler os dados');
    }
  }

  return (
    <>
      <S.Container>
        <S.ContentKeyboard behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <S.ContentScroll>
            <S.HeaderContainer>
              <Header />
            </S.HeaderContainer>

            <S.ContentContainer>
              {listTask && listTask.length > 0 ? (
                <>
                  <Input value={search} onChangeWithAction={searchTask} placeholder="Nome da Tarefa" />
                  {filteredListTask && filteredListTask.length > 0 ? (
                    <>
                      <ListTask
                        listTask={filteredListTask}
                        changeStatusTask={changeStatusTask}
                        deleteTask={deleteTask}
                      />
                    </>
                  ) : (
                    <>
                      <S.NoTask>
                        <Text color="secondary" variant="body">
                          Não existe tarefas com este nome
                        </Text>
                      </S.NoTask>
                    </>
                  )}
                </>
              ) : (
                <>
                  <S.NoTask>
                    <Text color="secondary" variant="body">
                      Não existe tarefas cadastradas
                    </Text>
                  </S.NoTask>
                </>
              )}
            </S.ContentContainer>
          </S.ContentScroll>
        </S.ContentKeyboard>

        <S.FooterContainer>
          <S.Icon onPress={changeModal} underlayColor="none">
            <Icon name="plus-circle" size={60} color={theme.colors.primary} />
          </S.Icon>
          <Footer />
        </S.FooterContainer>
      </S.Container>

      <NewTask
        modalVisible={modalVisible}
        closeModal={changeModal}
        createTask={createTask}
        value={newTask}
        setValue={setNewTask}
      />
    </>
  );
}
