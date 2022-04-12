import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';





@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent,
   
        
    ],
    exports: [ //Aqui va lo que quiero que sea visible
       ListadoComponent,
       
    ],
    imports: [
        CommonModule  //ofrece directivas de ngfor , ng if 
    ]

})
export class HeroesModule {

}
