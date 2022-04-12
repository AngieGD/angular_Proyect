import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../Interfaces/dgz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  //@Input() personaje:personaje[]=[];

  get personajes():personaje[]{
    return this.dbzservice.personajes;
    console.log(this.dbzservice.personajes)
  }

  constructor(private dbzservice: DbzService){  }

}
