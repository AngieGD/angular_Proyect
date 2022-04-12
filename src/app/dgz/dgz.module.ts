import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarpersoComponent } from './agregarperso/agregarperso.component';
import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarpersoComponent
  ],
  imports: [
    CommonModule,
    FormsModule //para los formularios 
  ],
  exports:[
    MainPageComponent
  ],
  providers: [
    DbzService

  ]

})
export class DgzModule { }
