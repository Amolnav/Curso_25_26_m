// Crear un juego de 1 dado que utilizando una funcion llamada tirarDado permita tirar un dado de 6 caras con valores 1-6
// Ademas crear una funcion llamada simular que le pase por parametro el numero de tiradas y me diga que numero se ha repetido mas veces


// Variables

//Funciones
function tirarDado (){
    let num = Math.floor((Math.random()* 6) + 1);
    return (num);
}

function simular(a){
    let veces = [0,0,0,0,0,0];
    for (let i = 0; i < a; i ++) {
        num = (tirarDado())-1;
        veces[num]++;
    }
    let max = Math.max(...veces);
    let index = veces.indexOf(max);
    console.log(`El número que más se ha repetido fue: ${index + 1}`);
}
// Inicializar Aplicación
simular(20)