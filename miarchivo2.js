/*En este apartado intentaremos crear un cajero automatico, el cual nos indique,
los fondos que tiene el usuario, si desea retirar plata, o si desea generar un plazo fijo */
const usuario= [
{usuario : "Goribe"},{contraseña1 : "Function123"},
{usuario : "Proque"},{contraseña2 : "Solar1"},
{usuario : "Ssalvo"},{contraseña3 : "Parque43"}
]
let ingreseUsuario = prompt ("Ingrese usuario");
let ingreseContraseña = prompt ("Ingrese contraseña");
const usuario1 = usuario.find((x) => x.usuario === "Goribe");
const usuario2 = usuario.find((x) => x.usuario === "Proque");
const usuario3 = usuario.find((x) => x.usuario === "Ssalvo");
if (ingreseUsuario == usuario1){
  console.log ("");
}else if (ingreseContraseña == "Function123"){
  console.log("Hola Gonzalo,eliga la opcion a realizar")
} else if (ingreseUsuario == usuario2){
  console.log ("");
}else if (ingreseContraseña == "Solar1"){
  console.log ("Hola Pedro, elige la opcion a realizar")
}else if (ingreseUsuario == usuario3){
  console.log ("");
}else if (ingreseContraseña == "Parque43"){
  console.log ("Hola Susana, elige la opcion a realizar")
}else{
  console.log("error");
};
// En esta primer parte solo determinamos por consola, quien de los primeros 3 clientes de nuestro banco virtual entrará
let Seleccionar = prompt ("Ingrese opcion");
  //Por ahora solo tenemos 2 opciones ya sea extracción o constitución de plazo fijo
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
  
  // En este apartado seleccionamos la opcion a realizar.
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
  /* El banco es funcional, aun quedan detalles, como concatenar ciertas funciones y objetos, 
  aun asi entiende lo que queremos hacer, la idea es agregar algunas otras funciones, y empezar a darle forma con css y hmtl*/