import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tienda',
  imports: [NgFor, RouterLink],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda {
  categorias = ['Celulares', 'Cargadores', 'Fundas', 'Baterías portátiles', 'Teclados'];
}
