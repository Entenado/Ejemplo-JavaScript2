
  

let user1 = JSON.parse(localStorage.getItem("usuario1"))
let user2 = JSON.parse(localStorage.getItem("usuario2"))
let user3 = JSON.parse(localStorage.getItem("usuario3"))

let{usuario1, contraseña1, deposito1} = user1;
let{usuario2, contraseña2, deposito2} = user2;
let{usuario3, contraseña3, deposito3} = user3;


// En esta parte se obtiene información atraves del local storage una vez guardado los datos correctamente
// en "miarchivo2.js, estos datos servirán para determinar el depósito de cada cliente".

function extraer() {
 let deposito = (deposito1, deposito2, deposito3)

let extraccionn = document.getElementById("extraccion").value;
console.log(extraccionn);


if (document.getElementById("nombre").value == "function123") {
  let deposito = deposito1;
  deposito1 = deposito - extraccionn;
  localStorage.setItem("deposito1", JSON.stringify(deposito1));
  let btnShow = document.getElementById("boton")
  boton.addEventListener("click",()=>{
  swal("Gabriel usted extrajo" + " " + extraccionn + " " + "monedas virtuales," + " " + "usted posee" + deposito1 + " " + "monedas vrituales. Si desea realizar otra operacion porfavor actualice la pagina");
  
  
  });


}else if (document.getElementById("nombre").value == "solar1"){
  let deposito = deposito2;
  deposito2 = deposito - extraccionn;
  localStorage.setItem("deposito2", JSON.stringify(deposito2));
  let btnShow = document.getElementById("boton")
  boton.addEventListener("click",()=>{
  swal("Pedro usted extrajo" + " " + extraccionn + " " + "monedas virtuales," + " " + "usted posee"  + deposito2 + " " + "monedas vrituales. Si desea realizar otra operacion porfavor actualice la pagina");
  
  
  });
  

}else if (document.getElementById("nombre").value == "parque43"){
  let deposito = deposito3;
  deposito3 = deposito - extraccionn;
  localStorage.setItem("deposito3", JSON.stringify(deposito3));
  let btnShow = document.getElementById("boton")
  boton.addEventListener("click",()=>{
  swal("Susana usted extrajo" + " " + extraccionn + " " + "monedas virtuales," + " " + "usted posee"  + deposito3 + " " + "monedas vrituales. Si desea realizar otra operacion porfavor actualice la pagina" );
  
  
  });
  

}else{
  extraer = false
  
  let btnShow = document.getElementById("boton")
  boton.addEventListener("click",()=>{
  swal("Error!, porfavor recargue la pagina e ingrese nuevamente su password para validar la operacion")
  });
  
}
};




function getSelectValue(){
  let contra = document.getElementById("contras").value
  let selectdValue = document.getElementById("list").value;
  let ingreso = parseFloat(document.getElementById("inversion").value);
  if ( (selectdValue == "30") && (contra == "function123")){
    ingreso = ingreso + (ingreso*0.20);
    deposito1 = deposito1 - ingreso
   jsonBtn.addEventListener("click",()=>{
    swal("Gabriel se constituyó un plazo fijo a 30 días con una tasa del 20% mensual, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito1 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
   })
  }else if ((selectdValue == "60") && (contra == "function123")){
    ingreso = ingreso + (ingreso*0.40)
    deposito1 = deposito1 - ingreso
    console.log(ingreso);
    console.log("bienvenido Gabriel");
    jsonBtn.addEventListener("click",()=>{
    swal("Gabriel se constituyó un plazo fijo a 60 días con una tasa del 40% bimestral, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito1 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir")
    })
  }else if ((selectdValue == "90") && (contra == "function123")){
    ingreso = ingreso + (ingreso*0.60)
    deposito1 = deposito1 - ingreso
    jsonBtn.addEventListener("click",()=>{
    swal("Gabriel se constituyó un plazo fijo a 90 días con una tasa del 60% trimestral, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito1 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
    })
  }else if ( (selectdValue == "30") && (contra == "solar1")){
      ingreso = ingreso + (ingreso*0.20)
      deposito2 = deposito2 - ingreso
     jsonBtn.addEventListener("click",()=>{
      swal("Pedro se constituyó un plazo fijo a 30 días con una tasa del 20% mensual, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito2 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
     })
    }else if ((selectdValue == "60") && (contra == "solar1")){
      ingreso = ingreso + (ingreso*0.40)
      deposito2 = deposito2 - ingreso
      jsonBtn.addEventListener("click",()=>{
      swal("Pedro se constituyó un plazo fijo a 60 días con una tasa del 40% bimestral, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito2 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
      })
    }else if ((selectdValue == "90") && (contra == "solar1")){
      ingreso = ingreso + (ingreso*0.60)
      deposito2 = deposito2 - ingreso
      jsonBtn.addEventListener("click",()=>{
      swal("Pedro se constituyó un plazo fijo a 90 días con una tasa del 60% trimestral, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito2 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
      })
    }else if ( (selectdValue == "30") && (contra == "parque43")){
        ingreso = ingreso + (ingreso*0.20)
        deposito3 = deposito3 - ingreso
       jsonBtn.addEventListener("click",()=>{
        swal("Susana se constituyó un plazo fijo a 30 días con una tasa del 20% mensual, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito3 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
       })
      }else if ((selectdValue == "60") && (contra == "parque43")){
        ingreso = ingreso + (ingreso*0.40)
        deposito3 = deposito3 - ingreso
        jsonBtn.addEventListener("click",()=>{
        swal("Susana se constituyó un plazo fijo a 60 días con una tasa del 40% bimestral, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito3 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
        })
      }else if ((selectdValue == "90") && (contra == "parque43")){
        ingreso = ingreso + (ingreso*0.60)
        deposito3 = deposito3 - ingreso
        jsonBtn.addEventListener("click",()=>{
        swal("Susana se constituyó un plazo fijo a 90 días con una tasa del 60% trimestral, dando un total de" +"  " + ingreso + " " + "monedas virtuales al finalizar el periodo."+"  "+ "Su saldo es de" + deposito3 +" "+ "monedas virtuales. Si desea realizar otra operacion porfavor recargue la pagina o bien para finalizar oprima Salir");
        })
}else{
  getSelectValue = false;
  let btnShow = document.getElementById("jsonBtn")
  jsonBtn.addEventListener("click",()=>{
  swal("Error al validar password, o al seleccionar el plazo, porfavor recargue la pagina y vuelva a llenar los campos correctamente");
  
  });
};
};

  












  





















 
