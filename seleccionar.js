// En esta primer parte solo determinamos por consola, quien de los primeros 3 clientes de nuestro banco virtual entrará
//let Seleccionar = prompt ("Ingrese opcion (1) si desea hacer un retiro ó ingrese opcion (2) si desea constituir un plazo fijo");
  //Por ahora solo tenemos 2 opciones ya sea extracción o constitución de plazo fijo

let user1 = JSON.parse(localStorage.getItem("usuario1"))
let user2 = JSON.parse(localStorage.getItem("usuario2"))
let user3 = JSON.parse(localStorage.getItem("usuario3"))

let{usuario1, contraseña1, deposito1} = user1;
let{usuario2, contraseña2, deposito2} = user2;
let{usuario3, contraseña3, deposito3} = user3;



function extraer() {
  let deposito = (deposito1, deposito2, deposito3)

let extraccionn = document.getElementById("extraccion").value;
console.log(extraccionn);


if (document.getElementById("nombre").value == "function123") {
  let deposito = deposito1;
  let extraerr = deposito - extraccionn;
  
  console.log(extraerr);
  alert("Gabriel usted extrajo" +" " + extraccionn +"pesos" +" " + "usted posee" + " " + extraerr) ;
  

}else if (document.getElementById("nombre").value == "solar1"){
  let deposito = deposito2;
  let extraerr = deposito - extraccionn;
  console.log(extraerr);
  alert("Pedro usted extrajo" +" " + extraccionn +"pesos" +" " + "usted posee" + " " + extraerr) ;
}else if (document.getElementById("nombre").value == "parque43"){
  let deposito = deposito3;
  let extraerr = deposito - extraccionn;
  console.log(extraerr);
  alert("Susana usted extrajo" + " " + extraccionn +"pesos" + " " + "usted posee" + " " + extraerr) ;
}else{
  alert ("error")
  extraer = false
}

}






  /*let deposito = parseFloat(prompt("Ingrese monto a depositar"));
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