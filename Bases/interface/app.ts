// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

interface Auto {
  encender:boolean,
  velocidadMaxima:number,
  acelear( ):void;
}

const batiMovil : Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Guazon {
  reir?: boolean,
  comer?:boolean,
  llorar?:boolean,
}


const guason :Guazon = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guazon ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface cityGotica {
  (ciudadanos:string[]): number;
}


const ciudadGotica:cityGotica  = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Person{
  nombre: string,
  edad: string,
  sexo: string,
  estadoCivil: string
  imprimirBio(): void 
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {

  constructor(
     public nombre: string,
     public edad: string,
     public sexo: string,
     public estadoCivil: string
 
    ){}
    
    imprimirBio() {
          console.log(this.nombre)
    }

}