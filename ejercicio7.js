const paises = [
  ["Estados Unidos", "Perú", "Argentina", "Chile"],
  ["Alemania", "Francia", "Noruega", "España"],
  ["Japón", "Corea del sur", "Palestina", "Arabia Saudita"],
  ["Cabo verde", "Marruecos", "Túnez", "Senegal"]
]

//Mostrar los paises de Asia (unicamente) utilizando foreach
paises[2].forEach(pais => {
  console.log(pais)
  
});

//Agregar 2 paises mas en la lista de america

paises[0].push("Bolivia")
paises[0].push("Ecuador")

console.log("-------------")

//Mostrar los paises de america
paises[0].forEach(pais => {
  console.log(pais)
  
});