import React, { useCallback, useEffect, useState } from 'react';

import { database } from '@/database';
import { TodoModel } from '@/database/models/todoModel';

import { TodoContext } from './context';
import { ITodoItem } from './types';

export const TodoProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<ITodoItem[]>([
    {
      id: 'id-123',
      name: 'Homework',
      isDone: false,
    },
    {
      id: 'id-456',
      name: 'Wash dishes',
      isDone: false,
    },
    {
      id: 'id-789',
      name: 'Cook the dinner',
      isDone: false,
    },
  ]);

  const fetchTodos = useCallback(async () => {
    const response = await database.get<TodoModel>('todos').query().fetch();
    setTodos(response.map(i => ({ id: i.id, isDone: i.isDone, name: i.name })));
  }, []);

  const editTodo = useCallback(async (payload: ITodoItem) => {
    await database.write(async () => {
      const todo = await database.get<TodoModel>('todos').find(payload.id);
      await todo.update(_todo => {
        _todo.name = payload.name;
        _todo.isDone = payload.isDone;
      });

      setTodos(st => st.map(item => (item.id === payload.id ? payload : item)));
    });
  }, []);

  const addTodo = useCallback(async () => {
    await database.write(async () => {
      const newTodo = await database.get<TodoModel>('todos').create(todo => {
        todo.name = '';
        todo.isDone = false;
      });

      setTodos(st => [
        ...st.map(item => ({ ...item, focus: false })),
        {
          id: newTodo.id,
          name: newTodo.name,
          isDone: newTodo.isDone,
          focus: true,
        },
      ]);
    });
  }, []);

  const deleteTodo = useCallback(async (id: string) => {
    await database.write(async () => {
      const todo = await database.get<TodoModel>('todos').find(id);
      await todo.destroyPermanently();

      setTodos(st => st.filter(item => item.id !== id));
    });
  }, []);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        editTodo,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
