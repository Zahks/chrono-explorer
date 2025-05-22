import { Injectable, inject, signal } from '@angular/core';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authApi = inject(AuthApiService);
  currentUser = signal<string | null>(null);
  private currentEmail = '';

  private admin = { email: 'admin@chrono.fr', password: 'admin', username: 'admin' };

  constructor() {}

  init(): void {
    const saved = localStorage.getItem('connectedUser');
    if (saved) {
      const user = JSON.parse(saved);
      this.currentUser.set(user.username);
      this.currentEmail = user.email;
    }
  }

  login(email: string, password: string): Promise<boolean> {
    const normalizedEmail = email.trim().toLowerCase();

    if (
      normalizedEmail === this.admin.email &&
      password === this.admin.password
    ) {
      const adminUser = { email: this.admin.email, username: this.admin.username };
      localStorage.setItem('connectedUser', JSON.stringify(adminUser));
      this.currentUser.set(adminUser.username);
      this.currentEmail = adminUser.email;
      return Promise.resolve(true);
    }

    return new Promise((resolve) => {
      this.authApi.login(normalizedEmail, password).subscribe({
        next: (user) => {
          if (user) {
            const userData = JSON.stringify({ email: user.email, username: user.username });
            localStorage.setItem('connectedUser', userData);
            this.currentUser.set(user.username);
            this.currentEmail = user.email;
            resolve(true);
          } else {
            resolve(false);
          }
        },
        error: () => resolve(false)
      });
    });
  }

  register(username: string, email: string, password: string): Promise<boolean> {
    const normalizedEmail = email.trim().toLowerCase();

    return new Promise((resolve) => {
      this.authApi.register({ username, email: normalizedEmail, password }).subscribe({
        next: () => {
          const userData = JSON.stringify({ email: normalizedEmail, username });
          localStorage.setItem('connectedUser', userData);
          this.currentUser.set(username);
          this.currentEmail = normalizedEmail;
          resolve(true);
        },
        error: () => resolve(false)
      });
    });
  }

  logout(): void {
    localStorage.removeItem('connectedUser');
    this.currentUser.set(null);
    this.currentEmail = '';
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  getUsername(): string {
    return this.currentUser() ?? '';
  }

  isAdmin(): boolean {
    return this.currentEmail.trim().toLowerCase() === this.admin.email;
  }
}
