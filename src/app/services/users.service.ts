import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, MoreUser } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  public getUsers():User[]{
    return User;
  }

  public getMoreUsers():User[]{
    return MoreUser;
  }
  
}
