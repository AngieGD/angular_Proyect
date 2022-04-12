import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { personaje } from '../Interfaces/dgz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregarperso',
  templateUrl: './agregarperso.component.html'
})
export class AgregarpersoComponent  {

  //@Input() personajes:personaje[]=[]

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }
  
  //@Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();
  constructor(private dbzService : DbzService){} //inyectar el contructor para acceder al servicio

  agregar(){
    
    
    if(this.nuevo.nombre.trim().length === 0 ){return;}
    //console.log(this.nuevo)
      this.dbzService.agregarPersonaje(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo);

    
    //this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre:'',
      poder: 0
    }
    


  }


}
