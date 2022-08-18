/* En este apartado trataremos de ayudar a la profesora Miriam sacando un promedio del alumno Juan,
determinando si la suma de los 3 trimestres permite a Juan pasar de año o repetir el mismo.
La nota para aprobar los trimestres es 7*/
let trimestre1 = parseFloat(prompt("ingrese nota1"));
let trimestre2 = parseFloat(prompt("ingrese nota2"));
let trimestre3 = parseFloat(prompt ("ingrese nota3"));

let promedio = trimestre1 + trimestre2 + trimestre3;

let totalNota = parseInt (promedio / 3);
if (totalNota >= 7 && totalNota <= 10 ){
      console.log(totalNota)
}
do {totalNota = false
}while (totalNota >= 7){
   console.log("Juan pasa de año")
}
if (totalNota<=7){
   console.log("Juan no pasa de año")
} 