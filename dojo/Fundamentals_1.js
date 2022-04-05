// 1-Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.
// 2-Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 
// 3-Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).
// 4-Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
// 5-Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
// 6-Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
// 7-Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
// 8-Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
// 9-Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
// 10-Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
// 11-Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
// 12-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
// 13-De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].



function ej1(){
    for(var i=0; i<=255 ;i++){
        console.log(i);
    }
}
// ej1();

function ej2(){
   let sumatory = 0;
    for(var i=0; i<=1000; i++){
        if(i%2 == 0){
            sumatory = sumatory + i;
        }
    }
    console.log(sumatory)
}
ej2();

function ej3(){
    let sumatory = 0 ;
    for(i=0; i<5000 ; i++){
        if(i%2 == 1){
            sumatory = sumatory + i ; 
        }

    }
    console.log("la sumatoria de 1 a 5000 de impares es :", sumatory)
}
ej3();

// funcion que hara una suma de todos los elementos del array
// tambien existe el metodo forEach para recorrer un array 
// se podria hacer un array.length y crear una iteracion en base a ese num... 
function ej4(){
    let array = [1,2,3];
    let sumatory = 0 ;
    for(i in array){
        sumatory = sumatory + array[i];
    }
    return sumatory;
}
function ej4_v2(){
    let array  = [2,4,3] ; 
    let sumatory = 0;
    array.forEach(
        element => sumatory = sumatory + (element)
    );
    return sumatory; 
}

// console.log(ej4());
console.log(ej4_v2());

// encontrar el mayor numero en un array
function ej5(){
    let array = [-3,3,5,7];
    return Math.max(...array);
}

console.log(ej5());
// funcion que devuelva el promedio
function ej6(){
    let array = [1,3,5,7,20];
    let sumatory = 0;
    array.forEach(
        element => sumatory = sumatory + element
    )
    return (sumatory/array.length);
}

console.log(ej6());

// funcion que devulva todos los numeros impares de un array
function ej7(){
    let array = [1,2,3,4,5,6,7,8,9];
    let array_impar = [];
    for(i in array){
        // para impar array[i]%2 == 0
        if(array[i]%2 == 1){
            array_impar.push(array[i]);
        }
    }
    return array_impar
}
console.log(ej7());

function ej8(){
    let value = 3;
    let array = [1,2,3,4,5,6,7];
    let new_array = [];
    for(i in array){
        if(array[i] > value){
            new_array.push(array[i]);
        }
    }
    return new_array.length
}
console.log(ej8());

function ej9(){
    let array = [1,5,10,-2];
    let cube_array  = [];
    for(i in array){
        cube_array.push(array[i]*array[i]);
    }
    return cube_array;
}

console.log(ej9());

function ej10(array){
    // let array = [1,5,10,-2];
    let new_array = [];
    for(i in  array){
        if(array[i] > 0){
            new_array.push(array[i]);
        }
    }
    return new_array;
}
console.log(ej10([1,5,10,-2,4]));

function ej11(array){
    let new_array = [];
    let promedio = 0
    new_array.push(Math.max(...array));
    new_array.push(Math.min(...array));
    for(i in array){
        promedio = promedio + array[i];
    }
    new_array.push(promedio);
    return new_array;
}
console.log(ej11([1,5,10,-2,4]));
// intercambia el ultimo con el primer valor de un array
// array.pop() ->  para eliminar el ultimo elemento del array
// array.unshift('nombre_elemento') -> agregar X elemento al principio del array
// array.shift() -> elimina el primer elemento del array
// array.push(argumento) -> agrega un elemento al final del array
function ej12(array){

    let new_array = array;
    let last_value = array.pop();
    let first_value = array.shift();

    new_array.pop();
    new_array.shift();
    new_array.unshift(last_value);
    new_array.push(first_value);

    return new_array;
}
// ???
console.log(ej12([1,-2,3,54,5,7,4]));

function ej13(array){
    let new_array = [];
    for(i in array){
        if(array[i] > 0){
            new_array.push(array[i]);
        }
        else{
            new_array.push("dojo");
        }
    }
    return new_array;
}

console.log(ej13([1,-2,3,54,5,7,4]));
