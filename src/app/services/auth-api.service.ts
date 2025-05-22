import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private apiUrl = 'http://localhost:3000/api/users'; // ← backend

  constructor(private http: HttpClient) {}

  // 🔐 Enregistrement
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // 🔑 Connexion
  login(email: string, password: string): Observable<User | null> {
    return this.http.post<User | null>(`${this.apiUrl}/login`, { email, password });
  }

  getUser(): any {
  const userString = localStorage.getItem('user');
  return userString ? JSON.parse(userString) : null;
}

}
