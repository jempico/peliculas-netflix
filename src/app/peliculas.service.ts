import { Injectable } from '@angular/core';
import { Pelicula } from './models/pelicula';
import { Actor } from './models/actor';
import { ActoresService } from './actores.service';
import { Personaje } from './models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  
  loQueElVientoSeLlevo: Pelicula;
  elPadrino: Pelicula;
  

  constructor(private actores: ActoresService) { 

    this.loQueElVientoSeLlevo= new Pelicula("Lo que el viento se llevo", 238, 1939);
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.clarkGabel, "Rhett Butler ", "visitante de Charleston"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.leslieHoward, "Ashley Wilkes", "hijo"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.vivienLeigh, "Scarlett O'Hara", "hija"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.oliviadehavillan, "Melanie Hamilton", "prima"));
    
    this.elPadrino= new Pelicula("El padrino", 177, 1972);
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.marlonBrando, "Don Vito Corleone", "Padrino"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.alPacino, "Michael Corleone", "Hijo menor del padrino"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.robertDubball, "Thomas Hagen", "Consejero"));
    this.loQueElVientoSeLlevo.addPersonaje( new Personaje(actores.jamesCaan, "Santino Corleone", "Hijo mayor del padrino"));
    
    
  }
}