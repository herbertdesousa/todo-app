import { appSchema } from '@nozbe/watermelondb';

import { todoSchema } from './todoSchema';

export const schemas = appSchema({
  version: 1,
  tables: [todoSchema],
});
