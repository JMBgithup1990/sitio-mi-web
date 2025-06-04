//Estas son las variables

let numeroSecreto = Math.floor(Math.random()*10+1);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maxIntentos = 3;

//console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {

    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));

    /*Este codigo realiza la compración*/

    if (numeroUsuario == numeroSecreto) {
        //Acertamos fue verdadera la condición
        //${nuemeroUsuario} de esta manera mostramos el valor almacenado en la variable en el alert, utilizando las comillas invertidas (Alt+96)
        alert(`Acertaste, el número es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {

        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor')
        }else{
            alert('El número es secreto es mayor')
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos +1;
        //intentos +=1;
        intentos++;

        palabraVeces = 'veces';

        if (intentos > maxIntentos){
            alert(`Llegaste al número máximo de ${maxIntentos} intentos`);
            break;
        }
        
        //La condición no se cumplio
        //alert("Lo siento, no acertaste el número"); 
    }
}
