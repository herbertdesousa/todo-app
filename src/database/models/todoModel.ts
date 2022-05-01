import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export class TodoModel extends Model {
  static table = 'todos';

  @field('name')
  name!: string;

  @field('isDone')
  isDone!: boolean;
}
