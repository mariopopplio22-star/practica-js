//Crear una funcion autoejecutable, que imprima cuantas horas, minutos y segundos
//faltan para terminar el dia

(function() {

let tiempoAhora = new Date();

let horaAhora = tiempoAhora.getHours();
let minutosAhora = tiempoAhora.getMinutes();
let segundosAhora = tiempoAhora.getSeconds();

let segundosTranscurridos = (horaAhora * 3600) + (minutosAhora * 60) + segundosAhora;
let segundosTotalDia = 86400;

let segundosSobrantes = segundosTotalDia - segundosTranscurridos;

let horasQueFaltan = Math.floor(segundosSobrantes / 3600);
let minutosQueFaltan = Math.floor((segundosSobrantes % 3600)/60);
let segundosQueFaltan = segundosSobrantes % 60;


console.log(`Faltan ${horasQueFaltan} horas, ${minutosQueFaltan} minutos y ${segundosQueFaltan} segundos para terminar el día.`);
})();

//Crear una funcion autoejecutable que solicite un numero (expresado en segundos) y nos
//devuelva un saludo, despues del tiempo indicado - setTimeOwt

(function(segundosEspera) {
    console.log(`Estamos programando el saludo... Espere porfavor ${segundosEspera} segundos.`);

    setTimeout(function() {
        console.log("¡Hola Bienvenid@!");
      }, segundosEspera * 1000);
})(5);
