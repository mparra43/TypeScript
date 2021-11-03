( () =>{
    
    const name : string = "lorena "
// funciones 
function returnName ():string{
 return name;
}
// argumentos obligatorios 
const fullName = ( firstName:string , lastName:string):string =>{
    return ` ${firstName} ${lastName}`;
};

const name2  = fullName('lorena','parra')

// argumentos opcionales 
const fullName2 =( firstName:string , lastName?:string):string =>{
    return ` ${firstName} ${lastName || ''}`;
}

const name3  = fullName2('lorena',)

// argumentos por defecto 
const fullName3 = ( firstName:string , lastName?:string , upper:boolean=false):string =>{
   
    if(upper){
        return ` ${firstName} ${lastName || ''}`.toUpperCase();
    }
    return ` ${firstName} ${lastName || ''}`;
}

// argumentos adicionales 
const fullName6 = ( firstName:string , ...restArgs:string[]):string =>{
    return ` ${firstName} ${restArgs.join(' ')}`;
}

const superman = fullName6('Clark','Jpsept')

console.log({superman})

const add = ( a:number , b: number):number => a+b;

const greet = ( name: string):string => ` hola ${name}`;

const saveTheWorld = ( ):string => ` el mundo se salvo`;


let myFunction :(y:number, z:number)=>number

})();