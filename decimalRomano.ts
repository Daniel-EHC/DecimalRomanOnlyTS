/*
****************************************** DANIEL HERNANDEZ **********************************************************************

Convertir un numero de Decimal a Romano 

1. Se introduce un numero decimal
    1.1 ROMAN no puede convertir números negativos o el número cero en números romanos, , ni tampoco los números mayores que 3.999.
2. Se analiza en la tabla el valor correspondiente de cada unidad en ROMAN
    2.1 Los números romanos I, X, C y M pueden repetirse hasta tres veces a la hora de escribir un número romano compuesto.
    2.2 Los números romanos V, L y D no pueden repetirse nunca.
    2.3 Si un número romano compuesto tiene un número a la derecha menor que el de la izquierda entonces se suman ambos.
    2.4 Si un número romano compuesto tiene un número a la derecha mayor que el de la izquierda y éste es un I, X o C, entonces se resta el de la izquierda al derecha.
    2.5 Si un número romano tiene sobre él una raya, entonces su valor se multiplica por mil.
*/

const decimal = 1945;
let counter = (decimal.toString().length);
let millar = Math.trunc((decimal/1000)%10);
let centena = Math.trunc((decimal/100)%10);
let decena = Math.trunc((decimal/10)%10);
let unidad = Math.trunc((decimal/1)%10);

let resultado = "";



while(counter > 0){


    switch (counter) {
        case 1: {
            calculaUnidad(unidad);
            break;
        }
        
        case 2:{
            calculaDecena(decena);
            break;
        }
    
        case 3:{
            calculaCentena(centena);
            break;
        }
        
        case 4: {
            calculaMillar(millar);
            break;
        }
        
        default: {
            console.log("No se puede calcular este numero");
            break;
        }
    }

    counter--;
}


console.log("El " + decimal + " en ROMANO es: " + resultado);

function calculaMillar (numero:number){

   for (let i = 0; i < numero; i++ ){
    resultado += "M";
   }
    
}

function calculaCentena (numero:number){
    
    switch (numero) {
        case 1: {
            resultado += "C";
            break;
        }
        case 2: {
            resultado += "CC";
            break;
        }
        case 3: {
            resultado += "CCC";
            break;
        }
        case 4: {
            resultado += "CD";
            break;
        }
        case 5: {
            resultado += "D";
            break;
        }
        case 6: {
            resultado += "DC";
            break;
        }
        case 7: {
            resultado += "DCC";
            break;
        }
        case 8: {
            resultado += "DCCC";
            break;
        }
        case 9: {
            resultado += "CM";
            break;
        }
    }
}


function calculaDecena (numero:number){
    
    switch (numero) {
        case 1: {
            resultado += "X";
            break;
        }
        case 2: {
            resultado += "XX";
            break;
        }
        case 3: {
            resultado += "XXX";
            break;
        }
        case 4: {
            resultado += "XL";
            break;
        }
        case 5: {
            resultado += "L";
            break;
        }
        case 6: {
            resultado += "LX";
            break;
        }
        case 7: {
            resultado += "LXX";
            break;
        }
        case 8: {
            resultado += "LXXX";
            break;
        }
        case 9: {
            resultado += "XC";
            break;
        }
    }
    
}
function calculaUnidad (numero:number){

    switch (numero) {
        case 1: {
            resultado += "I";
            break;
        }
        case 2: {
            resultado += "II";
            break;
        }
        case 3: {
            resultado += "III";
            break;
        }
        case 4: {
            resultado += "IV";
            break;
        }
        case 5: {
            resultado += "V";
            break;
        }
        case 6: {
            resultado += "VI";
            break;
        }
        case 7: {
            resultado += "Vii";
            break;
        }
        case 8: {
            resultado += "VIII";
            break;
        }
        case 9: {
            resultado += "IX";
            break;
        }
    }
}