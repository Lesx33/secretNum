//Variables
let numeroSecreto = 2;
let numeroUsuario;
let intentos = 1;
while (numeroSecreto != numeroUsuario) {
     numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

     console.log(numeroUsuario);
     /*
     Este código realiza
     la comparación
     */
     if (numeroUsuario == numeroSecreto) {
          //Acertamos, fue verdadera la condición
          alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} intento(s)`);
     } else {
          //La condición no se cumplió
          if (numeroUsuario > numeroSecreto) {
               alert('El número secreto es menor');
          } else {
               alert('El número secreto es mayor');
          }
          intentos++;

     }
}