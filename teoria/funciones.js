
/**
	Una función es una porción de código que se aisla para poder reutilizar múltiples veces.
	Puede devolver o no un valor y puede aceptar cero o múltiples parámetros.

	Ejemplos:
	- Una función que haga un cálculo matemático completo y devuelva el resultado.
	- Una función que lea un archivo y devuelva su contenido.
	- Una función que haga una tarea en segundo plano y que no devuelve nada.

	Normalmente suele ponersele un nombre aunque también existen las funciones anónimas. Su declaración
	es similar y la única diferencia es que carecen de nombre. Se suelen pasar como parámetro a otra función
	Esto implica que no pueden ser llamadas desde otros puntos de la aplicación.

	Para llamar a una función se utiliza:
	nombre_de_la_funcion(parametros);
	
	Si queremos almacenar el valor que devuelva lo podemos asignar a una variable:
	let resultado = nombre_de_la_funcion(parametros);
	console.log(resultado);
*/

function resta(a, b) {
	return a - b;
}

resta(5, 2); // ¿Resultado?

// ¿Qué hace esta función?
const fnMisterio = (str) => {
	return str.split('').reverse().join('');
}
console.log(fnMisterio('Hola mundo. Yo soy TechCoder5'));


// Dificil
function generic (param, fn){
	return fn(param);
}

const resultado = generic(5, (a) => {
	return a * 2;
})

console.log(resultado);
