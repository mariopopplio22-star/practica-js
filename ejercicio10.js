//Objetos = JSON (Javascript Object Notation)
//Estructura que guarda datos utilizando {key: value}
let perfil = {
  apellidos: "Bautista Alanya",
  nombre: "Mario",
  edad: 100,
  telefono: ["929936037", "956779222", "987345192"],
  formacion: [
    {nivel: "Primario", nombre: "San José", anio:2015},
    {nivel: "Secundario", nombre: "JPB", anio:2020},
    {nivel: "Superior", nombre: "SENATI", anio:2025}
  ],
  habilidades: [
    {skill: "Base de datos", herramientas: ["MySQL", "Oracle", "SQLite"]},
    {skill: "Lenguajes de programación", herramientas: ["JavaScript", "PHP", "C#", "Python"]},
    {skill: "Sistemas operativos", herramientas: ["Windows", "Linux", "Android"]},
  ]
}
//Mostrar habilidades en programacion
console.log(perfil.habilidades[1].herramientas)

//¿Cúal es el nombre del centro de formación secundaria
console.log(perfil.formacion[1].nombre)

//¿Cuántos teléfonos tiene la persona?
console.log(perfil.telefono.length)

//Mostrar cada uno de los motores de Base de datos
const lista = perfil.habilidades[0].herramientas
lista.forEach(element => {
  console.log(element)
  
});