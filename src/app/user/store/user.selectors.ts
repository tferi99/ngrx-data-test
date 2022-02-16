import {createSelector} from '@ngrx/store';
import {User} from '../model';

export const selectUsers = createSelector<User[], User[], User[]>(
  (companies) => companies,
  (companies: User[]) =>
    companies.reduce<User[]>(
      (prev, cur) => {
        prev.push(cur);
        // add persons here
        //prev[cur.column].sort((a, b) => a.order - b.order);
        return prev;
      },
      []
));
