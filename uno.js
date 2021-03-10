

/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*

Micol Paias*/

function mostrar()
{
	var nombreIngresado; 
	var edadIngresada;
	var generoIngresado;
	var puestoEmpresa;
	var sueldoObtenido; 
	var contadorProg = 0;
	var acumuladorProg= 0;
	var contadorQA = 0;
	var acumuladorQA = 0;
	var contadorAnalista= 0; 
	var acumuladorAnalista= 0;
	var promedioProg;
	var promedioAnalista;
	var promedioQA; 
	var respuesta = "si";
	var flagSueldoMaximo = true;
	var sueldoMax;
	var generoMax; 
	var flagSueldoMaximoFem = true;
	var sueldoMaxFem;
	var nombreFemMax;
	var contadorNB = 0;

	

	do {
		nombreIngresado = prompt("Ingrese su Nombre:")
		while (isNaN(nombreIngresado) == false) 
		{
			nombreIngresado = prompt("Error! Por favor, no ingrese numeros. Ingrese su Nombre:");
		}
		
		edadIngresada = prompt("Ingrese su edad:")
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 0) 
		{
			edadIngresada = prompt("Error! Ingrese su edad:");
			edadIngresada = parseInt(edadIngresada);
		}

		generoIngresado = prompt("Ingrese su genero (Femenino, Masculino o No binario):")
		while (generoIngresado != "Femenino" && generoIngresado != "Masculino" && generoIngresado != "No binario")
		{
			generoIngresado = prompt("Error! Ingrese su genero (Femenino, Masculino o No binario):");
		}

		puestoEmpresa = prompt("Ingrese su puesto en la empresa  (programador, analista o Qa):")
		while (isNaN(puestoEmpresa) == false || (puestoEmpresa != "programador" && puestoEmpresa != "analista" && puestoEmpresa != "Qa")) 
		{
			puestoEmpresa = prompt("Ingrese su puesto en la empresa  (programador, analista o Qa):");
		}

		sueldoObtenido = prompt("Ingrese su sueldo (entre 15000 y 70000):")
		sueldoObtenido = parseInt(sueldoObtenido);
		while (isNaN(sueldoObtenido) == true || sueldoObtenido < 15000 || sueldoObtenido >  70000 ) 
		{
			sueldoObtenido = prompt("Error! Ingrese su sueldo (entre 15000 y 70000):");
			sueldoObtenido = parseInt(sueldoObtenido);
		}

		//a) promedio de sueldos para cada puesto

		switch (puestoEmpresa) 
		{
			case "programador":
				contadorProg++;
				acumuladorProg =+ sueldoObtenido; 
				if (generoIngresado == "No binario" &&  sueldoObtenido < 20000 || sueldoObtenido >  55000)
				{
					contadorNB++;
				}
				break;
			case "analista":
				contadorAnalista++;
				acumuladorAnalista =+ sueldoObtenido; 
				break;
			case "Qa":
				contadorQA++;
				acumuladorQA =+ sueldoObtenido; 
		}

		//b) el sexo del que percibe el mayor sueldo 
		if (flagSueldoMaximo || sueldoObtenido > sueldoMax) 
		{
			sueldoMax = sueldoObtenido;
			generoMax = generoIngresado;
			flagSueldoMaximo = false;
		}

		//c) el nombre del empleado femenino con mas sueldo
		
		if( generoIngresado == "Femenino")
		{
			if (flagSueldoMaximoFem || sueldoObtenido > sueldoMaxFem)
			{
				sueldoMaxFem = sueldoObtenido;
				nombreFemMax = nombreIngresado;
				flagSueldoMaximoFem = false; 
			}
		}
		
		respuesta = confirm("Desea continuar agregando (Si o No)?")
}
while (respuesta);

	 promedioProg = acumuladorProg/ contadorProg;
	 promedioAnalista = acumuladorAnalista/contadorAnalista;
	 promedioQA = acumuladorQA/contadorQA; 

	 if (contadorProg == 0) 
	 {
		
		document.write("No existen programadores"+"</br>");
	 }
	 else 
	 {
		document.write("El promedio de sueldo de los programadores es:"+ promedioProg+"</br>");
	 }

	 if (contadorAnalista  == 0) 
	 {
		document.write("No existen analistas"+"</br>");
	 }
	 else 
	 {
		document.write("El promedio de sueldo de los QA es:"+ promedioAnalista+"</br>");
	 }
	 if (contadorQA  == 0) 
	 {
		document.write("No existen analistas"+"</br>");
	 }
	 else 
	 {
		document.write("El promedio de sueldo de los QA es:"+ promedioQA+"</br>");
	 }
	 if (flagSueldoMaximo) 
	 {
		document.write("El genero con mayor sueldo es:"+generoMax+"</br>");
	 }
	 else 
	 {
		document.write("No existen hay sueldo maximo"+"</br>");
	 }
	 if (flagSueldoMaximoFem) 
	 {
		document.write("La empleada con mayor sueldo es:"+nombreFemMax+"</br>");
	 }
	 else 
	 {
		document.write("No existen hay empleadas femeninas"+"</br>");
	 }
	
	 if (contadorNB  == 0) 
	 {
		document.write("No hay personas NB que sean Programadores"+"</br>");
	 }
	 else 
	 {
		document.write("La cantidad de progrmadores NB es: "+ contadorNB+"</br>");
	 }
}
