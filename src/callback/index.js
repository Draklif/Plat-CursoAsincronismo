// Se definen las funciones que se pueden ejecutar
function sum(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mul(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    return num1 / num2
}

// Se define la función que recibe los números y la función callback
function calculate(num1, num2, cb) {
    return cb(num1, num2)
}

// Se llama la función de calculo dentro de un clg, enviándole 2 valores y la función sum() como callback
// NO se le envian los parámetros a esta función ni se le ponen los paréntesis porque no se está invocando, solo se envía
console.log(calculate(10, 15, sum)) // Imprime 25 (10 + 15)

// Lo mismo pero definiendo la función como flecha
console.log(calculate(10, 15, (num1, num2) => {
    return num1 + num2
})) // Imprime 25 (10 + 15)

// Más ejemplos
console.log(calculate(10, 5, sub)) // Imprime 5 (10 - 5)
console.log(calculate(10, 5, mul)) // Imprime 50 (10 * 5)
console.log(calculate(10, 5, div)) // Imprime 2 (10 / 5)

// Se define una función de saludo
function greeting(name) {
    console.log(`Hola ${name}`);
}

// La función setTimeout recibe como parámetro una función callback y un tiempo. Adicionalmente, se le pueden enviar los parámetros que debe tomar la función callback
setTimeout(greeting, 2000, 'Jose');