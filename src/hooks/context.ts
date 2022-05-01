import { createContext } from 'react';

import { ITodoContextData } from './types';

const TodoContext = createContext<ITodoContextData>({} as ITodoContextData);

export { TodoContext };
