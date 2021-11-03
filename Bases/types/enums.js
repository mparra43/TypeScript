"use strict";
(function () {
    // enumeraciones 
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    /// controlador de enumeraciones, medium va ha tomar el valor siguiente del asignado en min 
})();
