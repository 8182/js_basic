//variable con multiples objetos
var users = [
    {name: "Michael", age:37},
    {name: "John", age:30},
    {name: "David", age:27}
];

// ¿Cómo harías print/log de la edad de John?

console.log(users[1]['age']);

// ¿Cómo harías print/log del nombre del primer objeto?
console.log(users[0]['name']);


// ¿Cómo harías print/log del nombre y la edad de cada usuario utilizando un for loop? Tu output debería verse algo como esto
console.log(users[1]['age']);


//¿Cómo harías para imprimir el nombre de los mayores de edad?
// console.log(users[1]['age']);

function over_30(users){
    let new_array = [];
    for(i in users){
        if(users[i]['age'] > 31)
        new_array.push(users[i])
    }
    return new_array
}
console.log(over_30(users))