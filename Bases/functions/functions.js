"use strict";
(function () {
    var name = "lorena ";
    // funciones 
    function returnName() {
        return name;
    }
    // argumentos obligatorios 
    var fullName = function (firstName, lastName) {
        return " " + firstName + " " + lastName;
    };
    var name2 = fullName('lorena', 'parra');
    // argumentos opcionales 
    var fullName2 = function (firstName, lastName) {
        return " " + firstName + " " + (lastName || '');
    };
    var name3 = fullName2('lorena');
    // argumentos por defecto 
    var fullName3 = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (" " + firstName + " " + (lastName || '')).toUpperCase();
        }
        return " " + firstName + " " + (lastName || '');
    };
    // argumentos adicionales 
    var fullName6 = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return " " + firstName + " " + restArgs.join(' ');
    };
    var superman = fullName6('Clark', 'Jpsept');
    console.log({ superman: superman });
    var add = function (a, b) { return a + b; };
    var greet = function (name) { return " hola " + name; };
    var saveTheWorld = function () { return " el mundo se salvo"; };
    var myFunction;
})();
