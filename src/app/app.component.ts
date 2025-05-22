import { Component, OnInit, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

import { AuthService } from './services/auth.service';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule,
    TimelineComponent,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chrono-explorer';
  isDarkMode = false;
  auth = inject(AuthService);
  cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.auth.init();

    effect(() => {
      this.auth.currentUser(); // observe
      this.cd.detectChanges(); // force UI update
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    const themeClass = 'dark-theme';

    if (this.isDarkMode) {
      document.body.classList.add(themeClass);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove(themeClass);
      localStorage.setItem('theme', 'light');
    }
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  getUsername(): string {
    return this.auth.getUsername();
  }

  isAdmin(): boolean {
    return this.auth.isAdmin();
  }

  logout(): void {
    this.auth.logout();
  }
}
