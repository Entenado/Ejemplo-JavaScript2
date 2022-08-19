function persona(nombre,edad,calle){
    this.nombre = nombre
    this.edad = edad;
    this.calle = calle;
}
for (let index = 1; index <= 5; index++){
    const persona1 = new persona("Homero", 10*index, "Av. Siempreviva 742");
    console.log(persona1);
    persona1.edad=persona1.edad + 5;
    console.log(persona1);
}
