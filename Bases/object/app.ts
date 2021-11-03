type movil = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros:number,
  disparar?: ()=> void
};

// Objetos
const batimovil: movil = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: movil = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type villano ={
  nombre:string,
  edad:number,
  mutante:boolean,
}

// Villanos debe de ser un arreglo de objetos personalizados
// es un arreglo de villano 
const villanos: villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type charles = {
  poder:string,
  estatura: number,
};
type apocalipsis = {
  lider:boolean,
  miembros: string[],
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:charles| apocalipsis;

mystique = {
  poder:"psiquico",
  estatura: 1.55
};
mystique ={
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
};

