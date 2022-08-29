/*En este apartado intentaremos crear un cajero automatico, el cual nos indique,
los fondos que tiene el usuario, si desea retirar plata, o si desea generar un plazo fijo */


let Seleccionar = prompt ("Ingrese opcion");

  
    
const extraccion = {
  fondos : parseInt(prompt("Ingrese numero")),
  
  montoExtraccion : parseInt (prompt("Ingrese extraccion")),
  
  saldo : ""}
  
  function cajero (fondos, montoExtraccion) {
  
  extraccion.saldo = extraccion.fondos - extraccion.montoExtraccion
  
  return extraccion.saldo}
  
  
  cajero(extraccion.fondos, extraccion.montoExtraccion);
  


  
  let deposito = parseFloat(prompt("Ingrese monto a depositar"));
  let plazos = parseFloat[30,60,90];
  plazos = parseInt(prompt("Ingrese plazo"));

 function plazoFijo(deposito){
    
      if (plazos == 30) {
        deposito = (deposito * 0.20)+ deposito;
        return deposito;
      }
      else if (plazos == 60){
        deposito = (deposito * 0.40) + deposito;
        return deposito;
      }
      else if (plazos == 90){
        deposito = (deposito * 0.60)+ deposito;
        return deposito;
      }
      else { 
        alert("error");
      }
      
    };
  
  
  if (Seleccionar ==1){
  console.log("Usted tiene", extraccion.fondos, "pesos disponibles.");
  
  console.log("Usted solicito extraer", extraccion.montoExtraccion, "pesos.");
  
  console.log("El saldo que le queda disponible es de", extraccion.saldo, "pesos.");
  }
  else if (Seleccionar == 2){
    console.log ("usted depositó a", plazos, "dias");
    console.log ("usted obtendrá al finalizar el plazo",plazoFijo(deposito),"pesos");
  }
  else {
    alert ("error")
  };