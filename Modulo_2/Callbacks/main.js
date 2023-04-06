// Callback => Es una funcion pasada como parametro a otra funcion

// setTimeout => es una funcion que ya viene con javascript que me permite ejecutar una funcion luego de un tiempo que difinimos nosotros

// setInterval

const saludar = () => alert("Hola bienvenidas")

setTimeout(saludar, 2000)

setTimeout(() => {
    alert("Hola bienvenidas")
}, 2000)