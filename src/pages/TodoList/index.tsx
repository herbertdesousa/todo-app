import React, { useState } from 'react';
import {
  StatusBar,
  TouchableOpacity,
  View,
  Keyboard,
  Text,
} from 'react-native';
import { RowMap, SwipeListView } from 'react-native-swipe-list-view';

import { colors } from '@/styles/colors';

import { ITodoItem } from '@/hooks/types';
import { useTodo } from '@/hooks';

import {
  Container,
  Header,
  ListHiddenItem,
  ListHiddenItemIcon,
  Title,
  AddButton,
  AddButtonIcon,
} from './styles';

import TodoListItem from './TodoListItem';

const TodoList: React.FC = () => {
  const { deleteTodo, addTodo, todos } = useTodo();

  const [screenWidth, setScreenWidth] = useState(0);
  const [isDeleteSwipeOpened, setIsDeleteSwipeOpened] = useState(false);

  const deleteItem = (rowMap: RowMap<ITodoItem>, itemId: string) => {
    if (rowMap[itemId]) {
      rowMap[itemId].closeRow();
    }
    deleteTodo(itemId);
  };

  return (
    <Container
      onLayout={({ nativeEvent: { layout } }) => setScreenWidth(layout.width)}
    >
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={colors.black1}
      />

      <SwipeListView
        data={todos}
        keyExtractor={i => i.id}
        contentContainerStyle={{ paddingBottom: 256 }}
        renderItem={({ item }) => (
          <TodoListItem item={item} isDeleteSwipeOpened={isDeleteSwipeOpened} />
        )}
        renderHiddenItem={(_data, _rowMap) => (
          <ListHiddenItem
            activeOpacity={0.8}
            onPress={() => deleteItem(_rowMap, _data.item.id)}
          >
            <ListHiddenItemIcon name="delete" size={24} color={colors.white} />
          </ListHiddenItem>
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: screenWidth - 48 - 16 - 8,
              alignSelf: 'flex-end',
              height: 1,
              backgroundColor: colors.black3,
            }}
          />
        )}
        onRowOpen={() => {
          setIsDeleteSwipeOpened(true);
          Keyboard.dismiss();
        }}
        onRowClose={() => setIsDeleteSwipeOpened(false)}
        ListHeaderComponent={() => (
          <Header>
            <Title>Tasks</Title>
          </Header>
        )}
        ListFooterComponent={() => (
          <View style={{ alignItems: 'center' }}>
            <AddButton onPress={addTodo}>
              <AddButtonIcon name="add" size={24} />
              <Text>ADICIONAR</Text>
            </AddButton>
          </View>
        )}
        leftOpenValue={0}
        disableRightSwipe
        rightOpenValue={-48}
      />
    </Container>
  );
};

export default TodoList;
