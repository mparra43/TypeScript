( () =>{
 // class basic 

 class Hero {

    // propiedades privades solo son accesibles dentro de la clase 
     // las propiedades staticas solo se pueden acceder desde la clase 
     static avgAge : number =35

     constructor(
         private name: string, 
         private team: string,  
         public purealName?:string 
         
         ){}
         // metodos 
         // si es posible accedeer en la clase on en la extension de la clase 
        protected bio(){
             return` ${this.name} (${ this.team})`
         }
         
     }
 
 const antman : Hero = new Hero('Antman', 'Capitan');
  console.log(antman)


  //extensiones
  class Superman  extends Hero{
      
    constructor(
         name: string, 
         team: string,  
         purealName?:string,
         public human?: boolean
    ){
        super(name, team)
    }

     // metodos get  siempre debe retonar algo
     get fullName2(){
           return  `${this.purealName}`;
     }
       // metodo set no retorna nada se utiliza para establecer valores a variables
       set fullName ( name:string){
           this.purealName= name;
       }

  }


  const spiderman = new Superman('leo','nerd')

       spiderman.fullName= 'lorena';

       // clases abstractas, sirven como cascaron de las clase que se extienden o de typos de parametos de funciones  

       abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo a salvo!';
        }

    }

    class Villian extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }


    const wolverine = new Xmen('Wolverine','Logan');
    const magneto = new Villian('Magneto','Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());
    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    // printName( magneto );

       

})();