import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { ProductoItem, ProductoService } from '../../services/producto-service';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  auth = inject(AuthService);
  private servicio = inject(ProductoService);

  hoy = new Date();
  productos = signal<ProductoItem[]>([]);

  totalProductos = computed(() => this.productos().length);
  totalStock = computed(() => this.productos().reduce((suma, p) => suma + p.stock, 0));
  enOferta = computed(() => this.productos().filter((p) => p.oferta).length);
  valorInventario = computed(() =>
    this.productos().reduce((suma, p) => suma + p.precio * p.stock, 0)
  );

  resumenCategorias = computed(() => {
    const conteo: Record<string, number> = {};
    for (const p of this.productos()) {
      conteo[p.categoria] = (conteo[p.categoria] || 0) + 1;
    }
    return Object.entries(conteo).map(([categoria, cantidad]) => ({ categoria, cantidad }));
  });

  ngOnInit(): void {
    this.servicio.obtenerProductos().subscribe((datos) => this.productos.set(datos));
  }
}
