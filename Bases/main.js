"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let power;
    (function (power) {
        power[power["acuaman"] = 0] = "acuaman";
        power[power["barman"] = 1] = "barman";
        power[power["flash"] = 5] = "flash";
        power[power["superman"] = 100] = "superman";
    })(power || (power = {}));
    const fuerzaFlash = power.flash;
    const fuerzaSuperman = power.superman;
    const fuerzaBatman = power.barman;
    const fuerzaAcuaman = power.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const flast = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
    };
    const { name, powers } = flast;
    const print = (_a) => {
        var { name } = _a, resto = __rest(_a, ["name"]);
        console.log(resto.age);
    };
    const avengers = ['capitan a', 'ironman'];
    const [, iroman] = avengers;
    const lorena = {
        name: 'lorena',
        age: 28,
    };
    const leonardo = {
        name: 'leonardo',
        age: 28,
    };
    const partners = [lorena, leonardo];
    for (const partner of partners) {
        console.log(partner);
    }
})();
(() => {
    class Hero {
        constructor(name, team, purealName) {
            this.name = name;
            this.team = team;
            this.purealName = purealName;
        }
        bio() {
            return ` ${this.name} (${this.team})`;
        }
    }
    Hero.avgAge = 35;
    const antman = new Hero('Antman', 'Capitan');
    console.log(antman);
    class Superman extends Hero {
        constructor(name, team, purealName, human) {
            super(name, team);
            this.human = human;
        }
        get fullName2() {
            return `${this.purealName}`;
        }
        set fullName(name) {
            this.purealName = name;
        }
    }
    const spiderman = new Superman('leo', 'nerd');
    spiderman.fullName = 'lorena';
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    const name = "lorena ";
    function returnName() {
        return name;
    }
    const fullName = (firstName, lastName) => {
        return ` ${firstName} ${lastName}`;
    };
    const name2 = fullName('lorena', 'parra');
    const fullName2 = (firstName, lastName) => {
        return ` ${firstName} ${lastName || ''}`;
    };
    const name3 = fullName2('lorena');
    const fullName3 = (firstName, lastName, upper = false) => {
        if (upper) {
            return ` ${firstName} ${lastName || ''}`.toUpperCase();
        }
        return ` ${firstName} ${lastName || ''}`;
    };
    const fullName6 = (firstName, ...restArgs) => {
        return ` ${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName6('Clark', 'Jpsept');
    console.log({ superman });
    const add = (a, b) => a + b;
    const greet = (name) => ` hola ${name}`;
    const saveTheWorld = () => ` el mundo se salvo`;
    let myFunction;
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batiMovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(this.nombre);
    }
}
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
})(Validations || (Validations = {}));
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
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
let mystique;
mystique = {
    poder: "psiquico",
    estatura: 1.55
};
mystique = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
(() => {
    const flast = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
    };
    const flast2 = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
    };
    let superman = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    const myCustomVariable = 'lorena';
})();
(() => {
    let hero = 123;
    hero = "string";
    console.log(hero.charAt(0));
    hero = "string";
    console.log(hero.toFixed(2));
})();
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc("Auxilio");
})();
(() => {
    const isHeroe = true;
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
})();
(() => {
    const person = ["lorena", 28];
})();
(function () {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
})();
//# sourceMappingURL=main.js.map