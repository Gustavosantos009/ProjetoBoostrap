const minutos = document.getElementById("min")
const segundos = document.getElementById("seg")
const milisegundos = document.getElementById("mil")

const btnIniciar = document.querySelector("#btnIniciar")
const btnReset = document.querySelector("#btnReset")
const btncontinuar = document.querySelector("#btnContinuar")
const btnPause = document.querySelector("#btnParar")
let min = 0
let seg = 0
let mil = 0

let pause = false

btnIniciar.addEventListener("click", startTime)
btnReset.addEventListener("click", resetar)
btncontinuar.addEventListener("click", continuarTime)
btnPause.addEventListener("click", pausar)

//iniciar contagem

function startTime() {

    interval = setInterval(() => {
        if (!pause) {
            mil += 10
            if (mil === 1000) {
                seg++
                mil = 0

                if (seg === 60) {
                    min++
                    seg = 0
                }
            }
            btnIniciar.style.display = "none";
            btnPause.style.display = "block";
        }
        minutos.textContent = formatar(min)
        segundos.textContent = formatar(seg)
        milisegundos.textContent = forma

    }, 10)


};

function pausar() {
    pause = true;
    btncontinuar.style.display = "block"
    btnPause.style.display = "none"
}
function continuarTime() {
    pause = false
    btncontinuar.style.display = "none"
    btnPause.style.display = "block"
}

function resetar() {
    clearInterval(interval);
    btnIniciar.style.display = "block"
    btnPause.style.display = "none"
    btncontinuar.style.display = "none"
    min = 0
    seg = 0
    mil = 0
    minutos.textContent = "00";
    segundos.textContent = "00"
    milisegundos.textContent = "000"
    pause=false
}
