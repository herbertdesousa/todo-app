import { useContext } from 'react';

import { ITodoContextData } from './types';
import { TodoContext } from './context';

const useTodo = (): ITodoContextData => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodo must be used within an TodoContext');
  }

  return context;
};

export { useTodo };
