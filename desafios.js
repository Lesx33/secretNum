/* 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
De lo contrario, muestra "¡Buena semana!".
 */

/* let dia = prompt('Ingrese un dia de la semana: ')
console.log(dia)
console.log(dia.toLowerCase())
if (dia.toLowerCase() == 'sábado' || dia.toLowerCase() == 'domingo'){
    console.log('¡Buen fin de semana!')
} else {
    console.log('¡Buena semana!')
}
 */

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

/* let num = prompt('Por favor ingrese un número: ')

if (num<0) {
    alert('El número es negativo');
} else {
    alert('El número es positivo');
} */

/* 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
En caso contrario, muestra "Intentalo nuevamente para ganar.". */

/* let puntuacion = prompt('Ingrese su puntuación: ')

if (puntuacion>=100) {
    console.log('¡Felicidades, has ganado!');
} else {
    console.log('Intentalo nuevamente para ganar.');
} */

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
/* let saldo = 4000

alert(`El saldo actual de su cuenta es ${saldo}`)
console.log(`El saldo actual de su cuenta es ${saldo}`) */

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt('Por favor ingrese su nombre: ');
alert(`¡Bienvenido ${nombre}!`)