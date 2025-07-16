import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  title = 'apis';
}

export interface forumPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface datoPost {
  nombre: string;
  telefono: string;
  direccion: string;
}
