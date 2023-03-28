export class Actor{

    nombre: string;
    edad: number;
    nacionalidad: string;
    clip: string;
    vivo: boolean;
    imagen: string;
    id: number;


    constructor(id: number,nombre: string, edad: number, clip: string, nacionalidad: string, vivo: boolean, imagen: string){
        this.id= id;
        this.nombre= nombre;
        this.edad= edad;
        this.clip= clip;
        this.nacionalidad= nacionalidad;
        this.vivo= vivo;
        this.imagen= imagen;
    }
    
    setId(id:number){
        this.id= id;
    }


}