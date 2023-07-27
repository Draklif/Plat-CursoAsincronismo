// Se define la función que se va a ejecutar de manera asíncrona
const fnAsyncDef = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => {
            resolve('Async')
        }, 2000) 
        : reject(new Error('Error!'))
    })
}

// Se define la función asíncrona que va a llamar la lógica definida anteriormente
const fnAsyncCall = async () => {
    // Espera a la ejecución de la función definida anteriormente
    console.log(await fnAsyncDef());
    console.log('Hello');
}

console.log('Before'); // Se imprimirá primero
fnAsyncCall() // Llamará la ejecución, pero se mostrará su resultado al final
console.log('After'); // Se imprimirá de segundas