const h2 = document.querySelector("#letras");

const grupo1 = localStorage.getItem('grupo1');
const grupo2 = localStorage.getItem('grupo2');
const grupo3 = localStorage.getItem('grupo3');

const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const l4 = document.querySelector("#l4");
const Alerta = document.querySelector("#alerta");

let ganados=0;
const letras = ()=>{

    if(grupo1 != null){

        h2.textContent = '' + grupo1 ;
    };
    
    if(grupo2!=null){
    h2.textContent = h2.textContent + grupo2;
    };
    
    if(grupo3!=null){
        h2.textContent = h2.textContent +" "+ grupo3;
        };

}
let cont = 0;
    l1.addEventListener('keyup',(ev)=>{
       if (l1.value.length == 7) {
        
        if (l1.value == "Quieres" && cont !=1) {
            l1.className = "input border border-success fs-2 border-3 rounded-1"; 
            ganados++;
            cont=1;  
            if (ganados >= 4) {
                localStorage.clear();

                start();
	            update();
                Alerta.className = "alert alert-success alert-dismissible fs-5";
            } 
        }
          
       }
    });
    let cont2 = 0;
    l2.addEventListener('keyup',(ev)=>{
        ev.preventDefault(); 
        if (l2.value.length == 3) {
            
            l2.value = l2.value.toLowerCase();

         if (l2.value == "ser" && cont2 !=1) {
             l2.className = "input border border-success fs-2 border-3 rounded-1"    
             ganados++;
             cont2=1; 

             if (ganados >= 4) {
                localStorage.clear();
                start();

	            update();
                Alerta.className = "alert alert-success alert-dismissible fs-5";
            }
            }
           
        }
     });
     let cont3 = 0;
     l3.addEventListener('keyup',(ev)=>{
        ev.preventDefault(); 
        let input = l3.value
        if (input.length == 2) {

            input = l3.value.toLowerCase();

         if (input === "mi" && cont3 !=1) {
             l3.className = "input border border-success fs-2 border-3 rounded-1"    
             ganados++;
             cont3=1; 
            

             if (ganados >= 4) {
                localStorage.clear();
                start();

	            update();
                Alerta.className = "alert alert-success alert-dismissible fs-5";
            }
            }
           
        }
     });

     let cont4 = 0;
     
     l4.addEventListener('keyup',(ev)=>{
        ev.preventDefault(); 
        let input = l4.value
        if (input.length == 6) {

            input = l4.value.toLowerCase();

         if (input == "novia?" && cont4 !=1 ) {
             l4.className = "input border border-success fs-2 border-3 rounded-1"    
             ganados++;
             cont4=1; 

            
             if (ganados >= 4) {
                localStorage.clear();
                start();

	            update();
                Alerta.className = "alert alert-success alert-dismissible fs-5";
            }

            }
           
        }
     });
    

letras();

///////////pirogtenia//////////////

var gravedad = .5;
var numHijos = 12;

var numParticulas = 7;
var particulasCreadas = 0;

function crearParticula() {
	var particula = document.createElement("div");
	particula.className="particula ";

	var y = window.innerHeight;
	var x = Math.random() * window.innerWidth;

	particula.style.top = y + "px";
	particula.style.left = x + "px";

	var velocidadY = -10 - (Math.random() * 10);

	particula.setAttribute("data-velocidad-y", velocidadY);
	particula.setAttribute("data-velocidad-x", "0");
	particula.setAttribute("data-padre", "true");

	particula.style.background = getRandomColor();

	document.getElementsByTagName("body")[0].append(particula);

	particulasCreadas++;

	if (particulasCreadas < numParticulas) {
	    setTimeout(crearParticula, 50 + (Math.random() * 100));
	}
}

function start() {
	crearParticula();
}

function update() {
	var particulas = document.getElementsByClassName("particula");
	for (var p=0; p < particulas.length; p++) {
		var particula = particulas[p];

		var velocidadY = parseFloat(particula.getAttribute("data-velocidad-y"));
		velocidadY += gravedad;

		particula.setAttribute("data-velocidad-y", velocidadY);

		var top = particula.style.top ? particula.style.top : "10"; //10px
		top = parseFloat(top.replace("px", ""));
		top += velocidadY;
		particula.style.top = top + "px";

		var velocidadX = parseFloat(particula.getAttribute("data-velocidad-x"));

		var left = particula.style.left ? particula.style.left : "0";
        if (left > window.innerWidth) {
            left = window.innerWidth-90;
        }
		left = parseFloat(left.replace("px", ""));
		left += velocidadX;
		particula.style.left = left + "px";

		var padre = particula.getAttribute("data-padre");

		if (velocidadY >= 0 && padre === "true") {
			explotar(particula);
		}

		if (top > window.innerHeight) {
			particula.remove();
		}
        
	}

	setTimeout(update, 20);
}

function explotar(particula) {

	for (var h=0; h < numHijos; h++) {
		var hijo = document.createElement("div");
		hijo.className = "particula";

		hijo.style.top = particula.style.top;
		hijo.style.left = particula.style.left;
		hijo.style.background = particula.style.background;

		var velocidadY = (Math.random() * 20) - 18;
		hijo.setAttribute("data-velocidad-y", velocidadY);
		var velocidadX = (Math.random() * 16) - 8;
		hijo.setAttribute("data-velocidad-x", velocidadX);


		hijo.setAttribute("data-padre", false);

		//Agregar el hijo :) :) :)
		document.getElementsByTagName("body")[0].append(hijo);
	}

    particula.remove();
}


/* window.onload = function() {
	start();

	update();
};
 */

//utilerias
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
