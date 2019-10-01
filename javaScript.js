/**
 * Funcion que sirve para mostrar o ocultar la ventnan de emergencia dependiendo del valor emerg
 */
function emergencia() {
    let emerg = true;//aqui va '"mis_datos".Emergencia'
    if (emerg == true) {
        document.getElementById('emergencia').style.display = 'inherit';
        document.getElementById('emergencia').style.visibility = 'visible';
    }
}
var paradaSiguiente;
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
        //'"mis_datos".Parada'=paradaSiguiente;
        parada(paradaSiguiente)
    }
}

/**
 * Funcion para ocultar la pocion de la parada si esta en una parada
 */
function ocultarParada() {
    let Parada = 0x2712;

switch (Parada) {
    case 0x2712:
        document.getElementById("op1").style.display = "none"
        break;
    case 0x61AA:
        document.getElementById("op2").style.display = "none"
        break;
    case 0x88B6:
        document.getElementById("op3").style.display = "none"
        break;
    case 0xAFCE:
        document.getElementById("op4").style.display = "none"
        break;
}
}
/**
 * Funcion que sirve para marcar en el estado en que parada ha estado, su hora de llegada a esa parada y su siguiente parada cual es
 */
function parada(ParSig) {
    ParSig=parseInt(ParSig);
    let Parada=0x2712;//aqui ira '"mis_datos".Parada'
    let FechaAhora=crearFecha();
    let FechaParada=crearFecha();
    var time = setTimeout(function(){ parada() }, 500);
    let Par;
    switch(Parada) {
        case 0x2712:
            Par = 'Parada 1';
            document.getElementById("paradaAnt").innerHTML = Par;
            document.getElementById("tiempoParSalida").innerHTML=FechaAhora;
            switch (ParSig) {
                case 0x61AA:
                    ParSig='Parada 2'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    document.getElementById("tiempoAhora").innerHTML=FechaParada;

                    break;
                case 0x88B6:
                    ParSig='Parada 3'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    document.getElementById("tiempoAhora").innerHTML=FechaParada;
                    break;
                case 0xAFCE:
                    ParSig='Parada 4'
                    document.getElementById("paradaSig").innerHTML = ParSig;
                    document.getElementById("tiempoAhora").innerHTML=FechaParada;
                    break;
            }
            break;
        case 0x61AA:
            Par = 'Parada 2';
            document.getElementById("paradaAnt").innerHTML = Par;
            document.getElementById("tiempoParSalida").innerHTML=FechaParada;
            break;
        case 0x88B6:
            Par = 'Parada 3';
            document.getElementById("paradaAnt").innerHTML = Par;
            document.getElementById("tiempoParSalida").innerHTML=FechaParada;
            break;
        case 0xAFCE:
            Par = 'Parada 4';
            document.getElementById("paradaAnt").innerHTML = Par;
            document.getElementById("tiempoParSalida").innerHTML=FechaParada;
            break;
    }
}

/**
 * Funcion para cambiar la fecha por defecto a una fecha de formato hora minuto segundo.
 *
 * @param fechaAhora la fecha en formato completo
 * @returns {string} la fehca en string con formato horas:minutos:segundos
 */
function crearFecha() {
    let fechaAhora= new Date(Date.now());
    return FechaParada=fechaAhora.getHours()+':'+fechaAhora.getMinutes()+':'+fechaAhora.getSeconds();
}

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
 * Funcion para llamar a todas las funciones que se tienesn que ir refrescando con el tiempo
 *
 */
function todas() {
    emergencia();
    ocultarParada()
}

/**
 * funcion para el switch de abrir puertas
 * @param valor
 */
function abrirPuertas(valor){
    if (valor.checked == false) {
        alert("Las puertas se cierran")
    }else{
        alert("Las puertas se abren")
    }
}
