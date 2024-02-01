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
	const ruta = document.getElementById("ruta1");

	let resolucion = window.innerWidth;
	let userAgent = navigator.userAgent;

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	pizzas.onmouseover = function() {
		textoCambiante.innerHTML = "AJ Pizzas al Forno<br><br>!!!Pizzas, Pastas y Ensaladas!!!<br><br>Martes, Miercoles y Domingo 2 pm a 10 pm<br><br>Jueves, Viernes y Sabado 2 pm a 10 pm";
		cambiarImagen("Cafe","Comida/Pizzas 1.png","50px","50px");
		cambiarImagen("Rock","Comida/Pizzas 2.png","500px","500px");
		cambiarImagen("Enchi","Comida/Pizzas 3.png","200px","200px");
		cambiarImagen("Hija","Comida/Pizzas 4.png","200px","200px");
		cambiarImagen("Birria","Comida/Pizzas 5.png","200px","200px");
		cambiarImagen("Pulpo","Comida/Pizzas 6.png","200px","200px");
		cambiarImagen("Pozolitos","Comida/Pizzas 7.png","200px","200px");
		cambiarImagen("Sabores","Comida/PapasGajo.png","200px","200px");
		cambiarImagen("Sushi","Comida/HamburguesaPollo.png","200px","200px");
		cambiarImagen("Chapatas","Comida/Alitas.png","200px","200px");
		cambiarImagen("Papi","Comida/HotDogSencillo.png","200px","200px");
		cambiarImagen("Cabana","Comida/PapasPepperoni.png","200px","200px");
		cambiarImagen("Cochi","Comida/Platanos.png","200px","200px");
		}

	pizzas.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","Logos/Cafe.png");
		cambiarImagen("Rock","Logos/Rock.png");
		cambiarImagen("Enchi","Logos/Enchilandia.png");
		cambiarImagen("Birria","Logos/Birrieria.png");
		cambiarImagen("Hija","Logos/Hija.png");
		cambiarImagen("Pulpo","Logos/Pulpo.png");
		cambiarImagen("Pozolitos","Logos/Pozolitos.png");
		cambiarImagen("Sabores","Logos/Sabores.png");
		cambiarImagen("Sushi","Logos/Sushi.png");
		cambiarImagen("Chapatas","Logos/Chapatas.png");
		cambiarImagen("Papi","Logos/Papi.png");
		cambiarImagen("Cochi","Logos/Cochinita_2.png");
		cambiarImagen("Cabana","Logos/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		pizzas.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "AJ Pizzas al Forno<br><br>!!!Pizzas, Pastas y Ensaladas!!!<br><br>Martes, Miercoles y Domingo 2 pm a 10 pm<br><br>Jueves, Viernes y Sabado 2 pm a 10 pm";
			gridRock.style.display = "none";
			gridCafe.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.dispay = "none";
			gridPulpo.style.display = "none";
			gridPizzas.style.display = "grid";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	rock.onmouseover = function() {
		textoCambiante.innerHTML = "Rock Burger<br><br>!!!Hamburguesas, Alitas y Snacks!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 am a 10 pm<br><br>Martes 1 pm a 10 pm"
		cambiarImagen("Cafe","Comida/Papas.png","50px","50px");
		cambiarImagen("Pizzas","Comida/Choriburger.png","500px","500px");
		cambiarImagen("Enchi","Comida/Hamburguesa_con_papas.png","200px","200px");
		cambiarImagen("Hija","Comida/HotDogHawaianos.png","200px","200px");
		cambiarImagen("Birria","Comida/Palomitas.png","200px","200px");
		cambiarImagen("Pulpo","Comida/HamburguesaSencilla.png","200px","200px");
		cambiarImagen("Pozolitos","Comida/HamburguesaEspecial.png","200px","200px");
		cambiarImagen("Sabores","Comida/PapasGajo.png","200px","200px");
		cambiarImagen("Sushi","Comida/HamburguesaPollo.png","200px","200px");
		cambiarImagen("Chapatas","Comida/Alitas.png","200px","200px");
		cambiarImagen("Papi","Comida/HotDogSencillo.png","200px","200px");
		cambiarImagen("Cabana","Comida/PapasPepperoni.png","200px","200px");
		cambiarImagen("Cochi","Comida/Platanos.png","200px","200px");
		}

	rock.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","Logos/Cafe.png");
		cambiarImagen("Pizzas","Logos/Pizzas.png");
		cambiarImagen("Enchi","Logos/Enchilandia.png");
		cambiarImagen("Birria","Logos/Birrieria.png");
		cambiarImagen("Hija","Logos/Hija.png");
		cambiarImagen("Pulpo","Logos/Pulpo.png");
		cambiarImagen("Pozolitos","Logos/Pozolitos.png");
		cambiarImagen("Sabores","Logos/Sabores.png");
		cambiarImagen("Sushi","Logos/Sushi.png");
		cambiarImagen("Chapatas","Logos/Chapatas.png");
		cambiarImagen("Papi","Logos/Papi.png");
		cambiarImagen("Cochi","Logos/Cochinita_2.png");
		cambiarImagen("Cabana","Logos/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		rock.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Rock Burger<br><br>!!!Hamburguesas, Alitas y Snacks!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 am a 10 pm<br><br>Martes 1 pm a 10 pm"
			gridPizzas.style.display = "none";
			gridCafe.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridRock.style.display = "grid";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	cafe.onmouseover = function() {
		textoCambiante.innerHTML = "Veintidos Cafe<br><br>!!!Café, Crepas y Waffles!!!<br><br>Lunes, Martes, Jueves, Viernes, Sabado y Domingo 3 pm a 10 pm<br><br>"
		cambiarImagen("Rock","Comida/Cafe 1.png","50px","50px");
		cambiarImagen("Pizzas","Comida/Cafe 2.png","500px","500px");
		cambiarImagen("Enchi","Comida/Cafe 3.png","200px","200px");
		cambiarImagen("Hija","Comida/Cafe 4.png","200px","200px");
		cambiarImagen("Birria","Comida/Cafe 5.png","200px","200px");
		cambiarImagen("Pulpo","Comida/Cafe 6.png","200px","200px");
		cambiarImagen("Pozolitos","Comida/Cafe 7.png","200px","200px");
		cambiarImagen("Sabores","Comida/Cafe 8.png","200px","200px");
		cambiarImagen("Sushi","Comida/Cafe 9.png","200px","200px");
		cambiarImagen("Chapatas","Comida/Cafe 10.png","200px","200px");
		cambiarImagen("Papi","Comida/Cafe 11.png","200px","200px");
		cambiarImagen("Cabana","Comida/Cafe 12.png","200px","200px");
		cambiarImagen("Cochi","Comida/Cafe 13.png","200px","200px");
		}

	cafe.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Rock","Logos/Rock.png");
		cambiarImagen("Pizzas","Logos/Pizzas.png");
		cambiarImagen("Enchi","Logos/Enchilandia.png");
		cambiarImagen("Birria","Logos/Birrieria.png");
		cambiarImagen("Hija","Logos/Hija.png");
		cambiarImagen("Pulpo","Logos/Pulpo.png");
		cambiarImagen("Pozolitos","Logos/Pozolitos.png");
		cambiarImagen("Sabores","Logos/Sabores.png");
		cambiarImagen("Sushi","Logos/Sushi.png");
		cambiarImagen("Chapatas","Logos/Chapatas.png");
		cambiarImagen("Papi","Logos/Papi.png");
		cambiarImagen("Cochi","Logos/Cochinita_2.png");
		cambiarImagen("Cabana","Logos/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cafe.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Veintidos Cafe<br><br>!!!Café, Crepas y Waffles!!!<br><br>Lunes, Martes, Jueves, Viernes, Sabado y Domingo 3 pm a 10 pm<br><br>"
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridSushi.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridCafe.style.display = "grid";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	enchi.onmouseover = function() {
		textoCambiante.innerHTML = "Enchilandia<br><br>!!!Enchiladas, Tacos Dorados y Malteadas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 am a 10 pm<br><br>Martes 2 pm a 10 pm"
		}

	enchi.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
	}

	if (resolucion > 500) {
	cochi.onmouseover = function() {
		textoCambiante.innerHTML = "Hijos de la... Cochinta Ahogada<br><br>!!!Cochinita, Tacos y Tortas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 am a 10 pm<br><br>Martes 2 pm a 10 pm"
		cambiarImagen("Cafe","Comida/Cochinita 1.png","50px","50px");
		cambiarImagen("Pizzas","Comida/Cochinita 2.png","500px","500px");
		cambiarImagen("Enchi","Comida/Cochinita 3.png","200px","200px");
		cambiarImagen("Hija","Comida/Cochinita 4.png","200px","200px");
		cambiarImagen("Birria","Comida/Sushi 5.png","200px","200px");
		cambiarImagen("Rock","Comida/Sushi 6.png","200px","200px");
		cambiarImagen("Pozolitos","Comida/Sushi 7.png","200px","200px");
		cambiarImagen("Sabores","Comida/Sushi 8.png","200px","200px");
		cambiarImagen("Pulpo","Comida/Sushi 9.png","200px","200px");
		cambiarImagen("Chapatas","Comida/Sushi 10.png","200px","200px");
		cambiarImagen("Papi","Comida/HotDogSencillo.png","200px","200px");
		cambiarImagen("Cabana","Comida/PapasPepperoni.png","200px","200px");
		cambiarImagen("Sushi","Comida/Platanos.png","200px","200px");
		}

	cochi.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","Logos/Cafe.png");
		cambiarImagen("Pizzas","Logos/Pizzas.png");
		cambiarImagen("Enchi","Logos/Enchilandia.png");
		cambiarImagen("Birria","Logos/Birrieria.png");
		cambiarImagen("Hija","Logos/Hija.png");
		cambiarImagen("Rock","Logos/Rock.png");
		cambiarImagen("Pozolitos","Logos/Pozolitos.png");
		cambiarImagen("Sabores","Logos/Sabores.png");
		cambiarImagen("Pulpo","Logos/Pulpo.png");
		cambiarImagen("Chapatas","Logos/Chapatas.png");
		cambiarImagen("Papi","Logos/Papi.png");
		cambiarImagen("Sushi","Logos/Sushi.png");
		cambiarImagen("Cabana","Logos/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		cochi.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Hijos de la... Cochinta Ahogada<br><br>!!!Cochinita, Tacos y Tortas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 9 am a 10 pm<br><br>Martes 2 pm a 10 pm"
			gridRock.style.display = "none";
			gridCafe.style.display = "none";
			gridSushi.style.display = "none";
			gridPulpo.style.display = "none";
			gridPizzas.style.display = "none";
			gridCochi.style.display = "grid";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {	
	cabana.onmouseover = function() {
		textoCambiante.innerHTML = "La Cabaña de Colinas<br><br>!!!Tortas, Tacos y Burritos!!!<br><br>Domingo, Lunes y Miercoles 10 am a 9 pm<br><br>Jueves, Viernes y Sabado 10 am a 10 pm"
		}

	cabana.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	hija.onmouseover = function() {
		textoCambiante.innerHTML = "La Hija de la Tostada<br><br>!!!Quesadillas, Huaraches y Pambazos!!!<br><br>Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 9 p.m."
		}

	hija.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	papi.onmouseover = function() {
		textoCambiante.innerHTML = "Papidrinks<br><br>!!!Bebidas, Cocteles y Litros!!!<br><br>Miercoles, Jueves, Viernes y Sabado 2 p.m. a 10 p.m.<br><br>Domingo 2 p.m. a 9 p.m."
		}

	papi.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	sabores.onmouseover = function() {
		textoCambiante.innerHTML = "Sabores de la Tierra<br><br>!!!Ensaladas, Sandwiches y Jugoterapia!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 am a 10 pm<br><br>Martes 2 pm a 10 pm"
		}

	sabores.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	pulpo.onmouseover = function() {
		textoCambiante.innerHTML = "Seños Pulpon<br><br>!!!Sushi, Ramen y Yakimeshi!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 am a 10 pm<br><br>Martes 2 pm a 10 pm"
		cambiarImagen("Cafe","Comida/Pulpo 1.png","50px","50px");
		cambiarImagen("Pizzas","Comida/Pulpo 2.png","500px","500px");
		cambiarImagen("Enchi","Comida/Pulpo 3.png","200px","200px");
		cambiarImagen("Hija","Comida/Pulpo 4.png","200px","200px");
		cambiarImagen("Birria","Comida/Pulpo 5.png","200px","200px");
		cambiarImagen("Rock","Comida/Pulpo 6.png","200px","200px");
		cambiarImagen("Pozolitos","Comida/HamburguesaEspecial.png","200px","200px");
		cambiarImagen("Sabores","Comida/PapasGajo.png","200px","200px");
		cambiarImagen("Sushi","Comida/HamburguesaPollo.png","200px","200px");
		cambiarImagen("Chapatas","Comida/Alitas.png","200px","200px");
		cambiarImagen("Papi","Comida/HotDogSencillo.png","200px","200px");
		cambiarImagen("Cabana","Comida/PapasPepperoni.png","200px","200px");
		cambiarImagen("Cochi","Comida/Platanos.png","200px","200px");
		}

	pulpo.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","Logos/Cafe.png");
		cambiarImagen("Pizzas","Logos/Pizzas.png");
		cambiarImagen("Enchi","Logos/Enchilandia.png");
		cambiarImagen("Birria","Logos/Birrieria.png");
		cambiarImagen("Hija","Logos/Hija.png");
		cambiarImagen("Rock","Logos/Rock.png");
		cambiarImagen("Pozolitos","Logos/Pozolitos.png");
		cambiarImagen("Sabores","Logos/Sabores.png");
		cambiarImagen("Sushi","Logos/Sushi.png");
		cambiarImagen("Chapatas","Logos/Chapatas.png");
		cambiarImagen("Papi","Logos/Papi.png");
		cambiarImagen("Cochi","Logos/Cochinita_2.png");
		cambiarImagen("Cabana","Logos/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		pulpo.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Hijos de la... Cochinta Ahogada<br><br>!!!Cochinita, Tacos y Tortas!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 am a 10 pm<br><br>Martes 2 pm a 10 pm"
			gridRock.style.display = "none";
			gridCafe.style.display = "none";
			gridSushi.style.display = "none";
			gridPizzas.style.display = "none";
			gridCochi.style.dispay = "none";
			gridPulpo.style.display = "grid";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	sushi.onmouseover = function() {
		textoCambiante.innerHTML = "Sushi el de la Bici<br><br>!!!Sushi, Ramen y Yakimeshi!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 am a 10 pm<br><br>Martes 2 pm a 10 pm"
		cambiarImagen("Cafe","Comida/Sushi 1.png","50px","50px");
		cambiarImagen("Pizzas","Comida/Sushi 2.png","500px","500px");
		cambiarImagen("Enchi","Comida/Sushi 3.png","200px","200px");
		cambiarImagen("Hija","Comida/Sushi 4.png","200px","200px");
		cambiarImagen("Birria","Comida/Sushi 5.png","200px","200px");
		cambiarImagen("Rock","Comida/Sushi 6.png","200px","200px");
		cambiarImagen("Pozolitos","Comida/Sushi 7.png","200px","200px");
		cambiarImagen("Sabores","Comida/Sushi 8.png","200px","200px");
		cambiarImagen("Pulpo","Comida/Sushi 9.png","200px","200px");
		cambiarImagen("Chapatas","Comida/Sushi 10.png","200px","200px");
		cambiarImagen("Papi","Comida/HotDogSencillo.png","200px","200px");
		cambiarImagen("Cabana","Comida/PapasPepperoni.png","200px","200px");
		cambiarImagen("Cochi","Comida/Platanos.png","200px","200px");
		}

	sushi.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
		cambiarImagen("Cafe","Logos/Cafe.png");
		cambiarImagen("Pizzas","Logos/Pizzas.png");
		cambiarImagen("Enchi","Logos/Enchilandia.png");
		cambiarImagen("Birria","Logos/Birrieria.png");
		cambiarImagen("Hija","Logos/Hija.png");
		cambiarImagen("Rock","Logos/Rock.png");
		cambiarImagen("Pozolitos","Logos/Pozolitos.png");
		cambiarImagen("Sabores","Logos/Sabores.png");
		cambiarImagen("Pulpo","Logos/Pulpo.png");
		cambiarImagen("Chapatas","Logos/Chapatas.png");
		cambiarImagen("Papi","Logos/Papi.png");
		cambiarImagen("Cochi","Logos/Cochinita_2.png");
		cambiarImagen("Cabana","Logos/Cabana.png");
	}
	}
	else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)){
		sushi.addEventListener("touchstart", function(){
			textoCambiante.innerHTML = "Sushi el de la Bici<br><br>!!!Sushi, Ramen y Yakimeshi!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 am a 10 pm<br><br>Martes 2 pm a 10 pm"
			gridPizzas.style.display = "none";
			gridRock.style.display = "none";
			gridCafe.style.display = "none";
			gridCochi.style.display = "none";
			gridPulpo.style.display = "none";
			gridSushi.style.display = "grid";
		});
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	pozolitos.onmouseover = function() {
		textoCambiante.innerHTML = "La Pozolitos<br><br>!!!Pozole Blanco, Verde y Rojo!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 10 am a 10 pm<br><br>Martes 2 pm a 10 pm"
		}

	pozolitos.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	chapatas.onmouseover = function() {
		textoCambiante.innerHTML = "Pietro Chapatas<br><br>!!!Chapatas y Sandwiches!!!<br><br>Lunes, Miercoles, Jueves, Viernes, Sabado y Domingo 7:30 am a 10 pm<br><br>Martes 2 pm a 10 pm"
		}

	chapatas.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
	}

	if (resolucion > 500 && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent))) {
	birria.onmouseover = function() {
		textoCambiante.innerHTML = "La Birrieria<br><br>!!!Birria, Tacos y Quesabirrias!!!<br><br>Domingo, Lunes, Miercoles y Jueves 8 a.m. a 9 p.m.<br><br>Viernes y Sabado 8 a.m. a 10 p.m.<br><br>Martes 2 p.m. a 9 p.m."
		}

	birria.onmouseout = function() {
		textoCambiante.innerHTML = miTexto;
	}
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

	function cambiarImagen(idImagen, nuevaImagen, nuevoAncho, nuevoAlto) {
		document.getElementById(idImagen).src = nuevaImagen;
		nuevaImagen.width = nuevoAncho;
		nuevaImagen.height = nuevoAlto;
	}

	function restaurarImagen(idImagen, imagenOriginal) {
		document.getElementById(IdImagen).src = imagenOriginal
	}

	document.getElementById("pag_ord_1").addEventListener("click", function() {
		window.open("https://menu.fu.do/larutadelsabor","_blank");
	});

	document.getElementById("pag_ord_2").addEventListener("click", function() {
		window.open("https://menu.fu.do/larutadelsabor","_blank");
	});

});