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






}
