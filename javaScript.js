/**
 * Variables globales
 */

function emergencia() {
    let emerg = false;//aqui va '"mis_datos".Emergencia'
    if (emerg == true) {
        document.getElementById('emergencia').style.display = 'inherit';
        document.getElementById('emergencia').style.visibility = 'visible';
        document.getElementById('emergencia').style.animationName = 'abrir';
    }
}

var paradaSiguiente;
var Parada=50;//aqui ira '"mis_datos".Parada'
var Posicion=50;//'"mis_datos".Posicion'
var Emergencia=false;//aqui va '"mis_datos".Emergencia'
//let fechaAhora;

/**
 * Funcion para llamar a todas las funciones que se tienesn que ir al principio de la pagina
 *
 */
function todas() {
    emergencia();
    ocultarParada();
}

/**
 * Funcion que sirve para mostrar o ocultar la ventnan de emergencia dependiendo del valor emerg
 */
function emergencia() {
    if (Emergencia == true) {
        document.getElementById('emergencia').style.display = 'inherit';
        document.getElementById('emergencia').style.visibility = 'visible';
    }
}

/**
 * Funcion para ocultar la pocion de la parada si esta en esa parada estacionado
 */
function ocultarParada() {
switch (Parada) {
    case 50:
        document.getElementById("op1").style.display = "none"
        break;
    case 200:
        document.getElementById("op2").style.display = "none"
        break;
    case 350:
        document.getElementById("op3").style.display = "none"
        break;
    case 500:
        document.getElementById("op4").style.display = "none"
        break;
}
}

/**
 * Funcion que intercambia la ocultacion de estado y acciones
 * @param valor el cambia si es acciones o estado
 */
function ocultarMenu(valor) {
    if (valor=="estado") {
        document.getElementById("acciones").style.display = "none"
        document.getElementById("estado").style.display = "inline"
        document.getElementById("estado").style.overflow = "hidden"
    }else if(valor == "acciones"){
        document.getElementById("estado").style.display = "none"
        document.getElementById("acciones").style.display = "contents"
        document.getElementById("acciones").style.overflow = "hidden"
        document.getElementById("acciones").style.height = "20%"
    }
}

/**
 * Funcion para mover el tranvia a una posicion en mm
 */
function irPosicion() {
    posicionMm = document.getElementById("posicion").value
    let validar = validarMm(posicionMm)
    if(validar){
        confirmar = confirm("\u00BFDesea ir a la posicion "+ posicionMm +"?")
        if (confirmar == true) {
            //fechaAhora=crearFecha();
            //movMm();
        }
    }else{
        alert("Solo se puede ir a una posicion entre 0-500")
    }

}

/**
 * validar si los mm entran en el rango establecido
 * @param posicionMm valor a validar
 * @returns {boolean} si es correcto o no
 */
function validarMm(posicionMm) {
    if (posicionMm>500||posicionMm<0){
     return false;
    }
    return true;
}

/**
 * funcion que mueve el tranvia unos mm
 */
/*function movMm() {
    let fechaParada=crearFecha();
    var time = setTimeout(function(){ movMm() }, 500);//repite la funcion cada 500 ms
    document.getElementById("tiempoParSalida").innerHTML=fechaParada;
    document.getElementById("tiempoAhora").innerHTML=fechaAhora;
    document.getElementById("paradaAnt").innerHTML = Posicion;
    document.getElementById("paradaSig").innerHTML = posicionMm;
}*/

/**
 * Funcion para mandar la parada donde ira el tranvia
 *
 * @param evt para prevenir recargar la pagina
 */
function irParada(evt) {
    let evento= evt||window.event;
    evento.preventDefault();
    paradaSiguiente = document.getElementById("parad").value
    confirmar = confirm("\u00BFDesea ir a la parada " + paradaSiguiente + "?")
    if (confirmar == true) {
        //fechaAhora=crearFecha();
        //parada(paradaSiguiente)
    }
}

/**
 * Funcion que sirve para marcar en el estado en que parada ha estado, su hora de llegada a esa parada y su siguiente parada cual es
 * @param ParSig la parada a la que se movera el tranvia
 */
