body {
	background: #567
}

@media screen and (min-width: 875px) {
h1 {
	font-size: 40px;
	font-style: bold;
	
	display: none;
	
}

h2 {
	font-size: 30px;
	margin-top: 20px;
}

h3 {
	font-size: 25px;
	font-weight: normal;
	font-style: italic;	
}

h4 {
	font-size: 25px;
	font-weight: normal;
	font-style: italic;
}

h5 {
	font-size: 30px;
	font-style: italic;
	margin: 2px;
}

p {
	font-size: 30px;
}

.contact {
	display: flex;
	font-size: 40px;
	font-weight: bold;
	color: white;
	text-align: center;
}

.foot {
	font-size: 40px;
}

.footer-contacts {
	margin-top: 10px;
	display: grid;
	grid-template-areas: 
	"face whats"

}

.face {
	justify-self: start;
	align-self: start;
	grid-area: face;
}

.whats {
	justify-self: end;
	align-self: end;
	grid-area: whats;
}

.grid-container {
	background: lightblue;
	display: grid;
	text-align:  center;
	align-items: center;
	justify-items: center;
	
	grid-template-rows: 120px;
	grid-auto-flow: dense;
	border-top: 3px solid #000;
	border-left: 3px solid #000;
	border-right: 3px solid #000;
	grid-template-areas: 
	"ordena1 logo1 letras logo2 ordena2";
	}

.sectionHs {
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: center;
}

.grid-img-png {
	width: 100%;
	max-width: 500px;
	min-width: 300px;
	height: auto;
	padding-left: 5px;
	padding-top: 5px;
	align-items: center;
	justify-items: center;
	grid-area: letras;
}

.grid-img-left {
	width: 100%;
	max-width: 110px;
	min-width: 75px;
	height: auto;
	padding-right: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: right;
	grid-area: logo1;
}

.grid-img-right {
	width: 100%;
	max-width: 110px;
	min-width: 75px;
	height: auto;
	padding-left: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: left;
	grid-area: logo2;
}

.ordenar1 {
	width: 100%;
	max-width: 160px;
	min-width: 75px;
	padding-left: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: center;
	grid-area: ordena1;

}

.ordenar2 {
	width: 100%;
	max-width: 160px;
	min-width: 75px;
	padding-left: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: center;
	grid-area: ordena2;

}

.imagenes-izquierda {
	background: lightblue;
	text-align: center;
	text-justify: initial;
	display: grid;
	border-left: 3px solid #000;
	border-right: 3px solid #000;
	border-bottom: 3px solid #000;

	grid-auto-flow: dense;
	grid-template-areas: 
	"pizzas texto texto texto texto texto texto cafe" 
	"birria texto texto texto texto texto texto cochi"
	"enchi texto texto texto texto texto texto cabana"
	"hija rock pulpo pozolitos sabores sushi chapatas papi";
	

}

.parrafo-hid {
	display: none;
}

.gridtextohid {
	display: none;
	background: lightyellow;
	border-left: 3px solid darkgoldenrod;
	
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes {
	display:none;
}

.grid-imagenes-pizzas {
	display: none;
}

.grid-imagenes-pozolitos {
	display: none;
}

.grid-imagenes-sabores {
	display: none;
}

.grid-imagenes-hija {
	display: none;
}

.grid-imagenes-papi {
	display: none;
}

.grid-imagenes-birria {
	display: none;
}

.grid-imagenes-cabana {
	display: none;
}

.grid-imagenes-enchi {
	display: none;
}

.grid-imagenes-rock {
	display: none;
}

.grid-imagenes-cochi {
	display: none;
}

.grid-imagenes-sushi {
	display: none;
}

.grid-imagenes-pulpo {
	display: none;
}

.grid-imagenes-cafe {
	display: none;
}	

.grid-item {	
	width: 100%;
	max-width: 1200px;
	max-height: 60vw;
	display: grid;
	grid-area: texto;
	margin-top: 5px;
	font-size: 25px;
	background: lightyellow;
	border: 3px solid #000;
	padding-bottom: 25px;
	

}

.img-left-pizzas {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	align-self: center;
	justify-self: center;
	grid-area: pizzas;
	transition: transform 0.3s ease;
}

.ordenar1:hover {
	transform: scale(1.2);
}

.ordenar2:hover {
	transform: scale(1.2);
}

.img-left-pizzas:hover {
	transform: scale(1.2);
}

.img-left-rock:hover {
	transform: scale(1.1);
}

.img-left-hija:hover {
	transform: scale(1.2);
}

.img-left-enchi:hover {
	transform: scale(1.2);
}

.img-left-pulpo:hover {
	transform: scale(1.2);
}

.img-left-birria:hover {
	transform: scale(1.2);
}

.img-left-pozolitos:hover {
	transform: scale(1.2);
}

.img-right-papi:hover {
	transform: scale(1.2);
}

.img-right-cochi:hover {
	transform: scale(1.2);
}

.img-right-cabana:hover {
	transform: scale(1.2);
}

.img-right-sushi:hover {
	transform: scale(1.2);
}

.img-right-sabores:hover {
	transform: scale(1.2);
}

.img-right-chapatas:hover {
	transform: scale(1.2);
}

.img-right-cafe:hover {
	transform: scale(1.2);
}


.img-right-cafe {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: cafe;
	
}

.img-left-enchi {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: enchi;
	
}

.img-right-cochi {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: cochi;
	
}


.img-left-birria {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: birria;
	
}

.img-right-cabana {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: cabana;
	
}

.img-left-hija {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: hija;
	
}

.img-right-papi {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: papi;
	
}

.img-left-rock {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 90%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: rock;
	
}

.img-right-sabores {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: sabores;
	align-self: center;
	justify-self: center;
}


.img-left-pulpo {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: pulpo;
	align-self: center;
	justify-self: center;
	
}

.img-right-sushi {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: sushi;
	align-self: center;
	justify-self: center;
	
}

.img-left-pozolitos {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: pozolitos;
	align-self: center;
	justify-self: center;
	
}
.img-right-chapatas {
	display: grid;
	max-width: 110px;
	max-height: 110px;
	min-width: 85px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: chapatas;
	align-self: center;
	justify-self: center;

}

.mapa {
	display: grid;
	border-right: 3px solid #000;
	max-width: 100%;
	width: 100%;
	grid-area: mapa;
}

.img-ruta {
	display: grid;
	height: 400px;
	max-width: 100%;
	width: 100%;
	grid-area: ruta;

}

.mapa-ruta{
	background: #9ee;
	display: grid;
	margin-top: 10px;
	grid-template-columns: 45% 55%;
	border: 3px solid #000;
	
	grid-auto-flow: dense;
	grid-template-areas: 
	"mapa ruta"
}

.grid-bandas {
	background: #77e;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 50px 1fr;
	justify-items: center;
	align-items: center;
	font-size: 40px;
	margin-top: 10px;
	font-family: fantasy;
	gap: 10px;
	padding: 10px;
	border: 3px solid #000;
	
}

.banda-jueves {
	display: grid;
	width: 100%;
	max-height: 500px;
	height: 100%;
	object-fit: scale-down;
	overflow: hidden;
}

.banda-viernes {
	display: grid;
	width: 100%;
	max-height: 500px;
	height: 100%;
	object-fit: scale-down;
	overflow: hidden;
}

.banda-sabado {
	display: grid;
	width: 100%;
	max-height: 500px;
	height: 100%;
	object-fit: scale-down;
	overflow: hidden;
}
	
}

@media screen and (min-width: 575px) and (max-width: 874px) {
h1 {
	font-size: 30px;
	display: none;
}

h2 {
	font-size: 15px;
}

h3 {
	font-size: 15px;
}

h4 {
	font-size: 15px;
}

h5 {
	font-size: 15px;
}

p {
	font-size: 15px;
}

.foot {
	font-size: 20px;
}

.grid-container {
	background: lightblue;
	display: grid;
	text-align:  center;
	align-items: center;
	justify-items: center;
	
	
	grid-auto-flow: dense;
	border-top: 3px solid #000;
	border-left: 3px solid #000;
	border-right: 3px solid #000;
	grid-template-areas: 
	"ordena1 logo1 letras logo2 ordena2";
	}


.grid-img-png {
	width: 100%;
	max-width: 500px;
	min-width: 100px;
	height: auto;
	padding-left: 5px;
	padding-top: 5px;
	align-items: center;
	justify-items: center;
	grid-area: letras;
}

.grid-img-left {
	width: 100%;
	max-width: 90px;
	min-width: 40px;
	height: auto;
	padding-right: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: center	;
	grid-area: logo1;
}

.grid-img-right {
	width: 100%;
	max-width: 90px;
	min-width: 40px;
	height: auto;
	padding-left: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: center;
	grid-area: logo2;
}

.ordenar1 {
	width: 100%;
	max-width: 120px;
	min-width: 45px;
	padding-left: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: center;
	grid-area: ordena1;

}

.ordenar2 {
	width: 100%;
	max-width: 120px;
	min-width: 45px;
	padding-left: 5px;
	padding-top: 5px;
	padding-bottom: 5px;
	align-items: center;
	justify-self: center;
	grid-area: ordena2;

}

.imagenes-izquierda {
	background: lightblue;
	text-align: center;
	text-justify: initial;
	display: grid;
	border-left: 3px solid #000;
	border-right: 3px solid #000;
	border-bottom: 3px solid #000;
	max-width: 875px;
	min-width: 300px;
	grid-auto-flow: dense;
	grid-template-areas: 
	"pizzas texto texto texto texto texto texto cafe" 
	"birria texto texto texto texto texto texto cochi"
	"enchi texto texto texto texto texto texto cabana"
	"hija rock pulpo pozolitos sabores sushi chapatas papi";
}

.grid-imagenes-pizzas {
	display: none;
}

.grid-imagenes-sabores {
	display: none;
}

.grid-imagenes-hija {
	display: none;
}

.grid-imagenes-birria {
	display: none;
}

.grid-imagenes-pozolitos {
	display: none;
}

.grid-imagenes-cabana {
	display: none;
}

.grid-imagenes-rock {
	display: none;
}

.grid-imagenes-cochi {
	display: none;
}

.grid-imagenes-papi {
	display: none;
}

.grid-imagenes-enchi {
	display: none;
}

.grid-imagenes-sushi {
	display: none;
}

.grid-imagenes-pulpo {
	display: none;
}

.grid-imagenes-cafe {
	display: none;
}

.grid-imagenes {
	display:none;
}

.grid-item {	
	width: 100%;
	max-width: 700px;
	
	display: grid;
	grid-area: texto;
	
	background: lightyellow;
	border: 3px solid #000;
	
}

.parrafo-hid {
	display: none;
}

.sectionHs {
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: center;
}

.gridtextohid {
	display: none;
	background: lightyellow;
	border-left: 3px solid darkgoldenrod;
	
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}


.img-left-pizzas {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	align-self: center;
	justify-self: center;
	grid-area: pizzas;
}

.ordenar1:hover {
	transform: scale(1.2);
}

.ordenar2:hover {
	transform: scale(1.2);
}

.img-left-pizzas:hover {
	transform: scale(1.2);
}

.img-left-rock:hover {
	transform: scale(1.2);
}

.img-left-hija:hover {
	transform: scale(1.2);
}

.img-left-enchi:hover {
	transform: scale(1.2);
}

.img-left-pulpo:hover {
	transform: scale(1.2);
}

.img-left-birria:hover {
	transform: scale(1.2);
}

.img-left-pozolitos:hover {
	transform: scale(1.2);
}

.img-right-papi:hover {
	transform: scale(1.2);
}

.img-right-cochi:hover {
	transform: scale(1.2);
}

.img-right-cabana:hover {
	transform: scale(1.2);
}

.img-right-sushi:hover {
	transform: scale(1.2);
}

.img-right-sabores:hover {
	transform: scale(1.2);
}

.img-right-chapatas:hover {
	transform: scale(1.2);
}

.img-right-cafe:hover {
	transform: scale(1.2);
}


.img-right-cafe {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: cafe;
	
}

.img-left-enchi {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: enchi;
	
}

.img-right-cochi {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: cochi;
	
}


.img-left-birria {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: birria;
	
}

.img-right-cabana {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: cabana;
	
}

.img-left-hija {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: hija;
	
}

.img-right-papi {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: papi;
	
}

.img-left-rock {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	overflow: hidden;
	object-fit: contain;
	align-self: center;
	justify-self: center;
	grid-area: rock;
	
}

.img-right-sabores {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: sabores;
	align-self: center;
	justify-self: center;
}


.img-left-pulpo {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: pulpo;
	align-self: center;
	justify-self: center;
	
}

.img-right-sushi {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: sushi;
	align-self: center;
	justify-self: center;
	
}

.img-left-pozolitos {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: pozolitos;
	align-self: center;
	justify-self: center;
	
}
.img-right-chapatas {
	display: grid;
	max-width: 80px;
	max-height: 80px;
	min-width: 65px;
	width: 100%;
	
	height: auto;
	object-fit: contain;
	overflow: hidden;
	grid-area: chapatas;
	align-self: center;
	justify-self: center;

}

.mapa {
	display: grid;
	border-right: 3px solid #000;
	max-width: 100%;
	width: 100%;
	grid-area: mapa;
}

.img-ruta {
	display: grid;
	height: 300px;
	max-width: 100%;
	width: 100%;
	grid-area: ruta;

}

.mapa-ruta{
	background: #9ee;
	display: grid;
	margin-top: 10px;
	grid-template-columns: 45% 55%;
	border: 3px solid #000;
	
	grid-auto-flow: dense;
	grid-template-areas: 
	"mapa ruta"
}

.grid-bandas {
	background: #77e;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 50px 1fr;
	justify-items: center;
	align-items: center;
	font-size: 40px;
	margin-top: 10px;
	font-family: fantasy;
	gap: 10px;
	padding: 10px;
	border: 3px solid #000;
	
}

.banda-jueves {
	display: grid;
	width: 100%;
	max-height: 500px;
	height: 100%;
	object-fit: scale-down;
	overflow: hidden;
}

.banda-viernes {
	display: grid;
	width: 100%;
	max-height: 500px;
	height: 100%;
	object-fit: scale-down;
	overflow: hidden;
}

.banda-sabado {
	display: grid;
	width: 100%;
	max-height: 500px;
	height: 100%;
	object-fit: scale-down;
	overflow: hidden;
}
	
}


@media screen and (max-width: 574px) {

h1 {
	font-size: 23px;
	display: none;
}

h2 {
	font-size: 20px;
	margin-top: 5px;
	margin-bottom: 15px;
}

h3 {
	font-size: 12px;
	font-weight: normal;
	font-style: italic;
}

h4 {
	font-size: 12px;
	font-weight: normal;
	font-style: italic;
}

h5 {
	font-size: 12px;
	margin-top: 20px;
	margin-bottom: 20px;
}

p {
	font-size: 13px;
}
	.grid-container {
		background: lightblue;
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: 60px;
		grid-auto-flow: dense;
		border-right: 3px solid darkgoldenrod;
		border-top: 3px solid darkgoldenrod;	
		border-left: 3px solid darkgoldenrod;
	}

	.grid-img-png { 
	max-width: 215px;
	height: auto;
	padding-top: 5px;
	justify-self: center;
	align-self: center;

}

.grid-img-left {
	width: 50px;
	height: 50px;
	min-width: 50px;
	margin-left: 10px;
	justify-self: center;
	align-self: center;
}

.grid-img-right {
	display: none;
}

.ordenar1 {
	display: none;
}

.ordenar2 {
	width: 70px;
	justify-self: center;
	align-self: center;
}

.gridtextohid {
	display: grid;
	background: lightyellow;
	border-left: 3px solid darkgoldenrod;
	
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.imagenes-izquierda {
	background: lightblue;
	text-align: center;
	display: grid;
	
	border-left: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 50px;
	grid-template-areas: 
	"pizzas texto texto texto texto" 
	"birria texto texto texto texto"
	"enchi texto texto texto texto"
	"sushi texto texto texto texto"
	"hija texto texto texto texto" 
	"pulpo texto texto texto texto"
	"cafe img img img img"
	"pozolitos img img img img"
	"cochi img img img img"
	"cabana papi rock sabores chapatas";

}

.grid-imagenes-pizzas {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-hija {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-cabana {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-enchi {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-papi {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-birria {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-sabores {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-pozolitos {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-rock {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-cafe {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-sushi {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-cochi {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-imagenes-pulpo {
	display: none;
	background: lightblue;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: repeat(3, 50px);
	border-left: 3px solid darkgoldenrod;
	border-right: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	grid-area: img;
	justify-content: center;
	align-content: center;
	justify-items: center;
	align-items: center;
}

.grid-item {
	display: grid;
	grid-area: texto;
	font-size: 5px;
	background: lightyellow;
	margin-top: 10px;
	padding: 20px;
	border-left: 3px solid darkgoldenrod;
	border-bottom: 3px solid darkgoldenrod;
	border-top: 3px solid darkgoldenrod;
	text-align: center;
	text-justify: center;
}

.sectionHs {
	justify-items: center;
	align-items: center;
	justify-content: center;
	align-content: center;
}

.img-left-pizzas {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: pizzas;
}



.img-right-cafe {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: cafe;
	
}

.img-left-enchi {
	display: grid;
	width: 50px;
	height: 50px;
	
	align-self: center;
	justify-self: center;
	grid-area: enchi;
	
}

.img-right-cochi {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: cochi;
	
}


.img-left-birria {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: birria;
	
}

.img-right-cabana {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: cabana;
	
}

.img-left-hija {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: hija;
	
}

.img-right-papi {
	display: grid;
	width: 50px;
	height: 50px;
	align-self: center;
	justify-self: center;
	grid-area: papi;
	
}

.img-left-rock {
	display: grid;
	width: 50px;
	height: 50px;
	align-self: center;
	justify-self: center;
	grid-area: rock;
	
}

.img-right-sabores {
	display: grid;
	width: 50px;
	height: 50px;
	align-self: center;
	justify-self: center;
	grid-area: sabores;
	
}


.img-left-pulpo {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: pulpo;
	
}

.img-right-sushi {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: sushi;
	
}

.img-left-pozolitos {
	display: grid;
	width: 50px;
	height: 50px;
	margin: 5px auto;
	align-self: center;
	justify-self: center;
	grid-area: pozolitos;
	
}
.img-right-chapatas {
	display: grid;
	width: 50px;
	height: 50px;
	align-self: center;
	justify-self: center;
	grid-area: chapatas;

}

.mapa {
	display: grid;
	width: 100%;
	max-height: 197px;
	grid-area: mapa;
	
}

.img-ruta {
	display: grid;
	width: 100%;
	max-height: 197px;
	grid-area: ruta;
	border-top: 3px solid darkgoldenrod;

}

.mapa-ruta{
	background: #9ee;
	display: grid;
	border: 3px solid darkgoldenrod;
	grid-template-rows: 200px 200px;
	margin-top: 10px;
	grid-template-areas: 
	"mapa" 
	"ruta";
	
}

.grid-bandas {
	background: #77e;
	display: grid;
	justify-items: center;
	align-items: center;
	font-size: 40px;
	margin-top: 10px;
	font-family: fantasy;
	gap: 10px;
	padding: 10px;
	border: 3px solid darkgoldenrod;
	grid-template-areas:  
	"jueves"
	"bandaj"
	"vierens"
	"bandav"
	"sabado"
	"bandas";
	
}

.banda-jueves {
	display: grid;
	width: 100%;
	height: auto;
	object-fit: scale-down;
	overflow: hidden;
	grid-area: bandaj;
}

.banda-viernes {
	display: grid;
	width: 100%;
	height: auto;
	object-fit: scale-down;
	overflow: hidden;
	grid-area: bandav;
}

.banda-sabado {
	display: grid;
	width: 100%;
	height: auto;
	object-fit: scale-down;
	overflow: hidden;
	grid-area: bandas;
}

.foot {
	font-size: 15px;
}

.contact {
	
	font-size: 14px;
	font-weight: bold;
	color: white;
	
}

.parrafo-hid {
	display: none;
}


.footer-contacts {
	margin-top: 5px;
	display: grid;
	grid-template-areas: 
	"face whats"

}

.face {
	justify-self: start;
	align-self: start;
	grid-area: face;
}

.whats {
	justify-self: end;
	align-self: end;
	grid-area: whats;
}


}
