import { Component, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf, NgStyle, UpperCasePipe } from '@angular/common';
import { ProductoItem, ProductoService } from '../../services/producto-service';

@Component({
  selector: 'app-ofertas',
  imports: [NgFor, NgIf, NgStyle, CurrencyPipe, UpperCasePipe],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas implements OnInit {
  private servicio = inject(ProductoService);
  ofertas = signal<ProductoItem[]>([]);

  ngOnInit(): void {
    this.servicio.obtenerProductos().subscribe((datos) => {
      this.ofertas.set(datos.filter((p) => p.oferta));
    });
  }

  precioFinal(p: ProductoItem): number {
    return p.precio * (1 - p.descuento / 100);
  }
}