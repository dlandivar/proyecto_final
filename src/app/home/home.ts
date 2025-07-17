import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
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
    name: '',
    address: '',
    phone: ''
  };

  contactos: datoPost[] = [];

  esEdicion: boolean = false;

  editarContacto(c: datoPost) {
    this.contacto = { ...c };
    this.esEdicion = true;
  }


  ngOnInit() {
    this.dataService.obtenerContactos().subscribe(data => {
      this.contactos = data;
    });
  }

  onSubmit(dato: datoPost, form: NgForm) {
    console.log('Form submitted:', dato);

    if (this.esEdicion) {
      this.dataService.actualizarContacto(this.contacto).subscribe((actualizado) => {
        this.contactos = this.contactos.map(c => c.id === actualizado.id ? actualizado : c);
        form.resetForm();
        this.contacto = { id: 0, name: '', address: '', phone: '' };
        this.esEdicion = false;
      });
    } else {
      this.dataService.agregarContacto(this.contacto).subscribe((nuevo) => {
        this.contactos = [...this.contactos, nuevo];
        form.resetForm();
        this.contacto = { id: 0, name: '', address: '', phone: '' };
      });
    }
  }


  actualizarLista() {
    this.dataService.obtenerContactos().subscribe(data => {
      this.contactos = data;
    });
  }

  confirmarEliminar(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este contacto?')) {
      this.eliminarContacto(id);
    }
  }

  eliminarContacto(id: number) {

    this.dataService.eliminarContacto(id).subscribe(() => {
     //this.contactos = this.contactos.filter(c => c.id !== id);
     this.contactos = [...this.contactos.filter(c => c.id !== id)];
    });
  }



}
