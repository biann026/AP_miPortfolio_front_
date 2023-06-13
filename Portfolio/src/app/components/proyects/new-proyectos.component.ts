import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/service/image.service';
import { ProyectosService } from 'src/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  img: string;

  constructor(private proyectosS: ProyectosService, private router: Router, private activatedRouter: ActivatedRoute, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombreP, this.descripcionP, this.img);
    this.proyectosS.save(proyectos).subscribe({
      next: data =>{
        alert("Educacion añadida correctamente");
        this.router.navigate(['']);
      }, 
      error: err =>{
        alert("No se pudo añadir");
        this.router.navigate(['']);
      }
    })
  }

  uploadImage($event:any,){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event,name);
  }
}