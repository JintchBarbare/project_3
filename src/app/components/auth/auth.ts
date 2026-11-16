import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {
  isLoginMode = true;
  email = '';
  password = '';
  name = '';

  constructor(private router: Router) {}

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(): void {

    this.router.navigate(['/profile']);
  }
}