import { Injectable, signal } from '@angular/core';

export interface Usuario {
  nombre: string;
  correo: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private clave = 'usuario';
  usuario = signal<Usuario | null>(this.leer());

  private leer(): Usuario | null {
    const datos = localStorage.getItem(this.clave);
    return datos ? JSON.parse(datos) : null;
  }

  iniciarSesion(correo: string, password: string): boolean {
    if (correo === 'admin@mundocover.com' && password === '123456') {
      const user: Usuario = { nombre: 'Administrador', correo };
      localStorage.setItem(this.clave, JSON.stringify(user));
      this.usuario.set(user);
      return true;
    }
    return false;
  }

  cerrarSesion(): void {
    localStorage.removeItem(this.clave);
    this.usuario.set(null);
  }

  estaLogueado(): boolean {
    return this.usuario() !== null;
  }
}
