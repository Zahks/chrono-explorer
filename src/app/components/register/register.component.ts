import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    const { username, email, password, confirmPassword } = this.registerForm.value;

    if (this.registerForm.valid) {
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas ❌');
        return;
      }

      const success = this.authService.register(username, email, password);
      if (success) {
        alert('Inscription réussie ✅');
        localStorage.setItem('connectedUser', username); // ✅ connecter automatiquement
        this.router.navigate(['/']);
      } else {
        alert('Un utilisateur existe déjà avec cet email ❌');
      }
    }
  }
}
