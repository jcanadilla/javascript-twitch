/*
  ¿Qué es una variable?
  - Es un espacio de memoria del programa que tiene un identificador

  ¿Qué es declarar una variable?
  - Es asignar un nombre y/o valor a un espacio de memoria

  ¿Cómo declaro una variable en javascript?
  - Puedes utilizar "let" o "const"

  ¿Qué diferencia hay entre "let" y "const"?
  - Principalmente, una variable declarada con "let" puede cambiar de valor. Mientras
    que si lo hacemos con "const" esta no podrá cambiar de valor. Es decir, será CONSTANTE
  
  ¿Qué es un el tipo de una variable?
  - Es la clase de dato que se puede almacenar en ella. Ej: número, texto, verdadero/falso...

  Tipos de variable:
  - string => Cadenas de caracteres => "hola"
  - number => Todos los números
  - boolean => true/false
  - función => Representa la implementación de una función
  - objeto => Es una variable compleja. Puede tener propiedades y métodos internos.
*/

// Declaramos una variable constante
const a = 1;

// Declaramos una variable
let b = 2;

// Operaciones con variables
let c = a + b; // ¿Cuál será el valor de c?

let hola = "hola"; // 'hola'
let booleano = true;

let funcion = () => { return 'hola' };


let tech = {
	nombre: 'Javi',
	twitch: 'TechCoder5',
	saludame: (nombre) => {
		return `¡Buenas, ${nombre}!`;
	}
}

console.log('Nombre de Tech: ', tech.nombre);
console.log('Twitch de Tech: ', tech.twitch);
console.log('Salúdame: ', tech.saludame('JaviGigante'));
