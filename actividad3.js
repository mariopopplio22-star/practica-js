//Funcion 1:
//Crear una funcion que reciba un arreglo de numeros y retorne como resultado
//un objeto indicandonos cuantos valores son pares e impares


function contar(numeros = []){
  let par = 0
  let impar = 0

  numeros.forEach(numero => {
    if(numero % 2 == 0){
      par ++;
    } else{
      impar ++
    }
  });

  return {
    totalPares: par,
    totalImpares: impar
  };
}

//Test, demostracion, consola.log  

const numeros = [10, 14, 16, 108, 97, 99, 101, 206];
console.log("Conteo: ", contar(numeros));
//Funcion 2:
//escribir una funcion que retorne true o false dependiendo si el valor de entrada
//corresponde a un número  capicúa, 121, 444, 3223. solo permite analizar valores
//de hasta 5 digitos (99999)

function verificarCapicua(numero){
  if (numero < 0 || numero> 99999){
    return "Error: verifique si el número que ingresó esta entre 0 y 99999"
  }

  let numeroPrincipal = numero.toString();

  let numeroInvertido = numeroPrincipal.split("").reverse().join("");

  return numeroPrincipal == numeroInvertido;
}

//Test, demostracion, consola.log  

console.log("¿Es capicúa?: ", verificarCapicua(121));
console.log("¿Es capicúa?: ", verificarCapicua(476));
console.log("¿Es capicúa?: ", verificarCapicua(222));
console.log("¿Es capicúa?: ", verificarCapicua(122));