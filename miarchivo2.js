/*En este apartado intentaremos crear un cajero automatico, el cual nos indique,
los fondos que tiene el usuario, si desea ingresar plata */
function saldo(fondos, montoAretirar){



    return fondos - montoARetirar
     
}

let fondos = parseInt(prompt("Ingrese numero"));
let montoARetirar = parseInt (prompt("Ingrese extraccion"));
const saldo1 = saldo(fondos - montoARetirar);
console.log("su saldo actual es de", saldo1);

if((fondos - montoARetirar)<0){
    alert("No posee ese saldo, recuerde que vive en Argentina");}