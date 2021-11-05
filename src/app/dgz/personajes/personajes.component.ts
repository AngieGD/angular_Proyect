import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../Interfaces/dgz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  @Input() personajes:personaje[]=[]
  

}
