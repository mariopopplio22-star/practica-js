const alimentos = [
  ["Manzana", "Pera", "Mango", "Sandía", "Melón"],
  ["Zanahoria", "Arbejas", "Zapallo"],
  ["Pollo", "Pescado"],
  ["Trigo", "Arroz", "Cereal", "Avena", "Maíz", "Pan"]
]

//¿Cúantos elementos tiene la matriz
console.log("Total elementos matriz:", alimentos.length)

//¿Cual es el array de la matriz que tiene mas datos
let mayor = 0
alimentos.forEach(categoriaAlimentos => {
  if(categoriaAlimentos.length > mayor){
    mayor = categoriaAlimentos.length
  }
  
});
console.log("El array mas grande contiene: ", mayor)

//¿Cual es el array de la matriz que tiene menos datos
let menor = alimentos[0].length
alimentos.forEach(categoriaAlimentos => {
  if(categoriaAlimentos.length < menor){
    menor = categoriaAlimentos.length
  }
  
});
console.log("El array más pequeño contiene: ", menor)

//Cuantos elementos en total tiene la matriz
let sumatoria = 0
alimentos.forEach(categoriaAlimentos => {
  sumatoria += categoriaAlimentos.length
});
console.log("En total tenemos: ", sumatoria, "alimentos")
