//Crear un objeto que contenga informacion computador
//cadenas, valores enteros, valores decimales, logicos = true o false, arreglos, nuevos objetos
let computadora = {
    marca: "HP",
    modelo: "ProBook",
    sistemaOperativo: "Linux",

    memoriaRam: 16,
    almacenamientoGB: 256,

    precioCompra: 1999.00,

    tieneTeclado: true,
    tieneMouse: true,
    esTactil: false,

    puertos: ["USB-A", "USB-C", "HDMI", "Jack 3.5mm"],

    usuarios: [
        {nombre: "Mario", contraseña: "marioBA684", correo: "mariopopplio22@gmail.com"},
        {nombre: "Dany", contraseña: "DabyAlan*45", correo: "dannyig@gmail.com"},
        {nombre: "Alex", contraseña: "cabelleroalex", correo: "alexayala29@gmail.com"}
    ]
}

console.log("Marca y Modelo:", computadora.marca, computadora.modelo);
console.log("Memoria RAM:", computadora.memoriaRam, "GB");
console.log("¿Tiene teclado retroiluminado?", computadora.tieneTeclado);
