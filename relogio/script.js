function atualizarTempo() {

var display = document.querySelector('.display');

var agora = new Date();

var horario = corrrigirHorario(agora.getHours()) + ':' + corrrigirHorario(agora.getMinutes()) + ':' + 
corrrigirHorario(agora.getSeconds());

display.textContent = horario;
}

function corrrigirHorario(numero) {
    if (numero < 10) { 
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);
console.log(horario);   