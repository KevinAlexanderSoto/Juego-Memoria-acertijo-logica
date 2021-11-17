
const btnRelog = document.querySelector("#btnReloj");


window.addEventListener('DOMContentLoaded',(event)=>{
    // Mostrar el toast
    const toastEl = document.querySelector('#toast');
    const toast = new bootstrap.Toast( toastEl );
    toast.show();
     // guardar las letras para ser vistas desde otra 
     localStorage.setItem('grupo2',' o ? m e i u');
   });

   btnRelog.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const respuesta = document.querySelector("#respuesta");
    if(respuesta.value != "11:50"){
       return console.log(' respuesta incorrecta' );
        
    }
    localStorage.setItem('grupo3','e i s r a v');
    console.log(' respuesta correcta!!!!!' );
   }) 