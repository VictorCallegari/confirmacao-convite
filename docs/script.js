// JavaScript para o cronômetro regressivo
function atualizarCronometro() {
    const dataAlvo = new Date("2023-11-14T00:00:00Z").getTime();
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;

    if (diferenca <= 0) {
        clearInterval(intervalo); // Para o cronômetro quando a data alvo for atingida
        document.getElementById("tempo").textContent = "00:00:00"; // Exibe "00:00:00" quando a data alvo é atingida
    } else {
        const segundos = Math.floor((diferenca / 1000) % 60);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        
        const tempoFormatado = `${String(dias).padStart(2, "0")}:${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
        document.getElementById("tempo").textContent = tempoFormatado;
    }
}

atualizarCronometro(); // Chama a função uma vez para exibir o tempo restante imediatamente
const intervalo = setInterval(atualizarCronometro, 1000); // Atualiza o cronômetro a cada segundo