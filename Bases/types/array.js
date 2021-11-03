"use strict";
(function () {
    // es una funcion que no tiene un punto alcansable y retorna un error 
    var abc = function (message) {
        throw new Error(message);
    };
    abc("Auxilio");
})();
