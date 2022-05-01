import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { colors } from '@/styles/colors';

import { useTodo } from '@/hooks';

import { Checkbox, TextField } from '@/components';
import { ITodoItem } from '@/hooks/types';

interface ITodoListItemProps {
  item: ITodoItem;
  isDeleteSwipeOpened: boolean;
}

const TodoListItem: React.FC<ITodoListItemProps> = ({
  item,
  isDeleteSwipeOpened,
}) => {
  const { editTodo } = useTodo();

  const [isEditing, setIsEditing] = useState(item.focus || false);
  const [textEditing, setTextEditing] = useState('');

  const onSaveEdit = () => {
    editTodo({ id: item.id, name: textEditing, isDone: false });
    setIsEditing(false);
    setTextEditing('');
  };

  const onToggleCheckbox = () => {
    editTodo({ id: item.id, name: item.name, isDone: !item.isDone });
  };

  const onStartEdit = () => {
    setTextEditing(item.name);
    setIsEditing(true);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.black1,
        height: 48,
        paddingHorizontal: 20,
      }}
    >
      <Checkbox
        style={{ marginRight: 8 }}
        defaultValue={item.isDone}
        onChange={onToggleCheckbox}
      />

      {!isEditing && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ flex: 1 }}
          disabled={isDeleteSwipeOpened}
          onPress={onStartEdit}
        >
          <Text style={{ color: item.name ? colors.white : colors.gray2 }}>
            {item.name || 'Type the task name'}
          </Text>
        </TouchableOpacity>
      )}
      {isEditing && (
        <TextField
          style={{ flex: 1 }}
          defaultValue={item.name}
          onChangeText={text => setTextEditing(text)}
          onBlur={onSaveEdit}
          placeholder={item.name ? '' : 'Type the task name'}
          autoFocus
        />
      )}
    </View>
  );
};

export default TodoListItem;
