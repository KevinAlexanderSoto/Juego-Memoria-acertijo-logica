const h2 = document.querySelector("#letras");

const grupo1 = localStorage.getItem('grupo1');
const grupo2 = localStorage.getItem('grupo2');
const grupo3 = localStorage.getItem('grupo3');

console.log(grupo1,grupo2);

if(grupo1 != null){

    h2.textContent = '' + grupo1 ;
};

if(grupo2!=null){
h2.textContent = h2.textContent + grupo2;
};

if(grupo3!=null){
    h2.textContent = h2.textContent +" "+ grupo3;
    };