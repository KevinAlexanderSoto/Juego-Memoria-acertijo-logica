/* Referencias HTML */
const Check1 = document.querySelector("#Check1");
const Check2 = document.querySelector("#Check2");
const Check3 = document.querySelector("#Check3");
const Check4 = document.querySelector("#Check4");
const Check5 = document.querySelector("#Check5");

const Alerta = document.querySelector('#alerta');
const parra = document.querySelector('#parra');

const formulario = document.querySelector("#formulario");
window.addEventListener('DOMContentLoaded',(event)=>{
 // Mostrar el toast
 const toastEl = document.querySelector('#toast');
 const toast = new bootstrap.Toast( toastEl );
 toast.show();
});
formulario.addEventListener('submit',(ev)=>{
    ev.preventDefault();
const Check1 = ev.target[0].checked;
const Check2 = ev.target[1].checked;
const Check3 = ev.target[2].checked;
const Check4 = ev.target[3].checked;
const Check5 = ev.target[4].checked;

const vector = [Check1,Check2,Check3,Check4,Check5];

const result = vector.filter(value=> value== true);

if (result.length>1) {
    /* mostrar alerta */
    Alerta.className = "alert alert-warning d-flex align-items-center show";
    parra.textContent = "Solo se pude seleccionar una Respuesta";
    return console.log('solo seleccione 1');
}
if (!vector[2]) {
    /* mostrar alerta , devolver uago anterior */
    Alerta.className = "alert alert-danger d-flex align-items-center show";
    parra.textContent = "Respuesta erronea , vuelve a comenzar";
    setTimeout(()=>{
        Alerta.className = "alert alert-danger d-flex align-items-center fade";
        location.href = "./juego.html";
        return console.log('esa no es')
    },3000)
    return console.log('esa no es')
}

/* mostrar alerta success , pasar siguiente*/
Alerta.className = "alert alert-success d-flex align-items-center show";
parra.textContent = "Muy bien , Pasemos al juego final";

    setTimeout(()=>{
        location.href = "./juego3.html"
    },3000);

})
