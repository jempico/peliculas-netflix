import { Component } from '@angular/core';
import { ActoresService } from '../actores.service';
import { Actor } from '../models/actor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})


export class BuscadorComponent {


  desplegable: boolean;
  nombreActor: string;
  edadMinima: number;
  edadMaxima: number;
  nacionalidad: string;
  write: boolean;
  actores: Actor[];

  constructor(private actoresService: ActoresService){
    this.desplegable= false;
    this.nombreActor= "";
    this.edadMinima= 0;
    this.edadMaxima= 150;
    this.nacionalidad= "";
    this.write= false;
    this.actores= actoresService.actores;
  }

  changeDesplegable(){
    if(this.desplegable){
      this.desplegable= false;
    }
    else{
      this.desplegable= true;
    }
  }

  onWrite(){
    this.write= true;
  }

}
