"use strict";
(function () {
    var flast = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
    };
    // nombre de objeto : { tipado de las propiedades }
    var flast2 = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
    };
    var superman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
        getName: function () {
            return this.name;
        }
    };
    // union types 
    var myCustomVariable = 'lorena';
})();
