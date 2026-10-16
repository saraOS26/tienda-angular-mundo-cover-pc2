import { Injectable, inject, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  obtenerProductos(): Observable<ProductoItem[]> {
    if (isDevMode()) {
      return this.http.get<ProductoItem[]>('http://localhost:3000/productos');
    }
    return this.http
      .get<{ productos: ProductoItem[] }>('/db.json')
      .pipe(map((datos) => datos.productos));
  }
}
