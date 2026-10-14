//Funcion 3:
//Crear una funcion que solicite dos arreglos numericos, debera
//retornar la suma de ambos arreglos, siempre que tengan el mismo numero
//de elementos, de lo contario, devolver array vacio []

function sumarNumeros1(array1=[], array2=[]){
    if(array1.length !== array2.length){
        return [];
    }

    let sumaArrays = []

    for (let i = 0; i < array1.length; i++){
        let sumaActual = array1[i] + array2[i];
        sumaArrays.push(sumaActual);
    }
    return sumaArrays;
}

console.log("Suma que coincide con su cantidad de elementos entre sus arreglos", sumarNumeros1([13, 14, 15], [90, 91, 92]));
console.log("Suma que No coincide con su cantidad de elementos entre sus arreglos", sumarNumeros1([11, 12, 19], [80, 81]));

//Funcion 4:
//Crear una funcion que solicite un numero positivo y retorne todos los divisores
//desde 1 hasta el numero que hayas indicado. El resultado se obtiene
//como arreglo. Ejemplo [1,2,11,22], ejemplo:40 [1,2,4,5,8,10,20,40]

function retornarDivisores(numeroo){
    let divisores = [];

    for (let i = 1; i <= numeroo; i++){
        if (numeroo % i === 0){
            divisores.push(i);
        }
    }
    return divisores;
}

console.log("Divisores de 34: ", retornarDivisores(34));
console.log("Divisores de 18: ", retornarDivisores(18));
console.log("Divisores de 108: ", retornarDivisores(108));