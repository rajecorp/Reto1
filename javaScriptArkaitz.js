function ocultarMenu(valor) {
    if (valor=="estado") {
        document.getElementById("acciones").style.display = "none"
        document.getElementById("estado").style.display = "inline"
        document.getElementById("estado").style.overflow = "hidden"
    }else if(valor == "acciones"){
        document.getElementById("estado").style.display = "none"
        document.getElementById("acciones").style.display = "inline"
        document.getElementById("acciones").style.overflow = "hidden"
        document.getElementById("acciones").style.height = "40%"
    }
}