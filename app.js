//Variables
let numeroSecreto;
let numeroUsuario = 0;
let intentos = 1;
let maxIntentos = 3;

let rangoMax = prompt('Ingresa el rango maximo con el que deseas jugar ');
numeroSecreto = Math.floor(Math.random()*rangoMax)+1;
console.log(numeroSecreto)
while (numeroSecreto != numeroUsuario) {
     numeroUsuario = prompt(`Me indicas un número entre 1 y ${rangoMax} por favor:`);

     console.log(numeroUsuario);
     /*
     Este código realiza
     la comparación
     */
     if (numeroUsuario == numeroSecreto) {
          //Acertamos, fue verdadera la condición
          alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
     } else {
          //La condición no se cumplió
          if (numeroUsuario > numeroSecreto) {
               alert('El número secreto es menor');
          } else {
               alert('El número secreto es mayor');
          }
          intentos++;
          if (intentos>maxIntentos){
               alert('Llegaste al número máximo de intentos');
               break;
          }

     }
}