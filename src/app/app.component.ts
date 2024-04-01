import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './usuario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio-stefanini-front';
  users: Usuario[] = [];

  ngOnInit() {
    this.getAllUsers().then(
      response => this.users = response
    );
  }

  constructor() {
    this.getAllUsers().then(
      response => this.users = response
    );
  }

  async getAllUsers(): Promise<Usuario[]> {
    const data = await fetch('http://localhost:8080/usuarios');
    let ret = await data.json() ?? [];
    console.log(ret);
    return ret;
  }
}
