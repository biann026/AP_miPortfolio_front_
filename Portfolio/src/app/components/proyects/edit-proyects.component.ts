import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/service/image.service';
import { ProyectosService } from 'src/service/proyectos.service';

@Component({
  selector: 'app-edit-proyects',
  templateUrl: './edit-proyects.component.html',
  styleUrls: ['./edit-proyects.component.css']
})
export class EditProyectsComponent implements OnInit {
  proyectos: Proyectos = null;
  
  constructor(
    private proyectosS: ProyectosService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    private imageService: ImageService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe({
      next: data =>{
        this.proyectos = data;
      },
      error: err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectos.img = this.imageService.url
    this.proyectosS.update(id, this.proyectos).subscribe({
      next: data => {
        this.router.navigate(['']);
      },
      error: err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    });
  }

  uploadImage($event:any,){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event,name);
  }
}
