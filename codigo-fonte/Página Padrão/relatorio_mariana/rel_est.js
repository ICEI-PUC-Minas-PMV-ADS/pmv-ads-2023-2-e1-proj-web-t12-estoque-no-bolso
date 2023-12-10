document.addEventListener("DOMContentLoaded", function () {
    let produtosSalvos = JSON.parse(localStorage.getItem("produtosSalvos"));
    let tabelaProdutosSalvos = document.getElementById("tabelaProdutosSalvos");

    for (let i = 0; i < produtosSalvos.length; i++) {
      let produto = produtosSalvos[i];

      let novaLinha = tabelaProdutosSalvos.insertRow(-1);
      let novaCelulaCod = novaLinha.insertCell(0);
      let novaCelulaNome = novaLinha.insertCell(1);
      let novaCelulaQuantidade = novaLinha.insertCell(2);
      let novaCelulaCusto = novaLinha.insertCell(3);
      let novaCelulaVenda = novaLinha.insertCell(4);
      

      novaCelulaCod.innerHTML = produto.cod;
      novaCelulaNome.innerHTML = produto.nome;
      novaCelulaQuantidade.innerHTML = produto.quantidade;
      novaCelulaCusto.innerHTML = produto.custo;
      novaCelulaVenda.innerHTML = produto.valorVenda;
    }
});