/*function parada(ParSig) {
    ParSig=parseInt(ParSig);
    let fechaParada=crearFecha();
    var time = setTimeout(function(){ parada() }, 500);//repite la funcion cada 500 ms
    let par;
    document.getElementById("tiempoParSalida").innerHTML=fechaParada;
    document.getElementById("tiempoAhora").innerHTML=fechaAhora;
   switch(Parada) {
        case 50:
            par = 'Parada 1';
            document.getElementById("paradaAnt").innerHTML = par;
            switch (ParSig) {
                case 200:
                    ParSig='Parada 2'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
                case 350:
                    ParSig='Parada 3'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
                case 500:
                    ParSig='Parada 4'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
            }
            break;
        case 200:
            par = 'Parada 2';
            document.getElementById("paradaAnt").innerHTML = par;
            switch (ParSig) {
                case 50:
                    ParSig='Parada 1'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
                case 350:
                    ParSig='Parada 3'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
                case 500:
                    ParSig='Parada 4'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
            }
            break;
        case 350:
            par = 'Parada 3';
            document.getElementById("paradaAnt").innerHTML = par;
            switch (ParSig) {
                case 200:
                    ParSig='Parada 2'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
                case 50:
                    ParSig='Parada 1'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
                case 500:
                    ParSig='Parada 4'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
            }
            break;
        case 500:
            par = 'Parada 4';
            document.getElementById("paradaAnt").innerHTML = par;
            switch (ParSig) {
                case 200:
                    ParSig='Parada 2'
                    document.getElementById("paradaSig").innerHTML = ParSig;

                    break;
                case 350:
                    ParSig='Parada 3'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
                case 50:
                    ParSig='Parada 1'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    break;
            }
            break;
    }
}*/

/**
 * Funcion para cambiar la fecha por defecto a una fecha de formato hora minuto segundo.
 *
 * @returns {string} la fehca en string con formato horas:minutos:segundos
 */
/*function crearFecha() {
    let fechaAhora= new Date(Date.now());
    return fechaParada=fechaAhora.getHours()+':'+fechaAhora.getMinutes()+':'+fechaAhora.getSeconds();
}
*/

/**
 * Funcion paramonstra un mensaje de confirmacion de las acciones para manipular el tranvia.
 *
 * @param accion la accion realizada.
 */
function showConfirm(accion) {
    let confirmar = confirm("\u00BFEstas seguro?")
    if (confirmar == true) {
        if (accion == 'seguir') {

            alert("Seguir")

        }else if (accion == 'parar') {

            alert("Parar")

        }else if (accion == 'abrir') {

            alert("Abrir")

        }else if (accion == 'cerrar') {

            alert("cerrar")

        }else if(accion == 'ir'){
            alert("Ir")
        }
    }
}

/**
 * funcion para el switch de abrir puertas
 * @param valor booleano de las puertas si estan abiertas o cerradas
 */
function abrirPuertas(valor){
    if (valor.checked == false) {
        alert("Las puertas se cierran")
    }else{
        alert("Las puertas se abren")
    }
}


function mover(evt){
    let evento= evt||window.event;
    evento.preventDefault();

    let pos=document.getElementById("posicion").value
    var postranvia=document.getElementById("bolapos")

    postranvia.style.marginLeft=(pos+"%")

    switch(parseInt(pos)){    
    case 10:
        document.getElementById('parada1').style.animationName ='parada';

        document.getElementById('parada2').style.animationName ='none';

        document.getElementById('parada3').style.animationName ='none';

        document.getElementById('parada4').style.animationName ='none';  

        break;
   
    case 40:
        document.getElementById('parada1').style.animationName ='none';

        document.getElementById('parada2').style.animationName ='parada';

        document.getElementById('parada3').style.animationName ='none';

        document.getElementById('parada4').style.animationName ='none';  

        break;

    case 70:
        document.getElementById('parada1').style.animationName ='none';

        document.getElementById('parada2').style.animationName ='none';

        document.getElementById('parada3').style.animationName ='parada';

        document.getElementById('parada4').style.animationName ='none';  

        break;

    case 100:
        document.getElementById('parada1').style.animationName ='none';

        document.getElementById('parada2').style.animationName ='none';

        document.getElementById('parada3').style.animationName ='none';

        document.getElementById('parada4').style.animationName ='parada';  

        break;
    }
}