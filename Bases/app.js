"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
