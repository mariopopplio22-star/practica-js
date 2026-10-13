//Funcion 1:
//Crear una funcion que reciba un arreglo de numeros y retorne como resultado
//un objeto indicandonos cuantos valores son pares e impares

function retornarNumero(numero){
  return(numero % 2 == 0 ? "Par" : "Impar")

}
console.log(retornarNumero(100))
//Test, demostracion, consola.log  

//Funcion 2:
//escribir una funcion que retorne true o false dependiendo si el valor de entrada
//corresponde a un número  capicúa, 121, 444, 3223. solo permite analizar valores
//de hasta 5 digitos (99999)