// Para correr este archivo se debe agregar el propio 'type':'module' en el package.json

import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

// Fetch() retorna una promesa directamente, por lo que no es necesario transformarlo a tal
function fetchData(url) {
    return fetch(url)
}

fetchData(`${API}/products`)
.then(response =>  response.json() )
.then(products => { console.log(products) })
.then(() => { console.log('Hola') })
.catch(error => console.log(error) )