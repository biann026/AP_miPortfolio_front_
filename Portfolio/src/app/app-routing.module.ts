import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/new-educacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewSkillComponent } from './components/hardsoftskills/new-skill.component';
import { EditSkillComponent } from './components/hardsoftskills/edit-skill.component';
import { EditAcercaDeComponent } from './components/sobre-mi/edit-acerca-de.component';
import { EditProyectsComponent } from './components/proyects/edit-proyects.component';
import { NewProyectosComponent } from './components/proyects/new-proyectos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'newskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editacercade/:id', component: EditAcercaDeComponent },
  { path: 'editproyects/:id', component: EditProyectsComponent},
  { path: 'newproyect', component: NewProyectosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
