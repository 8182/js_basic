function ej1(){
    for(var i=0; i<=255 ;i++){
        console.log(i);
    }
}
// ej1();

function ej2(){
   let sumatory = 0;
    for(var i=0; i<=1000; i++){
        if(i%2 == 0)
            sumatory = sumatory + i;
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