( () =>{
    type Flast ={
        name: string;
        age: number;
        powers: string[];  
    }
    const flast = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
      };
     const {name, powers}= flast;
       
     const print =({name, ...resto}:Flast)=>{
               console.log(resto.age)
     }

     // destructuracion de arrays 
      const avengers:string[]= ['capitan a', 'ironman'];

      const [, iroman]= avengers;

     // ciclo For of
 type  partner={
     name: string,
     age: number
 }

 const lorena : partner ={
 name: 'lorena',
 age:28,
 };
 const leonardo : partner ={
    name: 'leonardo',
    age:28,
    };
 const partners: object[]= [ lorena, leonardo];
      
 for(const partner of partners){
     console.log(partner)
 }
 

 /// clases 

 


})();