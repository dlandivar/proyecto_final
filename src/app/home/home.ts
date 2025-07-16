import { Component, OnInit } from '@angular/core';
//import { forumPost } from '../app';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { datoPost } from '../app';
//import { ForumsService } from '../forums.service';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  // constructor(private forumService: ForumsService) { }
  constructor(private dataService: DataService) { }
  /*forum: forumPost = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };*/

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

  //forums: forumPost[] = [];

  /*ngOnInit() {
    // Initialize the forums array or fetch it from a service
    this.forumService.getForums().subscribe(data => {
      this.forums = data;
      console.log('Forums loaded:', data);
    });
    console.log('algo');
  }*/

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

  // Si usas DataService para persistir:
  this.dataService.setContactos(this.contactos);

  // Si estás editando y eliminas el contacto que está en el formulario:
  if (this.contacto.id === id) {
    this.contacto = { id: 0, nombre: '', direccion: '', telefono: '' };
    this.esEdicion = false;
  }
}



}
