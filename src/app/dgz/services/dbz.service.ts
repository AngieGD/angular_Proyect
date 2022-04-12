import { Injectable } from "@angular/core";
import { personaje } from '../Interfaces/dgz.interfaces';

@Injectable()//decorador que lo hace diferente 
export class DbzService {

    private _personajes:personaje[] = [
        {
          nombre : "Goku",
          poder: 20000
        },
        {
          nombre: "N17",
          poder: 15000
        }
    
      ];
      
    
    /**
     * Método encargado de retornar los personajes
     */
    get personajes(): personaje[]{
      return [...this._personajes] //JavaScript envía todo por referencia, por eso ponemos los ... para indicar que es una copia
      //se pusieron los ... para romper la referencía 
    }

    constructor(){}

    agregarPersonaje(data:personaje){
      this._personajes.push(data);
     }




}