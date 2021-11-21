const h2 = document.querySelector("#letras");

const grupo1 = localStorage.getItem('grupo1');
const grupo2 = localStorage.getItem('grupo2');
const grupo3 = localStorage.getItem('grupo3');

const l1 = document.querySelector("#l1");
const l2 = document.querySelector("#l2");
const l3 = document.querySelector("#l3");
const l4 = document.querySelector("#l4");

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

    l1.addEventListener('keyup',(ev)=>{
       if (l1.value.length == 7) {
        let cont = 0;
        if (l1.value == "Quieres" && cont !=1) {
            l1.className = "input border border-success fs-2 rounded-1"; 
            ganados++;
            cont=1;   
        }
          
       }
    });

    l2.addEventListener('keyup',(ev)=>{
        ev.preventDefault(); 
        if (l2.value.length == 3) {
            let cont = 0;
         if (l2.value == "ser" && cont !=1) {
             l2.className = "input border border-success fs-2 rounded-1"    
             ganados++;
             cont=1; 
            }
           
        }
     });

     l3.addEventListener('keyup',(ev)=>{
        ev.preventDefault(); 
        const input = l3.value
        if (input.length == 2) {
            let cont = 0;
         if (input === "mi" && cont !=1) {
             l3.className = "input border border-success fs-2 rounded-1"    
             ganados++;
             cont=1; 
             console.log(ganados)
            }
           
        }
     });

     let cont4 = 0;
     
     l4.addEventListener('keyup',(ev)=>{
        ev.preventDefault(); 
        const input = l4.value
        if (input.length == 6) {
            
         if (input == "novia?" && cont4 !=1 ) {
             l4.className = "input border border-success fs-2 rounded-1"    
             ganados++;
             cont4=1; 
             console.log(ganados);
             if (ganados >= 5) {
                localStorage.clear();
            }
            }
           
        }
     });
    

letras();
