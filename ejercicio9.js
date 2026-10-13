const edades= ["58", "25", "19", "35", "33", "32", "26", "24", "52", "23", "55", "45", "20", "19", "23"]

//Edad mas alta
let mayor = 0, menor = edades[0], promedio = 0


edades.forEach(edad => {
  if(edad > mayor) mayor = edad
  if(edad < menor) menor = edad
  promedio += edad
});

promedio = (promedio / edades.length).toFixed(2)

console.log(edades.length)

console.log("Total de edades: ", edades.length)
console.log("La mayor edad es: ", mayor)
console.log("La menor edad es: ", menor)
console.log("El promedio es: ", promedio)