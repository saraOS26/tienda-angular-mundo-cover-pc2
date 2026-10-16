import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProductoItem {
  id: number;
  nombre: string;
  imagen: string;
  categoria: string;
  precio: number;
  stock: number;
  oferta: boolean;
  descuento: number;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/productos';

  obtenerProductos(): Observable<ProductoItem[]> {
    return this.http.get<ProductoItem[]>(this.url);
  }
}
