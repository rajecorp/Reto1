/**
 * Variables globales
 */
var Posicion_Destino=0;
var COTAS;
var ENTER=0;
var Paro=0;
var Parada_0=0;
var Parada_1=0;
var Parada_2=0;
var Parada_3=0;
var Parada_4=0;
var Parada;
var Posicion;
var Emergencia=false;
var REARME_1=0;
var REARME_2=0;
var arrayVelocidad= new Array();
var porcentaje;

/**
 * Funcion para llamar a todas las funciones que se tienesn que ir al principio de la pagina
 */
function todas() {
    emergencia();
    ocultarParada();
    ejecGrafico();
    if (localStorage.getItem("selectPos")=="1")
    {
        irPosicion();
    }
    if (localStorage.getItem("selectPar")=="1")
    {
        irParada();
    }

}

/**
 * funciones de comunicacion con el automata y su guardado de datos en un Web Storage
 */
$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    setInterval(function() {
        $.get('variables/COTAS.html', function(result){
            /*guardar el valor COTAS el un localStorage*/
            localStorage.setItem("COTAS", result.trim());
        });
        $.get('variables/Posicion_Destino.html', function(result){
            //si es 1 lo que hay en el PLC reenvia un 0.
            if(result.trim()=="<p>1</p>"){
                $("#pos_des0").trigger("click");
                //accion de clickar el boton enviar
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/ENTER.html', function(result){
            if(result.trim()=="<p>1</p>"){
                $("#enter0").trigger("click");
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/Posicion_Destino.html', function(result){
            if(result.trim()=="<p>1</p>"){
                $("#pos_des0").trigger("click");
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/Parada_1.html', function(result){
            if(result.trim()=="<p>1</p>"){
                localStorage.setItem("Parada_1", result.trim());
                $("#parada1_0").trigger("click");
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/Parada_2.html', function(result){
            if(result.trim()=="<p>1</p>"){
                localStorage.setItem("Parada_2", result.trim());
                $("#parada2_0").trigger("click");
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/Parada_3.html', function(result){
            if(result.trim()=="<p>1</p>"){
                localStorage.setItem("Parada_3", result.trim());
                $("#parada3_0").trigger("click");
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/Parada_4.html', function(result){
            if(result.trim()=="<p>1</p>"){
                localStorage.setItem("Parada_4", result.trim());
                $("#parada4_0").trigger("click");
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/Parada_0.html', function(result){
            if(result.trim()=="<p>1</p>"){
                localStorage.setItem("Parada_0", result.trim());
                $("#parada0_0").trigger("click");
                $("#enviar").trigger("click");
            }
        });
        $.get('variables/Posicion.html', function(result){
            localStorage.setItem("Posicion", result.trim());
        });
        $.get('variables/Velocidad.html', function(result){
            arrayVelocidad.push(result.trim());
            localStorage.setItem("Velocidad", arrayVelocidad.join());
        });
        $.get('variables/REARME_1.html', function(result){
            if(result.trim()=="<p>1</p>"){
                $("#rearme1_0").trigger("click");
                $("#botonSeguir").trigger("click");
            }
        });
        $.get('variables/REARME_2.html', function(result){
            if(result.trim()=="<p>1</p>"){
                $("#rearme2_0").trigger("click");
                $("#botonSeguir").trigger("click");
            }
        });
    },1000);
});
//EMERGENCIA
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
 * Funcion que sirve para mostrar o ocultar la ventana de emergencia dependiendo del valor emerg
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
    if(valor === "acciones"){

        document.getElementById("grafico").style.display = "none"
        document.getElementById("acciones").style.display = "contents"
        document.getElementById("acciones").style.overflow = "hidden"
        document.getElementById("acciones").style.height = "20%"
    }else if (valor=="grafico") {
        document.getElementById("acciones").style.display = "none"
        document.getElementById("grafico").style.display = "inline"
        document.getElementById("grafico").style.overflow = "hidden"
    }
}

/*BOTON MOVER TRANVIA COTAS*/
/**
 * Funcion para mover el tranvia a una posicion en mm
 */
function irPosicion() {
    COTAS = localStorage.getItem("COTAS");
        porcentaje=(parseInt(COTAS)*100)/500;
        mover();
}

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
 * funcion para elegir al recargar la pagina si es posicion
 */
function pos() {
    localStorage.setItem("selectPos","1");
    localStorage.setItem("selectPar","0");
}
/**
 * funcion para elegir al recargar la pagina si es parada
 */
function par() {
    localStorage.setItem("selectPos","0");
    localStorage.setItem("selectPar","1");
}
/**
 * Funcion para mandar la parada donde ira el tranvia
 *
 * @param evt para prevenir recargar la pagina
 */
function irParada() {
    let paradaSiguiente;
    if (localStorage.getItem("Parada_1")==1){
        paradaSiguiente=50;
    }
    if (localStorage.getItem("Parada_2")==1){
        paradaSiguiente=200;
    }
    if (localStorage.getItem("Parada_3")==1){
        paradaSiguiente=350;
    }
    if (localStorage.getItem("Parada_4")==1){
        paradaSiguiente=500;
    }
    porcentaje=paradaSiguiente*100/500;
    mover();
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
    let velocidadaString=localStorage.getItem("arrayVelocidad");
    let velocidadArray= velocidadaString.split(",");
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
            datasets: [{
                label: 'Velocity',
                data: [velocidadArray[0],velocidadArray[1], velocidadArray[2],velocidadArray[3], velocidadArray[4], velocidadArray[5],velocidadArray[6], velocidadArray[7],velocidadArray[8], velocidadArray[9]],
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
   /* let velo = parseInt(document.getElementById("vel").value);
    let stop = parseInt(document.getElementById("stop").value);
    localStorage.setItem('v'+stop.toString(), JSON.stringify(velo))*/
    ejecGrafico();
}