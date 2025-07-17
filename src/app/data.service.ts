// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { datoPost } from './app';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio sea singleton
})
export class DataService {
  private items: datoPost[] = [];

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  /*
    obtenerContactos(): Observable<datoPost[]> {
      return this.http.get<datoPost[]>(this.apiUrl);
    }
  
    agregarContacto(contacto: datoPost): Observable<datoPost> {
      return this.http.post<datoPost>(this.apiUrl, contacto);
    }
  
    actualizarContacto(contacto: datoPost): Observable<datoPost> {
      return this.http.put<datoPost>(`${this.apiUrl}/${contacto.id}`, contacto);
    }
  
    eliminarContacto(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }*/

  obtenerContactos(): Observable<datoPost[]> {
    return this.http.get<datoPost[]>(`${this.apiUrl}`);
  }

  agregarContacto(contacto: datoPost): Observable<datoPost> {
    return this.http.post<datoPost>(`${this.apiUrl}/add`, contacto);
  }

  actualizarContacto(contacto: datoPost): Observable<datoPost> {
    return this.http.put<datoPost>(`${this.apiUrl}/update/${contacto.id}`, contacto);
  }

  eliminarContacto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }


  /*
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
  }*/
}
