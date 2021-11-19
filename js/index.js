const p = document.querySelector("#letras");

const grupo1 = localStorage.getItem('grupo1');
const grupo2 = localStorage.getItem('grupo2');
const grupo3 = localStorage.getItem('grupo3');

console.log(grupo1,grupo2);

if(grupo1 != null){

    p.textContent = '' + grupo1 ;
};

if(grupo2!=null){
p.textContent = p.textContent + grupo2;
};

if(grupo3!=null){
    p.textContent = p.textContent + " "+grupo3;
    };
