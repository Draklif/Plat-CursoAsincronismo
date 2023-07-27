const API = 'https://api.escuelajs.co/api/v1'

// El pequeño cambio se agrega acá para que se transforme directamente todo lo recibido en la petición a formato JSON
function fetchData(url) {
    return fetch(url).then(response => response.json())
}

// La siguiente forma encadena los fetchData() de una forma que se puedan usar sus respuestas de manera sucesiva
fetchData(`${API}/products`)
.then(products => {
    console.info(products[0]);
    return fetchData(`${API}/products/${products[0].id}`)
})
.then(product => {
    console.info(product.title);
    return fetchData(`${API}/categories/${product?.category?.id}`)
})
.then(category => {
    console.info(category.name);
})
.catch(error => {
    console.error(error);
})
.finally(() => {
    console.log('EOF');
})