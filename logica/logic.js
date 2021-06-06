/* var bot=document.getElementById("probando");
var prueba=deocument.getElementById("prueba1"); */

document.getElementById("probando").addEventListener("click",display);

function ran (cantidad) {
    var elementos=[];
    for (let i = 0; i < cantidad; i++) {
        a=Math.floor(Math.random() * 10);
        elementos.push(a);
    }   
    return elementos;    
}

function suma (elementos){
 for (let i = 0; i < elementos.length; i++) {
     respuesta=respuesta+elementos[i];
 }
 return respuesta   
}


function sumadisplay (elementos) {
    sumastr=""
    for (let i = 0; i < elementos.length; i++) {

        if (i+1<cant) {
            var a=elementos[i]
            sumastr=sumastr+a.toString()+" + "
        }
        else {
            var a=elementos[i]
            sumastr=sumastr+" "+a.toString()+" = "
        }       
    }
    return sumastr
}

function display (){
    
    cantidad=sumadisplay(ran(2))
    //respuesta=suma(String(ran(2)))
    document.getElementById("prueba1").innerHTML = cantidad;
}



