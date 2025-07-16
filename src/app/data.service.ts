// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { datoPost } from './app';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio sea singleton
})
export class DataService {
  private items: datoPost[] = [];

  getItems(): datoPost[] {
    return this.items;
  }

  addItem(item: datoPost): void {
    this.items.push(item);
  }

  clearItems(): void {
    this.items = [];
  }

  setContactos(lista: datoPost[]) {
  this.items = lista;
}
}
