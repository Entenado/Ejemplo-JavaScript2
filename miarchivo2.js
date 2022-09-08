/*En este apartado intentaremos crear un cajero automatico, el cual nos indique,
los fondos que tiene el usuario, si desea retirar plata, o si desea generar un plazo fijo */
/*const usuario= [
{usuario : "goribe"},{contraseña1 : "function123"},
{usuario : "proque"},{contraseña2 : "solar1"},
{usuario : "ssalvo"},{contraseña3 : "parque43"}
]
let ingreseUsuario = prompt ("Bienvenido al cajero aconcagua, porfavor ingrese usuario");
let ingreseContraseña = prompt ("Ingrese su contraseña");
const usuario1 = usuario.find((x) => x.usuario === "goribe");
const usuario2 = usuario.find((x) => x.usuario === "proque");
const usuario3 = usuario.find((x) => x.usuario === "ssalvo");
if (ingreseUsuario == usuario1){
  console.log ("");
}else if (ingreseContraseña == "function123"){
  console.log("Hola gonzalo,eliga la opcion a realizar")
} else if (ingreseUsuario == usuario2){
  console.log ("");
}else if (ingreseContraseña == "solar1"){
  console.log ("Hola pedro, elige la opcion a realizar")
}else if (ingreseUsuario == usuario3){
  console.log ("");
}else if (ingreseContraseña == "parque43"){
  console.log ("Hola susana, elige la opcion a realizar")
}else{
  console.log("error");
};*/

function captura(){
  var nombreus=document.getElementById("nombre").value;
  var contraus=document.getElementById("contraseña").value;
  if (nombreus=="goribe" && contraus=="function123"){
    alert("Bienvenido Gabriel Oribe");
    console.log(nombreus +" " + contraus );
  }
  else if (nombreus=="proque" && contraus=="solar1"){
    alert("Bienvenido Pedro Roque");
    console.log(nombreus +" " + contraus );
  }
  else if (nombreus=="ssalvo" && contraus=="parque43"){
    alert("Bienvenida Susana Salvo");
    console.log(nombreus +" " + contraus );
  }
  else if(nombreus==""){
    alert("Debe ingresar un usuario")
    document.getElementById("nombre").focus();
  }else if(contraus==""){
    alert("Debe ingresar un password")
    document.getElementById("contraseña").focus();
  }else{
  console.log("error");
}
}

//Dejo comentado lo hecho en js, que se reemplazó en eventos de formulario
// En esta primer parte solo determinamos por consola, quien de los primeros 3 clientes de nuestro banco virtual entrará
let Seleccionar = prompt ("Ingrese opcion (1) si desea hacer un retiro ó ingrese opcion (2) si desea constituir un plazo fijo");
  //Por ahora solo tenemos 2 opciones ya sea extracción o constitución de plazo fijo
  const extraccion = {
  fondos : parseInt(prompt("Ingrese Fondos")),
  
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
  console.log("Usted posee en la cuenta la suma de", extraccion.fondos, "pesos disponibles.");
  
  console.log("Usted solicitó extraer", extraccion.montoExtraccion, "pesos.");
  
  console.log("El saldo disponible es de", extraccion.saldo, "pesos.");
  }
  else if (Seleccionar == 2){
    console.log ("usted constituyó un plazo fijo a", plazos, "dias");
    console.log ("una vez finalizado el periodo, usted obtendrá la suma de",plazoFijo(deposito),"pesos");
  }
  else {
    alert ("error")
  };
  /* El banco es funcional, aun quedan detalles, como concatenar ciertas funciones y objetos, 
  aun asi entiende lo que queremos hacer, la idea es agregar algunas otras funciones, y empezar a darle forma con css y hmtl*/
  
