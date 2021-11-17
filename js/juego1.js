/* referencias HTML */

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const img5 = document.querySelector("#img5");
const img6 = document.querySelector("#img6");
const img7 = document.querySelector("#img7");
const img8 = document.querySelector("#img8");
/* BTN seguir */
const Seguir = document.querySelector("#Seguir");
/* Alerta */
const Alerta = document.querySelector('#alerta');

let vector_mostrar = [];
let encontro1 = false
        let encontro2 = false
        let encontro3 = false
        let encontro4 = false

const generarAleatorio = ()=>{
    let vector =[];
    let cont = 1;
    while(vector.length < 9){
        x = Math.floor(Math.random()*9);
        if (!vector.includes(x) && x!=0) {
            vector[cont] = x;
            cont++;
        }
    }
    //console.log(vector);
    return vector
};

const asignarPosiciones = ()=>{

    const array = generarAleatorio();

     img1.id = array[1];
     img2.id = array[2];
     img3.id = array[3];
     img4.id = array[4];
     img5.id = array[5];
     img6.id = array[6];
     img7.id = array[7];
     img8.id = array[8];

};

asignarPosiciones();

const asignarVectorMostrar = (id)=>{
    if (vector_mostrar.length == 1) {
        vector_mostrar[1]=id
     }else if (vector_mostrar.length == 0) {
       
        vector_mostrar[0]=id
     }  
     
}

const evenst = (ev)=>{
    const id = ev.target.id;
  
    switch (id) {
        case "1":
             /* mostrar carta */
            ev.target.src= "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635082562/gitgiuhb_getelm.jpg";
            asignarVectorMostrar(id)
           
            
            break;

            case "2":
                ev.target.src= "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635082562/gitgiuhb_getelm.jpg";
                asignarVectorMostrar(id)
            break;

            case "3":
                ev.target.src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1631657360/javascript_amdfnr.png"
                asignarVectorMostrar(id)
            break;
            case "4":
                ev.target.src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1631657360/javascript_amdfnr.png"
                asignarVectorMostrar(id)
                   
            break;
            case "5":
                ev.target.src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635864826/heart-3147976_960_720_ohnlkr.jpg"
                asignarVectorMostrar(id)
                   
            break;
            case "6":
                
                ev.target.src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635864826/heart-3147976_960_720_ohnlkr.jpg"
                asignarVectorMostrar(id)
                   
            break;
            case "7":
                ev.target.src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635864948/69323345abcb5b2e3e889f6ffa2abeacf8df492b_hq_ndpvzb.jpg"
                asignarVectorMostrar(id)
                   
            break;
            case "8":
                
                ev.target.src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635864948/69323345abcb5b2e3e889f6ffa2abeacf8df492b_hq_ndpvzb.jpg"
                asignarVectorMostrar(id)
                   
            break;
    
        default:

            break;
    }

    if (vector_mostrar.length == 2) {

        const result = (vector_mostrar[0] + vector_mostrar[1]) ;
        
        
        switch (result) {
            case "12":
                case "21":
                encontro1 = true
                
                vector_mostrar = [];
                /* dejar cartas destapadas */
                break;
                case "34":
                    case "43":
                        encontro2 = true
             
                    vector_mostrar = [];
                    break;
                    case "56":
                        case "65":
                            encontro3 = true
                
                        vector_mostrar = [];
                        break;
                        case "78":
                            case "87":
                                encontro4 = true
                         
                            vector_mostrar = [];
                        break;
            default:
                vector_mostrar = [];
                /* esconder todas las cartas menos las descubiertas*/
                if (!encontro1) {
                    document.getElementById("1").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                    
                    document.getElementById("2").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                }
                if (!encontro2) {
                    document.getElementById("3").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                    
                    document.getElementById("4").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                }
                if (!encontro3) {
                    document.getElementById("5").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                    
                    document.getElementById("6").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                }
                if (!encontro4) {
                    document.getElementById("7").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                    
                    document.getElementById("8").src = "https://res.cloudinary.com/drx0n5wmw/image/upload/v1635813474/carta_oqaqm2.png"
                }
                break;
        }
     } 

     if (encontro1&&encontro2&&encontro3&&encontro4) {
        Seguir.disabled = false;
        Alerta.className = "alert alert-success d-flex align-items-center";
     }

}
img1.addEventListener('click',evenst);
img2.addEventListener('click',evenst);
img3.addEventListener('click',evenst);
img4.addEventListener('click',evenst);
img5.addEventListener('click',evenst);
img6.addEventListener('click',evenst);
img7.addEventListener('click',evenst);
img8.addEventListener('click',evenst);
