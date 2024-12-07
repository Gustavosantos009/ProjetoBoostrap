
var horas = document.getElementById("hr");
var min = document.getElementById("min");
var seg = document.getElementById("seg");
function relogio() {

    var dataAtual = new Date

    var horasAtual = dataAtual.getHours()
    var minutosAtual = dataAtual.getMinutes()
    var segundosAtual = dataAtual.getSeconds()

    if (horasAtual < 10) horasAtual = "0" + horasAtual
    if (minutosAtual < 10) minutosAtual = "0" + minutosAtual
    if (segundosAtual < 10) segundosAtual = "0" + segundosAtual

    horas.textContent = horasAtual
    min.textContent = minutosAtual
    seg.textContent = segundosAtual

}
setInterval(relogio,1000)
relogio()