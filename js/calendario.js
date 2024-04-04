/Recibir el id del formulario para poder maipular/
const FRM_CALENDARIO = document.querySelector("#frmCalendario");


//Genereamos el evento del formulario por el medio de submit
FRM_CALENDARIO.addEventListener("submit", calendarioController);

function calendarioController(event) {
   event.preventDefault();
   //recibir datos de caja de textos 
   let dia = parseFloat(document.querySelector("#txtDia").value);
   let mes = parseFloat(document.querySelector("#txtMes").value);
   let year = parseFloat(document.querySelector("#txtaño").value);
   let diaInput = document.querySelector("#txtDia");


   // validar cajas de texto vacias
   if (diaInput.value.trim() == "") {
      alert("Por favor, ingrese un valor en el capos Vacios.");
      return;  // Detener la ejecución si está vacia
   }


   // imprimir resultados TDA
   let imprimirRes = document.getElementById("resultado");
   imprimirRes.textContent = calendarioTDA(dia, mes, year);
}

function calendarioTDA(dia, mes, year) {
   // inicializamos la bandera suponiendo que la fecha es correcta
   let bandera= true; 
   switch (mes) {
      case 1:
      case 3:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
         if (dia <= 30) {
            dia++
         } else if (dia == 31 && mes == 12) {
            dia = 1
            mes = 1
            year++
         } else if (dia == 31 && mes != 12) {
            dia = 1
            mes++
         }
         break;
      case 2:
         if (year % 4 == 0) { // es biciesto
            if (dia <= 28) {
               dia++
            } else if (dia == 29) {
               dia = 1
               mes++
            } else {
              // alert("feccha incorrecta");
              bandera=false;
            }
         } else { // no es biciesto
            if (dia <= 27) {
               dia++
            } else if (dia == 28) {
               dia = 1
               mes++
            } else {
              // alert("fecha incorrecta")
              bandera=false;
            }
         }
         break;
      case 4:
      case 6:
      case 9:
      case 11:
         if (dia <= 29) {
            dia++
         } else if (dia == 30) {
            dia = 1
            mes++
         }
         break;
   }
   /*
   if(dia>=32){
    alert("fecha incorrecta")
    location.reload();


   }
   if(mes>=13){
    alert("fecha incorrecta")
    location.reload();

   }
   if(dia<=0 || mes<=0|| year<=0){
      alert("ingresa valores mayores a 0")
      location.reload();

   }*/
   
   //validando la bandera para retornar el resultado
   if(bandera){
      return "El dia siguiente es: " + dia + "/" + mes + "/" + year;

   }else{
      return "fecha incorrecta ,intente de nuevo por favor :)";
   }
  
}