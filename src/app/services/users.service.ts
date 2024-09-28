import { Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = 'http://localhost:3004'

  constructor(private http: HttpClient) {}

  getUsers():Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }

  getUserById(id: number):Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users/${id}`);
  }

}
