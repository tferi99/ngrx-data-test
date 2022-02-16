import {EntityMetadata} from '@ngrx/data';
import { User } from '../model';

export const userEntityMetadata: EntityMetadata<User> = {
  entityName: 'User',
  sortComparer: (a, b) => a.name.localeCompare(b.name),
  filterFn: (entities, pattern) =>
    entities.filter(
      (entity) =>
        entity.name?.includes(pattern) || entity.name?.includes(pattern)
    ),
};
