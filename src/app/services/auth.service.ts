import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'test', email: 'test@test.com', password: '123456' },
    { username: 'admin', email: 'admin@chrono.fr', password: 'admin' } // ← compte admin valide
  ];

  currentUser = signal<string | null>(null);

  constructor() {
    const saved = localStorage.getItem('connectedUser');
    if (saved) {
      const normalizedEmail = saved.trim().toLowerCase();
      const userExists = this.users.some(u => u.email.trim().toLowerCase() === normalizedEmail);
      if (userExists) {
        this.currentUser.set(normalizedEmail);
      } else {
        this.logout(); // 🔒 on nettoie si invalide
      }
    }
  }

  login(email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();
    const user = this.users.find(u => u.email.trim().toLowerCase() === normalizedEmail && u.password === password);
    if (user) {
      localStorage.setItem('connectedUser', normalizedEmail);
      this.currentUser.set(normalizedEmail);
      return true;
    }
    return false;
  }

  register(username: string, email: string, password: string): boolean {
    const normalizedEmail = email.trim().toLowerCase();
    const existing = this.users.find(u => u.email.trim().toLowerCase() === normalizedEmail);
    if (existing) return false;

    this.users.push({ username, email: normalizedEmail, password });
    localStorage.setItem('connectedUser', normalizedEmail);
    this.currentUser.set(normalizedEmail);
    return true;
  }

  logout() {
    localStorage.removeItem('connectedUser');
    this.currentUser.set(null);
  }

  isLoggedIn(): boolean {
    return this.currentUser() !== null;
  }

  getUsername(): string | null {
    const email = this.currentUser();
    if (!email) return null;

    const user = this.users.find(u => u.email.trim().toLowerCase() === email);
    return user ? user.username : null;
  }
}
