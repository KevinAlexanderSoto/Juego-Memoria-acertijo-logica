const h2 = document.querySelector("#letras");

const grupo1 = localStorage.getItem('grupo1');
const grupo2 = localStorage.getItem('grupo2');
const grupo3 = localStorage.getItem('grupo3');

const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const l4 = document.querySelector("#l4");

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

const validarCampo = (contenido)=>{



}

letras();