"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var power;
    (function (power) {
        power[power["acuaman"] = 0] = "acuaman";
        power[power["barman"] = 1] = "barman";
        power[power["flash"] = 5] = "flash";
        power[power["superman"] = 100] = "superman";
    })(power || (power = {}));
    var fuerzaFlash = power.flash;
    var fuerzaSuperman = power.superman;
    var fuerzaBatman = power.barman;
    var fuerzaAcuaman = power.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var name = "lorena ";
    function returnName() {
        return name;
    }
    var fullName = function (firstName, lastName) {
        return " " + firstName + " " + lastName;
    };
    var name2 = fullName('lorena', 'parra');
    var fullName2 = function (firstName, lastName) {
        return " " + firstName + " " + (lastName || '');
    };
    var name3 = fullName2('lorena');
    var fullName3 = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return (" " + firstName + " " + (lastName || '')).toUpperCase();
        }
        return " " + firstName + " " + (lastName || '');
    };
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
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var mystique;
mystique = {
    poder: "psiquico",
    estatura: 1.55
};
mystique = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
(function () {
    var flast = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
    };
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
    var myCustomVariable = 'lorena';
})();
(function () {
    var hero = 123;
    hero = "string";
    console.log(hero.charAt(0));
    hero = "string";
    console.log(hero.toFixed(2));
})();
(function () {
    var abc = function (message) {
        throw new Error(message);
    };
    abc("Auxilio");
})();
(function () {
    var isHeroe = true;
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
})();
(function () {
    var person = ["lorena", 28];
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return;
    };
})();
//# sourceMappingURL=main.js.map