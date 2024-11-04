const eventoData = new Date('2024-11-10T00:00:00').getTime();

const contador = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = eventoData - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = dias;
    document.getElementById('horas').innerText = horas;
    document.getElementById('minutos').innerText = minutos;
    document.getElementById('segundos').innerText = segundos;

    if (distancia < 0) {
        clearInterval(contador);
        document.getElementById('contagem').innerText = "O evento começou!";
    }
}, 1000);

document.getElementById('Bnt').addEventListener('click', () => {
    document.getElementById('mgs').innerText = "Inscrição realizada com sucesso!";
});