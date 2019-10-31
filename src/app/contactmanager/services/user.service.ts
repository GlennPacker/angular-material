import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { nextTick } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // tslint:disable-next-line:variable-name
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[];
  };

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  private urlPrefix = 'https://angular-material-api.azurewebsites.net/';

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  getList() {
    const usersUrl = this.urlPrefix + 'users';
    return this.http
      .get<User[]>(usersUrl)
      .subscribe(
        users => {
          this.dataStore.users = users;
          this._users.next(Object.assign({}, this.dataStore.users));
        }
        , err => console.log(err)
      );
  }
}
