// tsc main.ts - compila o arquivo typescript
// Os navegadores não suportam o typescript, por isso precisa de um transpilador
var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
// Site que contém a diferença entre a es6 e anteriores http://es6-features.org/#Constants
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 2015
// Babel transpila o ES 6 para vanilla
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// Decorators adiciona novas funcionalidades a sua função. Ela passou uns artigos falando sobre.
var n1 = 'dalksd';
n1 = 4;
