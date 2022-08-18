/*Crear un programa que me diga si el número ingresado es divisible por 10.
Basado en ese programa, crear un programa que diga la suma de los dígitos del número ingresado.
*/
/*numero = parseInt(prompt("Ingrese numero"));
if (numero %10 == 0) {
    console.log("true")
}
    else if (numero%10 != 0)
    console.log("False")*/

   /* let i = 1;
    let divisor = 10 * 1;
    let digito = numero % divisor;
    suma = suma + digito;
    
    i=10;
    divisor = 10 * 10;
    digito = numero % divisor;
    resultado = parseInt(digito / i );
    console.log("digito", resultado);
    suma = suma + resultado;
    console.log(suma);*/
    let numero = 12;
    let suma = 0;
    for (let i = 10; i <numero *10; i*=10){

        let digito = numero % i;

        let resultado = parseInt(digito/(i / 10));

        suma = suma+ resultado;
    }
    console.log(suma); 