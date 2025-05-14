import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // 👈 NEW
import { CommonModule } from '@angular/common';

import { TimelineComponent } from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, ReactiveFormsModule,TimelineComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chrono-explorer';

  constructor(private auth: AuthService) {}

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  getUsername() {
    return this.auth.getUsername();
  }

  isAdmin(): boolean {
  const user = this.getUsername();
  return user !== null && user.trim().toLowerCase() === 'admin@chrono.fr';
}


  logout() {
    this.auth.logout();
  }
}
