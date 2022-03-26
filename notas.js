-------------------------formas de insertar js-------------------------------
inline: <h1 onclick="alert('hola')">saludos</h1>
scrpit:  <scrpit></scrpit>
<scrpit src="nombre.js"></scrpit> --> mejor forma de usar js

---------------------------------metodos-----------------------
onclick= --> hace un evento al realizar un click
alert(variable) --> ventana que contiene texto u otros
prompt("hola")--> ventana con un texto y espera la respuesta, si se llama esta variable solo mostrara el valor tomado
document.write(variable) --> escribe en el navegador el dato
variable.concat(var2) --> concadenacion de var1 + var2 // sin suma de int
var1 = "otra forma de concadenar ${a}" --> concadenar usando `hola ${usuario}` --> `` backticks 

-----------------------------
let -->solo puede ser usado en el bloque (variable local)
var --> es global
const --> variable constantem que se debe inicializar cuando se crea
histing --> capacidad de js de usar una variable antes de declararse (se debe configurar)
frase = "" + num1(1) + num2(2) --> document.write(frase) --> 12 --> esto por que al agregar un string sumara todo como str 

----------------------------operadores logicos-----------------------------------------
x += y
x -= y
x *= y
x /= y
x %= y --> resto
x **= y --> exponenciacion

--------------------------operadores de asignacion----------------------------------

//se debe guardar en una variable la operacion de asignacion, ya que al realizarla en la impresion de la variable se realizara la accion luego de la impresion
-- --> decremento, se le resta 1
- --> sustraccion
/ --> division
** --> expo
-(10) --> negacion unaria: da vuelta el resultado 




innerHTML = lanza al html lo que se le asine por ej:
document.getElementById('id').innerHTML = 3+5;

Math.round = redondeo tradicional
Math.floor = redondeo hacia abajo
Math.cell = redondeo hacia arriba

//declaracion de variables en una sola linea 
let num, num2, num3;

num =2;
num2 =5;
num3 =12 
// tambien puede ser --> num =2, num = 5, num = 12;

alert(num);
alert(num2);
alert(num3);
