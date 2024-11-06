const dataFinal = new Date("2024-11-09T23:59:59").getTime();
 
function contagemRegressiva() {
    const agora = new Date().getTime();
    const tempoRestante = dataFinal - agora;
 
    const dias = tempoRestante / (1000 * 60 * 60 * 24);
    const horas = (tempoRestante / (1000 * 60 * 60)) % 24;
    const minutos = (tempoRestante / (1000 * 60)) % 60;
    const segundos = (tempoRestante / 1000) % 60;
 
    document.getElementById("contagem").innerHTML =
        `${parseInt(dias)}d ${parseInt(horas)}h ${parseInt(minutos)}m ${parseInt(segundos)}s`;
 
    if (tempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById("contagem").innerHTML = "INSCRIÇÕES ENCERRADAS";
    }
}
 
const intervalo = setInterval(contagemRegressiva, 1000);
 
document.getElementById('Bnt').addEventListener('click', () => {
    document.getElementById('mgs').innerText = "Inscrição realizada com sucesso!";
});