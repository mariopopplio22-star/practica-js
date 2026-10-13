let frutas = [
  "Plátano",
  "manzana",
  "naranja",
  "fresa",
  "uva",
  "sandía",
  "limón",
  "mango",
  "piña",
  "melocotón",
  "nípero",
];

for (let i = frutas.length; i >= 0; i--) {
  console.log(frutas[i]);
}

//Verificar si existe un elemento = "fresa"
let frutaBuscada = "lima"
const resultado = frutas.find(fruta => fruta = "frutaBuscada")
const encontrado = frutas.includes("frutaBuscada")
console.log(resultado, encontrado)
  

