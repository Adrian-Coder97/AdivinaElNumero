var cajaTexto = document.getElementById("cajaTexto")
var boton = document.getElementById("boton")
var divres = document.getElementById("divres")


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var numeroRandom = getRandomInt(10)//numero int random del 0 al 10
//console.log(numeroRandom)

var validar = () => {
    while (divres.hasChildNodes()) {//si el div de resultado tiene algun texto lo quitamos 
        divres.removeChild(divres.lastChild);
    }
    var numero = cajaTexto.value
    if (numero == "") {
        cajaTexto.classList.add("class", "alert-danger")
    } else {
        var numeroInt = parseInt(numero);
        if (numeroInt != numeroRandom) {
            var valorAbsoluto = Math.abs(numeroInt - numeroRandom)//obtener el valor absoluto para poder dar el hint
            if (valorAbsoluto == 1) {
                crearH2("CALIENTE")
            } else if (valorAbsoluto > 1 && valorAbsoluto <= 4) {
                crearH2("TIBIO")
            } else if (valorAbsoluto > 4 && valorAbsoluto <= 7) {
                crearH2("FRIO")
            } else {
                crearH2("CONGELADO")
            }
        } else {
            crearH2("GANADOR! El numero era: " + numeroInt)
        }
    }
}

var crearH2 = (hint) => {//crear elemento h2 para dar hint o para dar el resultado
    var h2 = document.createElement("h5")
    var contenidoh2 = document.createTextNode(hint)
    h2.appendChild(contenidoh2)
    divres.appendChild(h2)
}

var restaurarClases = () => {
    cajaTexto.setAttribute("class", "w-50 m-3 align-self-center text-center")
}

boton.addEventListener("click", validar)
cajaTexto.addEventListener("click", restaurarClases)