import { Component, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe, NgClass, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoItem, ProductoService } from '../../services/producto-service';

@Component({
  selector: 'app-productos',
  imports: [NgFor, NgIf, NgClass, CurrencyPipe, UpperCasePipe, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos implements OnInit {
  private servicio = inject(ProductoService);
  productos = signal<ProductoItem[]>([]);

  busqueda = '';
  categoriaSeleccionada = '';

  ngOnInit(): void {
    this.servicio.obtenerProductos().subscribe((datos) => {
      this.productos.set(datos);
    });
  }

  get categorias(): string[] {
    return [...new Set(this.productos().map((p) => p.categoria))];
  }

  get productosFiltrados(): ProductoItem[] {
    const texto = this.busqueda.trim().toLowerCase();
    return this.productos().filter(
      (p) =>
        p.nombre.toLowerCase().includes(texto) &&
        (this.categoriaSeleccionada === '' || p.categoria === this.categoriaSeleccionada)
    );
  }

  limpiarFiltros(): void {
    this.busqueda = '';
    this.categoriaSeleccionada = '';
  }
}
