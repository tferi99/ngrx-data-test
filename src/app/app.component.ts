import { Component } from '@angular/core';
import {User} from './user/model';
import {Observable, of} from 'rxjs';
import {UserService} from './user/user.service';
import {UserDataService} from './user/store/user-data.service';

const LOCAL_DB: User[] = [
  {id: 10, name: 'John Smith', email: 'js@test.org', birth: new Date(), counter: 1},
  {id: 11, name: 'Jane Doe', email: 'jd@test.org', birth: new Date(), counter: 5},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-data-test';
  localUsers$: Observable<User[]> = of(LOCAL_DB);
  httpUsers$!: Observable<User[]>;
  ngrxDataUsers$: Observable<User[]> = this.userDataService.selectUsers$;

  constructor(
    private userService: UserService,
    private userDataService: UserDataService
  ) {
    this.httpUsers$ = userService.getAll();
    userDataService.getAll();
  }
}
