
(()=>{
    let hero : any = 123;
//1. casteo de las varibles 
 hero ="string"
 console.log((hero as string).charAt(0));
   // as string lo trata como un string 

   //2. casteo de las varibles 
 hero ="string"
 console.log((<number>hero).toFixed(2));
   // as string lo trata como un numero
   })()