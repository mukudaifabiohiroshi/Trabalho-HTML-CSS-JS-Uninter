function mostrarMensagem() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = "Jesus te ama";

    // Faz a mensagem desaparecer depois de 2 segundos
    setTimeout(() => {
    mensagem.innerText = "";
    }, 2000);
}