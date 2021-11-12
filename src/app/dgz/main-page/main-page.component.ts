import { Component } from '@angular/core';
import { personaje } from '../Interfaces/dgz.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
  
})
export class MainPageComponent  {


  personajes:personaje[] = [
    {
      nombre : "Goku",
      poder: 20000
    },
    {
      nombre: "N17",
      poder: 15000
    }

  ];

  nuevo:personaje ={
    nombre: "Maestro Roshi",
    poder: 20000
  }

  

  agregarNuevoPersonaje( argumento:personaje) {
    this.personajes.push( argumento );
  }




}
