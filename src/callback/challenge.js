// Importamos el objeto XMLHttpRequest que viene del paquete instalado xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Lo ponemos en mayúscula porque indica que es una constante (al igual que const, pero de manera más visual)
const API = 'https://api.escuelajs.co/api/v1' 

// Lo que está aquí a continuación es la forma antigua de cómo se hacía un fetch en JS
function fetchData(url, cb) {
    let xhr = new XMLHttpRequest()

    // Obtiene los recursos de la URL proporcionada
    xhr.open('GET', url, true)
    
    xhr.onreadystatechange = (event) => {
        // Referirse a la documentación de los callbacks en el Notion para los códigos de estado. Esto indica si está completado y OK
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(null, JSON.parse(xhr.responseText))
            } else {
                return cb(new Error(`Error ${url}`), null)
            }
        } 
    }
    xhr.send()
}

fetchData(`${API}/products`, (error1, data1) => {
    if (error1) return console.log(error1);
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if (error2) return console.log(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
            if (error3) return console.log(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        })
    })
})