var variavel = 'Minha variável';

function minhaFunc(x, y) {
    return x + y;
}

// ES 6 ou ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3, 4, 5];

numeros.map(function (valor) {
    return valor * 2;
});

numeros.map(valor => valor * 2); // ES 2015

class Matematica {
    soma (x, y) {
        return x + y;
    }
}

var n1 = 'afaf';
n1 = 4;