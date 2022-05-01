import React from 'react';

import { TodoProvider } from './hooks/provider';
import TodoList from './pages/TodoList';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};

export default App;
