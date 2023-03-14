function exibirJanela() {
    var janela = document.getElementById("janela-flutuante");
    janela.style.display = "block";
    var botaoFechar = document.createElement("button");
    botaoFechar.innerHTML = "Fechar janela";
    botaoFechar.onclick = function() {
      janela.style.display = "none";
    };
    janela.appendChild(botaoFechar);
  }
  