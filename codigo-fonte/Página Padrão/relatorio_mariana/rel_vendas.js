document.addEventListener("DOMContentLoaded", function () {
    let registroVendas = JSON.parse(localStorage.getItem("registroVendas"));
    let tabelaVendas = document.getElementById("tabelaVendas");

    for (let i = 0; i < registroVendas.length; i++) {
      let venda = registroVendas[i];

      let novaLinha = tabelaVendas.insertRow(-1);
      let novaCelulaData = novaLinha.insertCell(0);
      let novaCelulaTelefone = novaLinha.insertCell(1);
      let novaCelulaTotal = novaLinha.insertCell(2);

      novaCelulaData.innerHTML = venda.dadosDoCliente.nomeCliente;
      novaCelulaTelefone.innerHTML = venda.dadosDoCliente.telefoneCliente;
      novaCelulaTotal.innerHTML = venda.totalCompra;
    }
});