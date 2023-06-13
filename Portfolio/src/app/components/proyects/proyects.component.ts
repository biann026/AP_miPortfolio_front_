import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/service/proyectos.service';
import { TokenService } from 'src/service/token.service';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyectos: Proyectos[] = []

  constructor(private proyectosService: ProyectosService ,private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosService.lista().subscribe(data => { this.proyectos= data; })
  }

  delete(id?: number) {
    if (id !== undefined) {
      this.proyectosService.delete(id).subscribe({
        next: data => {
          this.cargarProyectos();
        },
        error: err => {
          alert("No se pudo borrar la experiencia");
        }
      });
    }}

  }
