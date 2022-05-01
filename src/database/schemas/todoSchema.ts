import { tableSchema } from '@nozbe/watermelondb';

export const todoSchema = tableSchema({
  name: 'todos',
  columns: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'isDone',
      type: 'boolean',
    },
  ],
});
