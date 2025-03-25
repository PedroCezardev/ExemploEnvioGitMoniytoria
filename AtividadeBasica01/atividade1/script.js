function mudaCor() {
    let titulo = document.getElementById("parag1");
    let corAtual = titulo.style.color;
    
    // Alterna entre vermelho e azul
    titulo.style.color = corAtual === "white" ? "red" : "white";
}

function lerExibir() {
    let resposta = window.prompt("Digite algo:");
    window.alert("Você digitou: " + resposta);
}
