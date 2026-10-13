//Formas de crear una funcion
//F1 por declaracion
function hacerAlgo(){
  return "resultado"
}

//Por expresión
const saludo = function saludar(){
  return "Hola que tal"
}

console.log(saludo())

const suma = function sumar(num1, num2){
  return num1 + num2
}

console.log(suma(17, 20))

//Tipos de funciones: ANÓNIMA (funciones por expresion)
const mensaje = function(){
  return "Ingeniería de software"
}

console.log(mensaje)
console.log(mensaje());

//Para aplicar este tipo de funciones se requiere ; antes del llamado
//AUTOEJECUTABLES (se declaran y se ejecutan al mismo tiempo). No olvidar ;
(function(){
    console.log("hola que tal");
})();

(
  function (nombre = ''){
    console.log('Bienvenida', nombre);
  }
)('Katherine');

//Crea una funcion autoejecutable que calcule el promedio de 3 notas
(
  function (nota1, nota2, nota3){
    console.log((nota1 + nota2 + nota3) / 3)
  }
)(14, 12, 20);