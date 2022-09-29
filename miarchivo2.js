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
//estos son datos viejos de consola, no se si borrarlos o aun no




//guardar();

//obtener_localStorage();

function obtener_localStorage(){

if(localStorage.getItem("usuario1") && (localStorage.getItem("usuario2") && (localStorage.getItem("usuario3")))){
// se que existe el nombre en el localstorage

let usuario1 = JSON.parse(localStorage.getItem("usuario1"));
let usuario2 = JSON.parse(localStorage.getItem("usuario2"));
let usuario3 = JSON.parse(localStorage.getItem("usuario3"));
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);

}else{
alert("No hay nommbres en el local storage");
}
}


   function guardar(){
        let usuario1 ={
          usuario1 : "goribe",
          contraseña1 : "function123",
          deposito1 : 450000,
        };
        let usuario2 ={
          usuario2 : "proque",
          contraseña2 : "solar1",
          deposito2 : 750000,
        };
        let usuario3 ={
          usuario3 : "ssalvo",
          contraseña3 : "parque43",
          deposito3 : 800000,
        };

        localStorage.setItem("usuario1", JSON.stringify(usuario1));
        localStorage.setItem("usuario2", JSON.stringify(usuario2));
        localStorage.setItem("usuario3", JSON.stringify(usuario3));
      }

   
     
//captura();
       
       function captura(){
        
        let nombreus=document.getElementById("txtuser").value;
        let contraus=document.getElementById("txtpassword").value;
        if (nombreus=="goribe" && contraus=="function123"){
          
          alert("Bienvenido Gabriel Oribe" + " " +  "recuerde que si desea realizar un plazo fijo o una extraccion, porfavor vuelva a ingresar su contraseña para validar");
          location.href = "seleccionar.html"
          console.log (user1);
          
          
          
        }
        else if (nombreus=="proque" && contraus=="solar1"){
          alert("Bienvenido Pedro Roque");
          location.href = "seleccionar.html"
          console.log (user2);
          
        }
        else if (nombreus=="ssalvo" && contraus=="parque43"){
          alert("Bienvenida Susana Salvo");
          location.href = "seleccionar.html"
          console.log (user3);
          
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

      









     