//import fetch from 'node-fetch'
const API = 'https://api.escuelajs.co/api/v1'

// Ahora no solo toma 
function postData(url, data) {
    // Ahora se le pasa como parámetro al fetch un objeto de configuración
    return fetch(url, {
        method: 'POST',
        mode: 'cors', // Indica que el origen es cruzado
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json' // Se le enviará un JSON
        },
        body: JSON.stringify(data) // Convierte el objeto o valor en una cadena de texto JSON
    }).then(response => response.json())
}

const data = {
    "title": "PlatziObjeto",
    "price": 770,
    "description": "PlatziDesc",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
.then(data => {
    console.log(data)
})