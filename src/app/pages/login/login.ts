import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  correo = '';
  password = '';
  error = '';

  ingresar(): void {
    if (this.auth.iniciarSesion(this.correo, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Correo o contraseña incorrectos.';
    }
  }
}