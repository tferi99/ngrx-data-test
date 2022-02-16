import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>('/user');
  }
}
