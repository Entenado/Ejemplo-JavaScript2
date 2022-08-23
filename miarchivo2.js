/*En este apartado intentaremos crear un cajero automatico, el cual nos indique,
los fondos que tiene el usuario, si desea ingresar plata */


const cajero = {
  fondos : parseInt(prompt("Ingrese numero")),
      montoARetirar : parseInt (prompt("Ingrese extraccion")),
    saldo:function(){
     
      let saldo = cajero.fondos - cajero.montoARetirar
      if (saldo<=1){

     return cajero.fondos - cajero.montoARetirar
    
      }
      
    }
   
}
console.log("su saldo es", cajero.saldo(cajero.fondos,cajero.montoARetirar))