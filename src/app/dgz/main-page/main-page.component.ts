import { Component } from '@angular/core';
import { personaje } from '../Interfaces/dgz.interfaces';
import { DbzService } from '../services/dbz.service';



@Component({
  
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})

export class MainPageComponent  {


  //personajes:personaje[] = [];

  nuevo:personaje ={
    nombre: "Maestro Roshi",
    poder: 20000
  }

  get personajes(): personaje[] {
    return this.dbzservice.personajes;

  }


  constructor(private dbzservice: DbzService){}

}
