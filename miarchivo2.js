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



//guardar();

obtener_localStorage();

function obtener_localStorage(){

if(localStorage.getItem("usuario1") && (localStorage.getItem("usuario2") && (localStorage.getItem("usuario3")))){
// se que existe el nombre en el localstorage

let usuario1 = JSON.parse(localStorage.getItem("usuario1"));
let usuario2 = JSON.parse(localStorage.getItem("usuario2"));
let usuario3 = JSON.parse(localStorage.getItem("usuario3"));
/*console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
*/
}else{
alert("No hay nommbres en el local storage");
}
}


   function guardar(){
        let usuario1 ={
          usuario : "goribe",
          contraseña : "function123",
        };
        let usuario2 ={
          usuario : "proque",
          contraseña : "solar1",
        };
        let usuario3 ={
          usuario : "ssalvo",
          contraseña : "parque43",
        };

        localStorage.setItem("usuario1", JSON.stringify(usuario1));
        localStorage.setItem("usuario2", JSON.stringify(usuario2));
        localStorage.setItem("usuario3", JSON.stringify(usuario3));
      }


captura();
      function captura(){
        var nombreus=document.getElementById("txtuser").value;
        var contraus=document.getElementById("txtpassword").value;
        if (nombreus=="goribe" && contraus=="function123"){
          alert("Bienvenido Gabriel Oribe");
          console.log(obtener_localStorage(usuario1) );
          
          
        }
        else if (nombreus=="proque" && contraus=="solar1"){
          alert("Bienvenido Pedro Roque");
          console.log(obtener_localStorage(usuario2)  );
        }
        else if (nombreus=="ssalvo" && contraus=="parque43"){
          alert("Bienvenida Susana Salvo");
          console.log(obtener_localStorage(usuario3)  );
        }
          else if(nombreus==""){
            alert("Debe ingresar un usuario")
            document.getElementById("txtuser").focus();
          }else if(contraus==""){
            alert("Debe ingresar un password")
            document.getElementById("txtpassword").focus();
        }else{
        
        alert("error");
      }
    }







/*
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
  /* Si bien está desordenado por falta de tiempo,
   hice la primer parte captuurando datos de formulario utilizando la funcion "Capturar"
   Falta la siguiente parte.*/






      








     