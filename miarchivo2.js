


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
          
          alert("Bienvenido Gabriel Oribe" )
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

      function handleOnFocus(x){
        x.style.color = "black";
        x.style.backgroundColor="bluelight";
      }









     