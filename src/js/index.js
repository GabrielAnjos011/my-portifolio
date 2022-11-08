const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  aba.addEventListener("click", function () {
    if (aba.classList.contains("selecionado")) {
      return;
    }

    selecionarAba(aba);

    mostrarInformacoesDaAba(aba);
  });
});

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");

  aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
  const informacaoSelecionado = document.querySelector(
    ".informacao.selecionado"
  );
  informacaoSelecionado.classList.remove("selecionado");

  const idDoElementoDeInformacaoDaAba = `informacao-${aba.id}`;

  const informacaoASerMostrada = document.getElementById(
    idDoElementoDeInformacaoDaAba
  );

  informacaoASerMostrada.classList.add("selecionado");
}
