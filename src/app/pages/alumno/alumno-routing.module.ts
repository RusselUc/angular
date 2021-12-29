import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'alumno', redirectTo: 'alumno/index', pathMatch: 'full'},
  { path: 'alumno/index', component: IndexComponent },
  { path: 'alumno/create', component: CreateComponent },
  { path: 'alumno/edit/:idAlumno', component: EditComponent },
  { path: 'alumno/details/:idAlumno', component: DetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
