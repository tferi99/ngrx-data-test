import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory,} from '@ngrx/data';
import {select} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {selectUsers} from './user.selectors';
import {User} from '../model';

@Injectable({
  providedIn: 'root',
})
export class UserDataService extends EntityCollectionServiceBase<User> {
  selectUsers$ = this.entities$.pipe(select(selectUsers));

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('User', serviceElementsFactory);
  }
}
