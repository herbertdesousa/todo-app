export interface ITodoItem {
  id: string;
  isDone: boolean;
  name: string;
  focus?: boolean;
}

export interface ITodoContextData {
  todos: ITodoItem[];
  editTodo: (payload: ITodoItem) => Promise<void>;
  addTodo: () => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}
