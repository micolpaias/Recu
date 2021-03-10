/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. 

Micol Paias*/

function mostrar()
{
 var nombreIngresado;
 var carreraIngresada;
 var generoIngresado;
 var CantidadDeMaterias;
 var NotaPromedio;
 var edadIngresada; 
 var nombreMejorPromedioFisica;
 var notaPromedioFisica;
 var contadorQuimica = 0;
 var contadorFisica = 0; 
 var contadorSistemas = 0;
 var flagFisica = true; 
 var flagEdad = true;
 var flagMaterias = true;
 var edadMinima;
 var nombreAlumnaJoven; 
 var cantidadDeMateriasMax;
 var nombreAlumnoMaxMaterias;
 var edadAlumnoMaxMaterias; 
 var promedioQuimica;
 var promedioFisica; 
 var promedioSistemas;
 var totalAlumnos;

    for (var i = 0; i < 3; i++) 
    {
        nombreIngresado = prompt("Ingrese su Nombre:")
		while (isNaN(nombreIngresado) == false) 
		{
			nombreIngresado = prompt("Error! Por favor, no ingrese numeros. Ingrese su Nombre:");
		}

        carreraIngresada = prompt("Ingrese su carrera (Quimica;Fisica;Sistemas):")
		while (carreraIngresada != "Quimica" && carreraIngresada != "Fisica" && carreraIngresada != "Sistemas")
		{
			carreraIngresada = prompt("Error! Ingrese su carrera (Quimica;Fisica;Sistemas)");
		}

        generoIngresado = prompt("Ingrese su genero (Femenino, Masculino o No binario):")
		while (generoIngresado != "Femenino" && generoIngresado != "Masculino" && generoIngresado != "No binario")
		{
			generoIngresado = prompt("Error! Ingrese su genero (Femenino, Masculino o No binario):");
		}

        CantidadDeMaterias = prompt("Ingrese su cantidad de Materias (entre 1 y 5):")
		CantidadDeMaterias = parseInt(CantidadDeMaterias);
		while (isNaN(CantidadDeMaterias) == true || CantidadDeMaterias < 0 || CantidadDeMaterias >  5 ) 
		{
			CantidadDeMaterias = prompt("Error! Ingrese su cantidad de Materias (entre 1 y 5):");
			CantidadDeMaterias = parseInt(CantidadDeMaterias);
		}

        NotaPromedio = prompt("Ingrese su Nota Promedio (entre 0 y 10):")
		NotaPromedio = parseInt(NotaPromedio);
		while (isNaN(NotaPromedio) == true || NotaPromedio < 0 || NotaPromedio >  10 ) 
		{
			NotaPromedio = prompt("Error! Ingrese su Nota Promedio (entre 0 y 10)");
			NotaPromedio = parseInt(NotaPromedio);
		}

        edadIngresada = prompt("Ingrese su edad:")
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 0) 
		{
			edadIngresada = prompt("Error! Ingrese su edad:");
			edadIngresada = parseInt(edadIngresada);
		}

        switch (carreraIngresada) {
            case "Quimica":
                contadorQuimica++;
                break;
            case "Fisica":
                contadorFisica++;
                if (flagFisica || NotaPromedio > notaPromedioFisica) 
                {
                    notaPromedioFisica = NotaPromedio;
                    nombreMejorPromedioFisica = nombreIngresado;
                    flagFisica = false;
                }
                break;
            case "Sistemas":
                contadorSistemas++;
                break;

            }

            
          if (generoIngresado == "Femenino" ) {
            if (flagEdad || edadIngresada < edadMinima) 
            {
                edadMinima = edadIngresada; 
                nombreAlumnaJoven = nombreIngresado;
                flagEdad == false;
            }
          }

          if(carreraIngresada != "Quimica")
          {
            if(flagMaterias || CantidadDeMaterias > cantidadDeMateriasMax)
            {
                 nombreAlumnoMaxMaterias = nombreIngresado;
                 edadAlumnoMaxMaterias = edadIngresada; 
                 flagMaterias = false;
            }
            else
            {
                nombreAlumnoMaxMaterias = nombreIngresado;
                edadAlumnoMaxMaterias = edadIngresada; 
                flagMaterias = true;
            }
          }
    }
    totalAlumnos = contadorQuimica + contadorFisica + contadorSistemas;
    promedioQuimica = (contadorQuimica*100)/totalAlumnos;
    promedioFisica = (contadorFisica*100)/totalAlumnos;
    promedioSistemas = (contadorSistemas*100)/totalAlumnos;

     /*a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).*/

     if (flagFisica == false) 
     {
        document.write("El mejor promedio de fisica es:"+ nombreMejorPromedioFisica+"</br>");
     }
     else
     {
        document.write("No hay mejor promedio en fisica</br>");
     }
     /*b) El nombre de la alumna mas joven.*/

     if (flagEdad == false) 
     {
        document.write("La alumna mas joven es:" + nombreAlumnaJoven+"</br>");
     }
     else
     {
        document.write("No hay alumna</br>");

    }
        /*c) Porcentaje de estudiantes que estudia cada carrera.*/

     if (contadorQuimica == 0) 
     {
        document.write("No hay alumnos</br>");
    }
    else 
    {
        document.write("El porcentaje de alumnos en Quimica son:"+promedioQuimica+"</br>");
    }

    if (contadorFisica== 0) 
    {
        document.write("No hay alumnos</br>");
    }
    else 
    {
        document.write("El porcentaje de alumnos en Fisica son:"+promedioFisica+"</br>");
    }
   
    if (contadorSistemas == 0) 
    {
    document.write("No hay alumnos</br>");
    }
    else 
    {
        document.write("El porcentaje de alumnos en Sistemas son:"+promedioSistemas+"</br>");
    }


     /*d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.  */
     if(flagMaterias == false)
     {
        document.write("El estudiante que cursa mas materias (exceptuando quimica) es: " + nombreAlumnoMaxMaterias+ "y su edad es"+ edadAlumnoMaxMaterias + "</br>");
     }
     else
     {
        document.write("No hay</br>");
     }
}
