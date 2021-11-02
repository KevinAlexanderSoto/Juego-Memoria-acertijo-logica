const Check1 = document.querySelector("#Check1");
const Check2 = document.querySelector("#Check2");
const Check3 = document.querySelector("#Check3");
const Check4 = document.querySelector("#Check4");
const Check5 = document.querySelector("#Check5");

const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit',(ev)=>{

const Check1 = ev.target[0].checked;
const Check2 = ev.target[1].checked;
const Check3 = ev.target[2].checked;
const Check4 = ev.target[3].checked;
const Check5 = ev.target[4].checked;

const vector = [ev.target[0].checked,ev.target[1].checked,ev.target[2].checked,ev.target[3].checked,ev.target[4].checked];
const result = vector.filter(value=> value== true);
if (result.length>1) {
    return console.log('solo seleccione 1 ')
}
if (!vector[2]) {
    return console.log('esa no es')
}

})
