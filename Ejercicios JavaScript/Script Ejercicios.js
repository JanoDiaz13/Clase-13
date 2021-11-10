let log = console.log;

// Ejercicio 1

let cadena = 'javascript';

function primerletraMayus(str) {
    let strmayus;
    strmayus = str.charAt(0).toUpperCase() + str.slice(1);
    return strmayus;
}

log(primerletraMayus(cadena));

// Ejercicio 2

let string = 'javascript';

function ultimaletraMayus(str) {
    let strmayus;
    strmayus = str.slice(-10, -1) + str.charAt(9).toUpperCase();
    return strmayus;
}


log(ultimaletraMayus(string));

// Ejercicio 3

let arr = ["foo", "bar", "baz", "qux", "origin"]

function buscarElemento(array) {
    let elemento;
    elemento = array[array.indexOf("baz")];

    return (elemento);

}

log(buscarElemento(arr));

// Ejercicio 4

let arr1 = ["foo", "bar", "baz", "qux", "origin"]

function vaciarArray(arr) {
    arr.splice(0, arr.length);
    return arr
}

log(vaciarArray(arr1))

// Ejercicio 5

let str = "origin";


function eliminarVocales(string) {

    let string2;

    string2 = string.replace(/[aeiou]/g, '');


    return string2;
}

log(eliminarVocales(str));