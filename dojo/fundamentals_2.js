// 1-Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
// 2-Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
// 3-Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
// 4-Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
// 5-Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
// 6-Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
// 7-Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 
// 8-Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
// 9-Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
// 9-Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
// 10-Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
// 11-Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
// 12-Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
// 13-Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function ej1(array){
    let new_array = [];
    for(i in array){
        if(array[i] > 0){
            new_array.push('big')
        }
        else{
            new_array.push(array[i])
        }
    }
    return new_array;
}
console.log(ej1([-1,1,2,3,4,5,-3,-5]));


function ej2(array){
    console.log(Math.min(...array));
    return Math.max(...array);

}
console.log(ej2([-1,1,2,3,4,8,-3,-5]));


function ej3(array){
    let penultimo = array[array.length-2];
    console.log(penultimo);
    for(i in array){
        if(array[i]%2 == 0){
            return array[i];
        }
    }
}

console.log(ej3([-1,1,5,3,4,8,-3,-100]));

function ej4(array){
    let new_array = [];
    for(i in array){
        new_array.push(array[i]*2)
    }
    return new_array;
}

console.log(ej4([-1,1,5,3,4,8,-3,-100]));

function ej5(array){
    let array_positivo = [];
    for(i in array){
        if(array[i] > 0){
            array_positivo.push(array[i]);
        }
    }
    let remplazo = array.push()
    remplazo.push(array_positivo.length)
    return remplazo;
}

console.log(ej5([-1,1,5,3,4,8,-3,-100]));
