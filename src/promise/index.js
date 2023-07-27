const cows = 15

// Hacemos una promesa que se resuelve si hay más de 15 vacas y se rechaza en cualquier otro caso
const countCows = new Promise((resolve, reject) => {
    if (cows > 15) {
        resolve(`There are ${cows} cows at the farm!`)
    } else {
        reject(`We have not enough cows!`)
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('End');
})