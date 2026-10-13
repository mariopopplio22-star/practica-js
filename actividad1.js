//Construir un objeto con los datos de una película
const peliculas = {
  titulo: "Iron man",
  anio: 2008,
  idiomas: ["Inglés,", "Español", "Japonés", "Francés", "Portugues"],
  duracionMin: 160,
  genero: ["Superhéroes", "Ciencia ficción"],
  preseupuesto: 140000000,
  recaudacion: 585796247,
  elenco: [
    {nombre: "Robert Downey Jr.", personaje: "Tony Stark", rol: "Protagonista"},
    {nombre: "Gwyneth Paltrow.", personaje: "Pepper Potts", rol: "Personaje secundario"},
    {nombre: "Terrence Howard.", personaje: "James Rhodes", rol: "Personaje secundario"},
    {nombre: "Jeff Bridges.", personaje: "Obadiah Stane", rol: "Antagonista"},
    
  ],
  sinopsis: "Se trata de un multimillonario llamado Tony Stark que se ve obligado a construir un traje metálico para escapar de una cueva",
  direccion: "Jon Favreau",
  escritores: ["Mark Fergus", "Hawk Ostby", "Art Marcum", "Matt Holloway"]
}

console.log("El nombre de la película es: ", peliculas.titulo);
console.log("El director es: ", peliculas.direccion);
console.log("Su presupuesto fue: ", peliculas.preseupuesto);
console.log("Logró recaudar: ", peliculas.recaudacion);
