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
let confirmar
function showConfirm(accion, valor) {
    confirmar = confirm("\u00BFEstas seguro?")
    if (confirmar == true) {
        if (accion == 'seguir') {
            alert("Se esta poniendo en marcha")
        }else if (accion == 'parar') {
            alert("El tranvia se va a parar")
        }
    }
}
function irPosicion() {
    let posicion = document.getElementById("").value
    confirmar = confirm("\u00BFDesea ir a la posici&#243;n "+ posicion +"?")
    if (confirmar == true) {
        /*Aqui ira el código para dirigirse a la posición*/
    }
}

function irParada(valor) {
    let parada = document.getElementById("parad").value
    confirmar = confirm("\u00BFDesea ir a la parada "+ parada +"?")
    if (confirmar == true) {
      /*Aqui ira el código para dirigirse a la parada*/
      parada = parseInt(parada)
    }
  }