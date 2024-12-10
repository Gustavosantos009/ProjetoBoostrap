const alarme = document.getElementById("toque")




const btnIniciar = document.querySelector("#btnStart")
const btnReset = document.querySelector("#btnReset")
const btncontinuar = document.querySelector("#btnContinuar")
const btnPause = document.querySelector("#btnParar")

const controles = document.querySelectorAll('.controle')

//btn almentar tempo
const btnMaishoras = document.querySelector("#btn-mais-hr")
const btnMaisMinutos = document.querySelector("#btn-mais-min")
const btnMaisSegundos = document.querySelector("#btn-mais-seg")
//btn diminuir tempo
const btnMenoshoras = document.querySelector("#btn-menos-hr")
const btnMenosMinutos = document.querySelector("#btn-menos-min")
const btnMenosSegundos = document.querySelector("#btn-menos-seg")

const minutos = document.getElementById("min")
const segundos = document.getElementById("seg")
const horas = document.getElementById("hr")

iniciado = false
let isPause = false
let hr = 0
let min = 0
let seg = 0

// acao dos botoes 

btnMaishoras.addEventListener("click", aumentar_hr)
btnMaisMinutos.addEventListener("click", aumentar_min)
btnMaisSegundos.addEventListener("click", aumentar_seg)


btnMenoshoras.addEventListener("click", diminuir_hr)
btnMenosMinutos.addEventListener("click", diminuir_min)
btnMenosSegundos.addEventListener("click", diminuir_seg)
btnIniciar.addEventListener("click", startTime)
btnPause.addEventListener("click",pauseTime)
btncontinuar.addEventListener("click",continuarTime)
btnReset.addEventListener("click",resetar)

function resetar() {
    btnIniciar.style.display = "block"
    btnPause.style.display = "none"
    btncontinuar.style.display = "none"
    min = 0
    seg = 0
    mil = 0
    minutos.textContent = "00";
    segundos.textContent = "00"
    horas.textContent = "00"
    isPause= false
    clearInterval(interval)
    abilitar()
}

function continuarTime() {
    isPause = false
    btncontinuar.style.display = "none"
    btnPause.style.display = "block"
}
function pauseTime(){

    isPause = true
    btncontinuar.style.display = "block"
    btnPause.style.display = "none"
}
function startTime() {
     interval = setInterval(() => {

        if (hr != 0 || seg != 0 || min != 0) {
            if (!isPause) {

                controles.disabled = true;
                seg--
                if (seg < 0) {
                    min--
                    seg = 59

                    if (min < 0) {
                        hr--
                        min = 59
                    }
                }


                btnIniciar.style.display = "none"
                btnPause.style.display = "block";
                desabilitar();



            }

            segundos.textContent = formatar(seg)
            minutos.textContent = formatar(min)
            horas.textContent = formatar(hr)

            if (hr == 0 && seg == 0 && min == 0) {

                clearInterval(interval)
                abilitar();
                btnIniciar.style.display = "block";
                btnPause.style.display = "none";

                func_desativar_alarme()

            }
        }
    }, 1000)

}



//function aumentar tempo
function aumentar_hr() {
    if (hr < 99)
        hr++
    horas.textContent = formatar(hr)
}
function aumentar_min() {

    min++

    if (min == 60) {
        hr++
        horas.textContent = formatar(hr)
        min = 0

    }
    minutos.textContent = formatar(min)
}
function aumentar_seg() {
    seg++
    if (seg == 60) {
        min++
        minutos.textContent = formatar(min)
        seg = 0
    }
    segundos.textContent = formatar(seg)

}

//function diminuir tempo
function diminuir_hr() {
    if (hr > 0) {
        hr--
        horas.textContent = formatar(hr)
    }
}
function diminuir_min() {
    if (min > 0) {
        min--
        minutos.textContent = formatar(min)
    }
}
function diminuir_seg() {
    if (seg > 0) {
        seg--
        segundos.textContent = formatar(seg)
    }

}

//formatar numero adiconando o "0" na frente se for menor que "10"
function formatar(numero) {
    if (numero < 10) {
        numero = "0" + numero
    }
    return numero;
}

function desabilitar() {
    btnMaisMinutos.disabled = true
    btnMaishoras.disabled = true
    btnMaisSegundos.disabled = true
    btnMenosMinutos.disabled = true
    btnMenoshoras.disabled = true
    btnMenosSegundos.disabled = true
}
function abilitar() {
    btnMaisMinutos.disabled = false
    btnMaishoras.disabled = false
    btnMaisSegundos.disabled = false
    btnMenosMinutos.disabled = false
    btnMenoshoras.disabled = false
    btnMenosSegundos.disabled = false
}

document.getElementById("btn_desligar_alarme").addEventListener("click", desligarAlarme)
function func_desativar_alarme() {
    alarme.play();
    document.getElementById("principal").style.display = "none";
    document.getElementById("alarme").style.display = "block";
}
function desligarAlarme() {


    alarme.pause();
    document.getElementById("principal").style.display = "flex";
    document.getElementById("alarme").style.display = "none";
}