//¿Que es una funcion?
//Conjunto de instrucciones que se pueden reutilizar
//Acepta parametros de salida y puede devolver algun valor (opcional)
function saludar(){
  console.log("Hola")
}

function despedirse(){
  return "adios"
}

saludar()

function verificarNota(calificacion){
  //aprobado - desaprobado . operador ternario (condicion simple)
  return(calificacion >= 10.5? "aprobado" : "desaprobado")
  
}

//La funcion retorna el neto, incrementando +150 por cada hijo
function calcularNeto(sueldoBasico, numeroHijos){
  return sueldoBasico + (numeroHijos * 150)

}

// Si tiene 65 o mas "Jubilacion activa", contario "fase laboral"
function verificarJubilacion(edad){
  return(edad >= 65? "Jubilación activa" : "fase laboral")

}

//esta funcion reciba una lista de sueldos (no sabemos la cantidad de elementos)
//tambien se debe indicar si obtendremos el mayor
//la funcion retorna el mayor o menor sueldo dependiendo su configuracion
function analizarSueldos(listaSueldos = [], obtenerMayor = true){
  let mayor = 0
  
  if(obtenerMayor){
  listaSueldos.forEach(sueldo => {
    if (sueldo > resultado) resultado = sueldo
    });
  } else {
    resultado = listaSueldos[0]
    listaSueldos.forEach(sueldo => {
      if(sueldo < resultado) resultado = sueldo
      
    });
  }
  return resultado
}

//recibe un objeto, retorn un arreglo
function obtenerTelefono(objeto = {}){
  return objeto.telefonos
}

console.log(despedirse())
console.log(verificarNota(16))
console.log(calcularNeto(3500, 2))
console.log(verificarJubilacion(79))
console.log(analizarSueldos([3500, 1800, 4100, 2200], false))

const perfil = {
  nombres: "Luis Mateo",
  dni: "41018099",
  telefonos: ["999999998", "123456789"]
}
