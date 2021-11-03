( () =>{
    const flast = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
      };
      // nombre de objeto : { tipado de las propiedades }
      const flast2: {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
      } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
      };
      
      // tipo de objetos personalizado
      
      type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
      };
      
      let superman: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
        getName(){
          return this.name 
        }
      };
      
      // union types 
      
      const myCustomVariable: string | number | Hero ='lorena';
      

})();