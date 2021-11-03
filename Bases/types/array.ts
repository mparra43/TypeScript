(()=>{

// es una funcion que no tiene un punto alcansable y retorna un error 
    const abc = (message: string): never =>{
        throw new Error(message)
    }
    abc("Auxilio")

   })()