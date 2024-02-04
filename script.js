document.addEventListener("DOMContentLoaded", function() {
	const pizzas = document.getElementById("Pizzas");
	const rock = document.getElementById("Rock");
	const cafe = document.getElementById("Cafe");
	const enchi = document.getElementById("Enchi");
	const cochi = document.getElementById("Cochi");
	const cabana = document.getElementById("Cabana");
	const hija = document.getElementById("Hija");
	const papi = document.getElementById("Papi");
	const sabores = document.getElementById("Sabores");
	const pulpo = document.getElementById("Pulpo");
	const sushi = document.getElementById("Sushi");
	const pozolitos = document.getElementById("Pozolitos");
	const chapatas = document.getElementById("Chapatas");
	const birria = document.getElementById("Birria");
	const textoCambiante = document.getElementById("textoCambiante");
	const miTexto = document.getElementById("textoCambiante").innerHTML;
	const gridPizzas = document.getElementById("gridPizzas");
	const gridRock = document.getElementById("gridRock");
	const gridCafe = document.getElementById("gridCafe");
	const gridSushi = document.getElementById("gridSushi");
	const gridCochi = document.getElementById("gridCochi");
	const gridPulpo = document.getElementById("gridPulpo");
	const gridTextoHid = document.getElementById("gridTextoHid");
	const gridHija = document.getElementById("gridHija");
	const gridSabores = document.getElementById("gridSabores");
	const gridBirria = document.getElementById("gridBirria");
	const gridCabana = document.getElementById("gridCabana");
	const gridEnchi = document.getElementById("gridEnchi");
	const gridPozolitos = document.getElementById("gridPozolitos");
	const ruta = document.getElementById("ruta1");
	const th2 = document.getElementById("textoH2");
	const th2org = document.getElementById("textoH2").innerHTML;

	let resolucion = window.innerWidth;
	let userAgent = navigator.userAgent;

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	pizzas.onmouseover = function() {
		th2.innerHTML = "AJ Pizzas al Forno<br>!!! Pizzas Pastas y Ensaladas !!!";
		textoCambiante.innerHTML = "Martes, Miercoles y Domingo 2 p.m. a 10 p.m.<br><br>Jueves, Viernes y Sabado 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago";
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Cafe","./ComidaOpt/Pizzas 1.png");
		cambiarImagen("Rock","./ComidaOpt/Pizzas 2.png");
		cambiarImagen("Enchi","./ComidaOpt/Pizzas 3.png");
		cambiarImagen("Hija","./ComidaOpt/Pizzas 4.png");
		cambiarImagen("Birria","./ComidaOpt/Pizzas 5.png");
		cambiarImagen("Pulpo","./ComidaOpt/Pizzas 6.png");
		cambiarImagen("Pozolitos","./ComidaOpt/Pizzas 7.png");
		cambiarImagen("Sabores","./ComidaOpt/Pizzas 8.png");
		cambiarImagen("Sushi","./ComidaOpt/Pizzas 9.png");
		cambiarImagen("Chapatas","./ComidaOpt/Pizzas 10.png");
		cambiarImagen("Papi","./ComidaOpt/Pizzas 11.png");
		cambiarImagen("Cabana","./ComidaOpt/Pizzas 12.png");
		cambiarImagen("Cochi","./ComidaOpt/Pizzas 13.png");
		}

	pizzas.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","./LogosOpt/Cafe.png");
		cambiarImagen("Rock","./LogosOpt/Rock.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		cambiarImagen("Pulpo","./LogosOpt/Pulpo.png");
		cambiarImagen("Pozolitos","./LogosOpt/Pozolitos.png");
		cambiarImagen("Sabores","./LogosOpt/Sabores.png");
		cambiarImagen("Sushi","./LogosOpt/Sushi.png");
		cambiarImagen("Chapatas","./LogosOpt/Chapatas.png");
		cambiarImagen("Papi","./LogosOpt/Papidrinks_2.png	");
		cambiarImagen("Cochi","./LogosOpt/Cochinita_2.png");
		cambiarImagen("Cabana","./LogosOpt/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		pizzas.addEventListener("touchstart", function(){
			th2.innerHTML = "AJ Pizzas al Forno<br><br>!!! Pizzas, Pastas y Ensaladas !!!"
			textoCambiante.innerHTML = "Martes, Miercoles y Domingo 2 p.m. a 10 p.m.<br><br>Jueves, Viernes y Sabado 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago";
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "grid";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	birria.onmouseover = function() {
		th2.innerHTML = "La Birrieria<br>!!! Birria, Tacos y Quesabirrias !!!"
		textoCambiante.innerHTML = "Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Martes 2 p.m. a 9 p.m., Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago";
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Pizzas","./ComidaOpt/Birria 1.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Birria 2.png","200px","200px");
		}

	birria.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		birria.addEventListener("touchstart", function(){
			th2.innerHTML = "La Birrieria<br><br>!!! Birria, Tacos y Quesabirrias !!!"
			textoCambiante.innerHTML = "Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Martes 2 p.m. a 9 p.m., Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "grid";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
		ruta.addEventListener("touchstart", function(){
			th2.innerHTML = th2org;
			textoCambiante.innerHTML = miTexto;
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridCafe.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridTextoHid.style.display = "grid";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	enchi.onmouseover = function() {
		th2.innerHTML = "Enchilandia<br>!!! Enchiladas y Tacos Dorados !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Pizzas","./ComidaOpt/Enchilandia 1.png","500px","500px");
		
		}

	enchi.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		enchi.addEventListener("touchstart", function(){
			th2.innerHTML = "Enchilandia<br><br>!!! Enchiladas y Tacos Dorados !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "grid";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	hija.onmouseover = function() {
		th2.innerHTML = "La Hija de la Tostada<br>!!! Quesadillas, Huaraches y Pambazos !!!"
		textoCambiante.innerHTML = "Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Martes 2 p.m. a 9 p.m., Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Pizzas","./ComidaOpt/Hija 1.png","500px","500px");
		cambiarImagen("Birria","./ComidaOpt/Hija 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Hija 3.png","500px","500px");
		cambiarImagen("Rock","./ComidaOpt/Hija 4.png","500px","500px");
		cambiarImagen("Pulpo","./ComidaOpt/Hija 5.png","500px","500px");
		}

	hija.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Rock","./LogosOpt/Rock.png");
		cambiarImagen("Pulpo","./LogosOpt/Pulpo.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		hija.addEventListener("touchstart", function(){
			th2.innerHTML = "La Hija de la Tostada<br><br>!!! Quesadillas, Huaraches y Pambazos !!!"
			textoCambiante.innerHTML = "Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Martes 2 p.m. a 9 p.m., Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "grid";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	rock.onmouseover = function() {
		th2.innerHTML = "Rock Burger<br>!!! Hamburguesas, Alitas y Snacks !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 1 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Cafe","./ComidaOpt/Papas.png","50px","50px");
		cambiarImagen("Pizzas","./ComidaOpt/Choriburger.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/HamburguesaConPapas.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/HotDogsHawaianos.png","200px","200px");
		cambiarImagen("Birria","./ComidaOpt/Palomitas.png","200px","200px");
		cambiarImagen("Pulpo","./ComidaOpt/HamburguesaSencilla.png","200px","200px");
		cambiarImagen("Pozolitos","./ComidaOpt/HamburguesaEspecial.png","200px","200px");
		cambiarImagen("Sabores","./ComidaOpt/PapasGajo.png","200px","200px");
		cambiarImagen("Sushi","./ComidaOpt/HamburguesaPollo.png","200px","200px");
		cambiarImagen("Chapatas","./ComidaOpt/Alitas.png","200px","200px");
		cambiarImagen("Papi","./ComidaOpt/HotDogSencillo.png","200px","200px");
		cambiarImagen("Cabana","./ComidaOpt/PapasPeperoni.png","200px","200px");
		cambiarImagen("Cochi","./ComidaOpt/Platanos.png","200px","200px");
		}

	rock.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","./LogosOpt/Cafe.png");
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		cambiarImagen("Pulpo","./LogosOpt/Pulpo.png");
		cambiarImagen("Pozolitos","./LogosOpt/Pozolitos.png");
		cambiarImagen("Sabores","./LogosOpt/Sabores.png");
		cambiarImagen("Sushi","./LogosOpt/Sushi.png");
		cambiarImagen("Chapatas","./LogosOpt/Chapatas.png");
		cambiarImagen("Papi","./LogosOpt/Papidrinks_2.png	");
		cambiarImagen("Cochi","./LogosOpt/Cochinita_2.png");
		cambiarImagen("Cabana","./LogosOpt/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		rock.addEventListener("touchstart", function(){
			th2.innerHTML = "Rock Burger<br><br>!!! Hamburguesas, Alitas y Snacks !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 1 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "grid";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	pulpo.onmouseover = function() {
		th2.innerHTML = "Señor Pulpon<br>!!! Mariscos, Empanadas y Pescaditos !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Pozolitos","./ComidaOpt/Pulpo 1.png","50px","50px");
		cambiarImagen("Pizzas","./ComidaOpt/Pulpo 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Pulpo 3.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/Pulpo 4.png","200px","200px");
		cambiarImagen("Birria","./ComidaOpt/Pulpo 5.png","200px","200px");
		cambiarImagen("Rock","./ComidaOpt/Pulpo 6.png","200px","200px");
		}

	pulpo.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		cambiarImagen("Rock","./LogosOpt/Rock.png");
		cambiarImagen("Pozolitos","./LogosOpt/Pozolitos.png");
		
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		pulpo.addEventListener("touchstart", function(){
			th2.innerHTML = "Señor Pulpon<br><br>!!! Mariscos, Empanadas y Pescaditos !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "grid";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	pozolitos.onmouseover = function() {
		th2.innerHTML = "La Pozolitos<br>!!! Pozole Blanco, Verde y Rojo !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Pizzas","./ComidaOpt/Pozolitos 1.png","50px","50px");
		}

	pozolitos.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		pozolitos.addEventListener("touchstart", function(){
			th2.innerHTML = "La Pozolitos<br><br>!!! Pozole Blanco, Verde y Rojo !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "grid";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	sabores.onmouseover = function() {
		th2.innerHTML = "Sabores de la Tierra<br>!!! Ensaladas, Sandwiches y Jugos !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Pizzas","./ComidaOpt/Sabores 1.png","50px","50px");
		cambiarImagen("Rock","./ComidaOpt/Sabores 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Sabores 3.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/Sabores 4.png","200px","200px");
		cambiarImagen("Birria","./ComidaOpt/Sabores 5.png","200px","200px");
		cambiarImagen("Pulpo","./ComidaOpt/Sabores 6.png","200px","200px");
		cambiarImagen("Pozolitos","./ComidaOpt/Sabores 7.png","200px","200px");
		cambiarImagen("Papi","./ComidaOpt/Sabores 8.png","200px","200px");
		cambiarImagen("Sushi","./ComidaOpt/Sabores 9.png","200px","200px");
		cambiarImagen("Chapatas","./ComidaOpt/Sabores 10.png","200px","200px");
		}

	sabores.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Rock","./LogosOpt/Rock.png");
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		cambiarImagen("Pulpo","./LogosOpt/Pulpo.png");
		cambiarImagen("Pozolitos","./LogosOpt/Pozolitos.png");
		cambiarImagen("Sushi","./LogosOpt/Sushi.png");
		cambiarImagen("Chapatas","./LogosOpt/Chapatas.png");
		cambiarImagen("Papi","./LogosOpt/Papidrinks_2.png	");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		sabores.addEventListener("touchstart", function(){
			th2.innerHTML = "Sabores de la Tierra<br><br>!!! Ensaladas, Sandwiches y Jugos !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "grid";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	chapatas.onmouseover = function() {
		th2.innerHTML = "Pietro Chapatas<br>!!! Chapatas y Sandwiches !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		}

	chapatas.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		chapatas.addEventListener("touchstart", function(){
			th2.innerHTML = "Pietro Chapatas<br><br>!!! Chapatas y Sandwiches !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	sushi.onmouseover = function() {
		th2.innerHTML = "Sushi el de la Bici<br>!!! Sushi, Ramen y Yakimeshi !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Cafe","./ComidaOpt/Sushi 1.png","50px","50px");
		cambiarImagen("Pizzas","./ComidaOpt/Sushi 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Sushi 3.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/Sushi 4.png","200px","200px");
		cambiarImagen("Birria","./ComidaOpt/Sushi 5.png","200px","200px");
		cambiarImagen("Rock","./ComidaOpt/Sushi 6.png","200px","200px");
		cambiarImagen("Pozolitos","./ComidaOpt/Sushi 7.png","200px","200px");
		cambiarImagen("Sabores","./ComidaOpt/Sushi 8.png","200px","200px");
		cambiarImagen("Pulpo","./ComidaOpt/Sushi 9.png","200px","200px");
		cambiarImagen("Chapatas","./ComidaOpt/Sushi 10.png","200px","200px");
		}

	sushi.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","./LogosOpt/Cafe.png");
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		cambiarImagen("Rock","./LogosOpt/Rock.png");
		cambiarImagen("Pozolitos","./LogosOpt/Pozolitos.png");
		cambiarImagen("Sabores","./LogosOpt/Sabores.png");
		cambiarImagen("Pulpo","./LogosOpt/Pulpo.png");
		cambiarImagen("Chapatas","./LogosOpt/Chapatas.png");
		
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		sushi.addEventListener("touchstart", function(){
			th2.innerHTML = "Sushi el de la Bici<br><br>!!! Sushi, Ramen y Yakimeshi !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "grid";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {	
	cabana.onmouseover = function() {
		th2.innerHTML = "La Cabaña de Colinas<br>!!! Tortas, Tacos y Burritos !!!"
		textoCambiante.innerHTML = "Domingo, Lunes y Miercoles 10 a.m. a 9 p.m.<br><br>Jueves, Viernes y Sabado 10 a.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Pizzas","./ComidaOpt/Cabana 1.png","500px","500px");
		}

	cabana.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cabana.addEventListener("touchstart", function(){
			th2.innerHTML = "La Cabaña de Colinas<br><br>!!! Tortas, Tacos y Burritos !!!"
			textoCambiante.innerHTML = "Domingo, Lunes y Miercoles 10 a.m. a 9 p.m.<br><br>Jueves, Viernes y Sabado 10 a.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "grid";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {	
	papi.onmouseover = function() {
		th2.innerHTML = "Papidrinks<br>!!! Cocteleria y bebidas !!!";
		textoCambiante.innerHTML = "Miercoles, Jueves, Viernes y Sabado 2 p.m. a 10 p.m.<br><br>Domingo 2 p.m. a 9 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago";
		textoCambiante.style.fontStyle = "italic";
		}

	papi.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		papi.addEventListener("touchstart", function(){
			th2.innerHTML = "Papidrinks<br><br>!!! Cocteleria y bebidas !!!";
			textoCambiante.innerHTML = "Miercoles, Jueves, Viernes y Sabado 2 p.m. a 10 p.m.<br><br>Domingo 2 p.m. a 9 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago";
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	cochi.onmouseover = function() {
		th2.innerHTML = "Hijos de la... Cochinta Ahogada<br>!!! Cochinita, Tacos y Tortas !!!"
		textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Birria","./ComidaOpt/Cochinita 1.png","50px","50px");
		cambiarImagen("Pizzas","./ComidaOpt/Cochinita 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Cochinita 3.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/Cochinita 4.png","200px","200px");
		}

	cochi.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cochi.addEventListener("touchstart", function(){
			th2.innerHTML = "Hijos de la... Cochinta Ahogada<br><br>!!! Cochinita, Tacos y Tortas !!!"
			textoCambiante.innerHTML = "Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "grid";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "none";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	cafe.onmouseover = function() {
		th2.innerHTML = "Veintidos Cafe<br>!!! Café, Crepas y Waffles !!!"
		textoCambiante.innerHTML = "Lunes, Martes, Jueves, Viernes 3 p.m. a 10 p.m.<br><br>Sabado y Domingo 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
		textoCambiante.style.fontStyle = "italic";
		cambiarImagen("Rock","./ComidaOpt/Cafe 1.png","50px","50px");
		cambiarImagen("Pizzas","./ComidaOpt/Cafe 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Cafe 3.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/Cafe 4.png","200px","200px");
		cambiarImagen("Birria","./ComidaOpt/Cafe 5.png","200px","200px");
		cambiarImagen("Pulpo","./ComidaOpt/Cafe 6.png","200px","200px");
		cambiarImagen("Pozolitos","./ComidaOpt/Cafe 7.png","200px","200px");
		cambiarImagen("Sabores","./ComidaOpt/Cafe 8.png","200px","200px");
		cambiarImagen("Sushi","./ComidaOpt/Cafe 9.png","200px","200px");
		cambiarImagen("Chapatas","./ComidaOpt/Cafe 10.png","200px","200px");
		cambiarImagen("Papi","./ComidaOpt/Cafe 11.png","200px","200px");
		cambiarImagen("Cabana","./ComidaOpt/Cafe 12.png","200px","200px");
		cambiarImagen("Cochi","./ComidaOpt/Cafe 13.png","200px","200px");
		}

	cafe.onmouseout = function() {
		th2.innerHTML = th2org;
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Rock","./LogosOpt/Rock.png");
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		cambiarImagen("Pulpo","./LogosOpt/Pulpo.png");
		cambiarImagen("Pozolitos","./LogosOpt/Pozolitos.png");
		cambiarImagen("Sabores","./LogosOpt/Sabores.png");
		cambiarImagen("Sushi","./LogosOpt/Sushi.png");
		cambiarImagen("Chapatas","./LogosOpt/Chapatas.png");
		cambiarImagen("Papi","./LogosOpt/Papidrinks_2.png	");
		cambiarImagen("Cochi","./LogosOpt/Cochinita_2.png");
		cambiarImagen("Cabana","./LogosOpt/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cafe.addEventListener("touchstart", function(){
			th2.innerHTML = "Veintidos Cafe<br><br>!!! Café, Crepas y Waffles !!!"
			textoCambiante.innerHTML = "Lunes, Martes, Jueves, Viernes 3 p.m. a 10 p.m.<br><br>Sabado y Domingo 2 p.m. a 10 p.m.<br><br>Servicio a domicilio<br><br>Rio Lerma 24, Colinas del Lago"
			textoCambiante.style.fontStyle = "italic";
			textoCambiante.style.fontSize = "15px";
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridHija.style.display = "none";
			gridCabana.style.display = "none";
			gridSabores.style.display = "none";
			gridBirria.style.display = "none";
			gridEnchi.style.display = "none";
			gridPozolitos.style.display = "none";
			gridCafe.style.display = "grid";
		});
	}

	function cambiarImagen(idImagen, nuevaImagen, nuevoAncho, nuevoAlto) {
		document.getElementById(idImagen).src = nuevaImagen;
		nuevaImagen.width = nuevoAncho;
		nuevaImagen.height = nuevoAlto;
	}

	document.getElementById("pag_ord_1").addEventListener("click", function() {
		window.open("https://www.foodbooking.com/api/fb/jb_v_q5","_blank");
	});

	document.getElementById("pag_ord_2").addEventListener("click", function() {
		window.open("https://www.foodbooking.com/api/fb/jb_v_q5","_blank");
	});

});
