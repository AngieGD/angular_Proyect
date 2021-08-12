import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman' , 'Iroman' , 'Bruja' , 'Viuda'];
  heroeBorrado1:string = '';

  borrarHeroe():void{
    this.heroeBorrado1= this.heroes.shift() || '';  

  }

}
