import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoPipe } from './pipe/alumno.pipe';
import { SafePipePipe } from 'src/app/safe-pipe.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    DetailsComponent,
    AlumnoPipe,
    SafePipePipe
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class AlumnoModule { }
