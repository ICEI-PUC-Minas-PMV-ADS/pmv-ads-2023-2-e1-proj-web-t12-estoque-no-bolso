document.addEventListener("DOMContentLoaded", function () {
    let registroVendas = JSON.parse(localStorage.getItem("registroVendas"));
    let tabelaVendas = document.getElementById("tabelaVendas");

    for (let i = 0; i < registroVendas.length; i++) {
      let venda = registroVendas[i];

      let novaLinha = tabelaVendas.insertRow(-1);
      let novaCelulaData = novaLinha.insertCell(0);
      let novaCelulaProduto = novaLinha.insertCell(1);
      let novaCelulaQuantidade = novaLinha.insertCell(2);
      let novaCelulaPreco = novaLinha.insertCell(3);

      novaCelulaData.innerHTML = venda.data;
      novaCelulaProduto.innerHTML = venda.produto;
      novaCelulaQuantidade.innerHTML = venda.quantidade;
      novaCelulaPreco.innerHTML = venda.preco;
    }
});