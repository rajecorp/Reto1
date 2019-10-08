/**
 * Variables globales
 */
var Posicion_Destino=false;
var COTAS;
var ENTER=false;
var Paro;
var Parada_0;
var Parada_1 = false;
var Parada_2 = false;
var Parada_3 = false;
var Parada_4 = false;
var Parada=50;//aqui ira '"mis_datos".Parada'
var Posicion=50;//'"mis_datos".Posicion'
var Emergencia=false;//aqui va '"mis_datos".Emergencia'
var REARME_1;
var REARME_2;

//let fechaAhora;
var porcentaje;

/**
 * Funcion para llamar a todas las funciones que se tienesn que ir al principio de la pagina
 */
function todas() {
    emergencia();
    ocultarParada();
    ejecGrafico();
}

/*POSICIONAR BOLA*/
/**
 * Funcion para posicionar la bola en la posicion actual del automata
 */
function posInicio() {
    $get(variables/varPosicion)
}

/*EMERGENCIA*/
/**
 * funcion que es un poton para sacar o meter el mensaje de emergencia
 */
function pararEm() {
    if (Emergencia==true){
        Emergencia=false;
        emergencia();
    }
    else{
        Emergencia=true;
        emergencia();
    }

}

/**
 * Funcion que sirve para mostrar o ocultar la ventnan de emergencia dependiendo del valor emerg
 */
function emergencia() {
    if (Emergencia == true) {
        document.getElementById('emergencia').style.display = 'inherit';
        document.getElementById('emergencia').style.visibility = 'visible';
        document.getElementById('emergencia').style.animationName = 'abrir';
    }
    else
    {
        document.getElementById('emergencia').style.display = 'none';
    }
}

/**
 * Funcion que intercambia la ocultacion de estado, acciones y grafico
 * @param valor el cambia si es acciones o estado
 */
function ocultarMenu(valor) {
    if(valor == "acciones"){
        document.getElementById("grafico").style.display = "none"
        document.getElementById("acciones").style.display = "flex"

    }else if (valor=="grafico") {
        document.getElementById("acciones").style.display = "none"
        document.getElementById("grafico").style.display = "inline"

    }
}

/*BOTON MOVER TRANVIA COTAS*/
/**
 * Funcion para mover el tranvia a una posicion en mm
 */
function irPosicion() {
    Posicion_Destino=true;
    ENTER=true;
    COTAS = document.getElementById("posicion").value
    let validar = validarMm(COTAS)
    if(validar){       
        porcentaje=(parseInt(COTAS)*100)/500;
        mover();
    }else{
        alert("Solo se puede ir a una posicion entre 0-500")
    }
}

/**
 * validar si los mm entran en el rango establecido
 * @returns {boolean} si es correcto o no
 * @param COTAS
 */
function validarMm(COTAS) {
    if (COTAS>500||COTAS<0){
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

/*BOTON MOVER TRANVIA A UNA PARADA*/
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
 * Funcion para mandar la parada donde ira el tranvia
 *
 * @param evt para prevenir recargar la pagina
 */
function irParada(evt) {
    let evento= evt||window.event;
    evento.preventDefault();
    paradaSiguiente = document.getElementById("parad").value
    porcentaje=parseInt((parseInt(paradaSiguiente)*100)/500);
    mover();
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

/*ANIMACION*/
/**
 * Funcion para la la animacion de la bola
 * @param evt para prevenir que la pagina se recargue
 */
function mover(evt){
    let evento= evt||window.event;
    evento.preventDefault();
    var postranvia=document.getElementById("bolapos")
    postranvia.style.marginLeft=(porcentaje+"%")

    switch(porcentaje){    
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

    default:
        document.getElementById('parada1').style.animationName ='none';

        document.getElementById('parada2').style.animationName ='none';

        document.getElementById('parada3').style.animationName ='none';

        document.getElementById('parada4').style.animationName ='none';  

        break;
    }
}
/**
 * Funcionalidad de Grafico
 */
function ejecGrafico() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                label: 'Velocity',
                data: [localStorage.getItem('v1'), localStorage.getItem('v2'), localStorage.getItem('v3'), localStorage.getItem('v4'), localStorage.getItem('v5'), localStorage.getItem('v6'), localStorage.getItem('v7'), localStorage.getItem('v8'), localStorage.getItem('v9'), localStorage.getItem('v10')],
                backgroundColor: 'rgba(26, 129, 102, 0.2)',
                borderColor: "#3cba9f",
                borderWidth: 1
            }]
        },
    });
}

/**
 * Recoge la velocidad y la parada del grafico y la guarda en localStorage para futuras sesiones
 */
function asignarVel() {
    let velo = parseInt(document.getElementById("vel").value);
    let stop = parseInt(document.getElementById("stop").value);
    localStorage.setItem('v'+stop.toString(), JSON.stringify(velo))
    ejecGrafico();
}