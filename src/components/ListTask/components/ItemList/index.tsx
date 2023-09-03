import React, {useRef} from 'react';
import {Animated} from 'react-native';
import * as S from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from '@src/components/Text';
import {ItemListProps, TaskProps} from '@src/props';
import {useTheme} from '@src/styles/ThemeProvider';

export function ItemList({task, changeStatusTask, deleteTask}: ItemListProps) {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const theme = useTheme();

  const deleteTaskAnimated = (taskToDelete: TaskProps) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      deleteTask(taskToDelete);
    }, 800);
  };

  return (
    <>
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        <S.Item>
          {task.completed ? (
            <>
              <S.ContentItem underlayColor="none" onPress={() => changeStatusTask(task)}>
                <>
                  <S.ContentIcon>
                    <Icon name="check-square-o" size={20} color={theme.colors.primary} />
                  </S.ContentIcon>
                  <S.ContentText>
                    <Text color="secondary" checked>
                      {task.name}
                    </Text>
                  </S.ContentText>
                </>
              </S.ContentItem>

              <S.ContentDelete underlayColor="none" onPress={() => deleteTaskAnimated(task)}>
                <Icon name="remove" size={20} color={theme.colors.error} />
              </S.ContentDelete>
            </>
          ) : (
            <>
              <S.ContentItem underlayColor="none" onPress={() => changeStatusTask(task)}>
                <>
                  <S.ContentIcon>
                    <Icon name="square-o" size={20} color={theme.colors.black} />
                  </S.ContentIcon>
                  <S.ContentText>
                    <Text color="secondary">{task.name}</Text>
                  </S.ContentText>
                </>
              </S.ContentItem>

              <S.ContentDelete underlayColor="none" onPress={() => deleteTaskAnimated(task)}>
                <Icon name="remove" size={20} color={theme.colors.error} />
              </S.ContentDelete>
            </>
          )}
        </S.Item>
      </Animated.View>
    </>
  );
}
