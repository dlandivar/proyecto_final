import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio sea singleton
})



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  title = 'apis';
}

export interface datoPost {
  id: number;
  name: string;
  address: string;
  phone: string;
}
