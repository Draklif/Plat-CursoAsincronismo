//import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

async function fetchData(url) {
    return (await fetch(url)).json()
}

// La diferencia acá con lo que se trabajó anteriormente en la parte de promesas, es que siempre se espera a que se obtenga un resultado para continuar, por lo cual, se trata como si se tuviese un .then
const asyncCall = async (url) => {
    try {
        const products = await fetchData(`${url}/products`)
        const product = await fetchData(`${url}/products/${products[0].id}`)
        const category = await fetchData(`${url}/categories/${product.category.id}`)

        console.log(products[0]);
        console.log(product.title);
        console.log(category.name);
    } catch (err) {
        console.log(err);
    }
}

asyncCall(API)