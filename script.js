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

	let resolucion = window.innerWidth;
	let userAgent = navigator.userAgent;

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	pizzas.onmouseover = function() {
		textoCambiante.innerHTML = "AJ Pizzas al Forno<br><br>!!!Pizzas, Pastas y Ensaladas!!!<br><br>Martes, Miercoles y Domingo 2 p.m. a 10 p.m.<br><br>Jueves, Viernes y Sabado 2 p.m. a 10 p.m.<br><br>Servicio a domicilio";
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
		cambiarImagen("Papi","./LogosOpt/Papi.png");
		cambiarImagen("Cochi","./LogosOpt/Cochinita_2.png");
		cambiarImagen("Cabana","./LogosOpt/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		pizzas.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "AJ Pizzas al Forno<br><br>!!!Pizzas, Pastas y Ensaladas!!!<br><br>Martes, Miercoles y Domingo 2 p.m. a 10 p.m.<br><br>Jueves, Viernes y Sabado 2 p.m. a 10 p.m.<br><br>Servicio a domicilio";
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
		textoCambiante.innerHTML = "La Birrieria<br><br>!!!Birria, Tacos y Quesabirrias!!!<br><br>Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 9 p.m."
		cambiarImagen("Pizzas","./ComidaOpt/Birria 1.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Birria 2.png","200px","200px");
		}

	birria.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		birria.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "La Birrieria<br><br>!!!Birria, Tacos y Quesabirrias!!!<br><br>Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 9 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "Enchilandia<br><br>!!!Enchiladas, Tacos Dorados y Malteadas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
		cambiarImagen("Pizzas","./ComidaOpt/Enchilandia 1.png","500px","500px");
		
		}

	enchi.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		enchi.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Enchilandia<br><br>!!!Enchiladas, Tacos Dorados y Malteadas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "La Hija de la Tostada<br><br>!!!Quesadillas, Huaraches y Pambazos!!!<br><br>Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 9 p.m."
		cambiarImagen("Pizzas","./ComidaOpt/Hija 1.png","500px","500px");
		cambiarImagen("Birria","./ComidaOpt/Hija 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Hija 3.png","500px","500px");
		cambiarImagen("Rock","./ComidaOpt/Hija 4.png","500px","500px");
		cambiarImagen("Pulpo","./ComidaOpt/Hija 5.png","500px","500px");
		}

	hija.onmouseout = function() {
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
			textoCambiante.innerHTML = "La Hija de la Tostada<br><br>!!!Quesadillas, Huaraches y Pambazos!!!<br><br>Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 9 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "Rock Burger<br><br>!!!Hamburguesas, Alitas y Snacks!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 1 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		cambiarImagen("Papi","./LogosOpt/Papi.png");
		cambiarImagen("Cochi","./LogosOpt/Cochinita_2.png");
		cambiarImagen("Cabana","./LogosOpt/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		rock.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Rock Burger<br><br>!!!Hamburguesas, Alitas y Snacks!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 1 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "Señor Pulpon<br><br>!!!Sushi, Ramen y Yakimeshi!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
		cambiarImagen("Pozolitos","./ComidaOpt/Pulpo 1.png","50px","50px");
		cambiarImagen("Pizzas","./ComidaOpt/Pulpo 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Pulpo 3.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/Pulpo 4.png","200px","200px");
		cambiarImagen("Birria","./ComidaOpt/Pulpo 5.png","200px","200px");
		cambiarImagen("Rock","./ComidaOpt/Pulpo 6.png","200px","200px");
		}

	pulpo.onmouseout = function() {
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
			textoCambiante.innerHTML = "Señor Pulpon<br><br>!!!Sushi, Ramen y Yakimeshi!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "La Pozolitos<br><br>!!!Pozole Blanco, Verde y Rojo!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
		cambiarImagen("Pizzas","./ComidaOpt/Pozolitos 1.png","50px","50px");
		}

	pozolitos.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		pozolitos.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "La Pozolitos<br><br>!!!Pozole Blanco, Verde y Rojo!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "Sabores de la Tierra<br><br>!!!Ensaladas, Sandwiches y Jugoterapia!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		cambiarImagen("Papi","./LogosOpt/Papi.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		sabores.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Sabores de la Tierra<br><br>!!!Ensaladas, Sandwiches y Jugoterapia!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
	sushi.onmouseover = function() {
		textoCambiante.innerHTML = "Sushi el de la Bici<br><br>!!!Sushi, Ramen y Yakimeshi!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
			textoCambiante.innerHTML = "Sushi el de la Bici<br><br>!!!Sushi, Ramen y Yakimeshi!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "La Cabaña de Colinas<br><br>!!!Tortas, Tacos y Burritos!!!<br><br>Domingo, Lunes y Miercoles 10 a.m. a 9 p.m.<br><br>Jueves, Viernes y Sabado 10 a.m. a 10 p.m.<br><br>Servicio a domicilio"
		cambiarImagen("Pizzas","./ComidaOpt/Cabana 1.png","500px","500px");
		}

	cabana.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cabana.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "La Cabaña de Colinas<br><br>!!!Tortas, Tacos y Burritos!!!<br><br>Domingo, Lunes y Miercoles 10 a.m. a 9 p.m.<br><br>Jueves, Viernes y Sabado 10 a.m. a 10 p.m.<br><br>Servicio a domicilio"
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
	cochi.onmouseover = function() {
		textoCambiante.innerHTML = "Hijos de la... Cochinta Ahogada<br><br>!!!Cochinita, Tacos y Tortas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
		cambiarImagen("Birria","./ComidaOpt/Cochinita 1.png","50px","50px");
		cambiarImagen("Pizzas","./ComidaOpt/Cochinita 2.png","500px","500px");
		cambiarImagen("Enchi","./ComidaOpt/Cochinita 3.png","200px","200px");
		cambiarImagen("Hija","./ComidaOpt/Cochinita 4.png","200px","200px");
		}

	cochi.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Pizzas","./LogosOpt/Pizzas.png");
		cambiarImagen("Enchi","./LogosOpt/Enchilandia.png");
		cambiarImagen("Birria","./LogosOpt/Birrieria.png");
		cambiarImagen("Hija","./LogosOpt/Hija.png");
		
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cochi.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Hijos de la... Cochinta Ahogada<br><br>!!!Cochinita, Tacos y Tortas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		textoCambiante.innerHTML = "Veintidos Cafe<br><br>!!!Café, Crepas y Waffles!!!<br><br>Lunes, Martes, Jueves, Viernes 3 p.m. a 10 p.m.<br><br>Sabado y Domingo 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
		cambiarImagen("Papi","./LogosOpt/Papi.png");
		cambiarImagen("Cochi","./LogosOpt/Cochinita_2.png");
		cambiarImagen("Cabana","./LogosOpt/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cafe.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Veintidos Cafe<br><br>!!!Café, Crepas y Waffles!!!<br><br>Lunes, Martes, Jueves, Viernes 3 p.m. a 10 p.m.<br><br>Sabado y Domingo 2 p.m. a 10 p.m.<br><br>Servicio a domicilio"
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
