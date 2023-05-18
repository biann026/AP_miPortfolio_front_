import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/service/image.service';
import { PersonaService } from 'src/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit{
  persona: persona = null;
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService, private router: Router, private imageService: ImageService){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe({
      next: data =>{
        this.persona = data;
      },
      error: err =>{
        alert("Ha ocurrido un error al guardar cambios");
        this.router.navigate(['']);
      }
    });
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url
    this.personaService.update(id, this.persona).subscribe({
      next: data => {
        this.router.navigate(['']);
      },
      error: err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    });
  }

  uploadImage($event:any,){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_" + id;
    this.imageService.uploadImage($event,name);
  }
}
