import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { datoPost } from '../app';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private dataService: DataService) { }

  contacto: datoPost = {
    id: 0,
    nombre: '',
    telefono: '',
    direccion: ''
  };

  contactos: datoPost[] = [];

  esEdicion: boolean = false;

  editarContacto(c: datoPost) {
    this.contacto = { ...c };
    this.esEdicion = true;
  }


  ngOnInit() {
    this.contactos = this.dataService.getItems();
  }

  onSubmit(dato: datoPost) {
    console.log('Form submitted:', dato);
    if (this.esEdicion) {
      const index = this.contactos.findIndex(ct => ct.id === this.contacto.id);
      if (index !== -1) {
        this.contactos[index] = { ...this.contacto };
      }
      this.esEdicion = false;
    } else {
      const nuevoId = this.contactos.length + 1;
      const contactoConId = { ...dato, id: nuevoId };
      this.dataService.addItem(contactoConId);
    }


    this.contacto = { id: 0, nombre: '', direccion: '', telefono: '' };
    this.contactos = this.dataService.getItems();




  }

  confirmarEliminar(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      this.eliminarContacto(id);
    }
  }

  eliminarContacto(id: number) {
    this.contactos = this.contactos.filter(c => c.id !== id);

    this.dataService.setContactos(this.contactos);
    if (this.contacto.id === id) {
      this.contacto = { id: 0, nombre: '', direccion: '', telefono: '' };
      this.esEdicion = false;
    }
  }



}
