(() => {

   // las interfaces s e pueden anidar a una principal en este caso 
   // la princial es cliente y sub nivel es dirreccion

    interface Client {
        name: string;
        age?: number;
        address: Address;
        // este es un metodo de una interface 
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    /// clases implementando implementar interface

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ):string;
    }

    interface Human {
        age: number;
    
    }

    class Mutant implements Xmen, Human {
        
        constructor(
            public age: number,
            public name: string,
            public realName: string,
            
            ){}
        
        mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
        
    }

    // inetrface en funciones 

    interface addTwoNumbers {
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumbers;


    addNumbersFunction = (a: number, b: number) => {
        return 10;
    }

})()