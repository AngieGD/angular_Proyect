import { Component, Input, OnInit } from '@angular/core';
import { personaje } from '../Interfaces/dgz.interfaces';

@Component({
  selector: 'app-agregarperso',
  templateUrl: './agregarperso.component.html'
})
export class AgregarpersoComponent  {

  @Input() personajes:personaje[]=[]


  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    console.log(this.nuevo)
    if(this.nuevo.nombre.trim().length === 0 ){return;}
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre:'',
      poder: 0
    }
    


  }


}
