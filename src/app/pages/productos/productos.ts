import { Component, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ProductoItem, ProductoService } from '../../services/producto-service';

@Component({
  selector: 'app-productos',
  imports: [NgFor, NgIf, NgClass, CurrencyPipe, UpperCasePipe],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  private servicio = inject(ProductoService);
  productos = signal<ProductoItem[]>([]);

  ngOnInit(): void {
    this.servicio.obtenerProductos().subscribe((datos) => {
      this.productos.set(datos);
    });
  }
}
