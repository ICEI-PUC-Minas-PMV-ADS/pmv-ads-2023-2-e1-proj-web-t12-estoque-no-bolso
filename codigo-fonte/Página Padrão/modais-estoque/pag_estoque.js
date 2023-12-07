document.addEventListener("DOMContentLoaded", function () {
  let produtos = []; // Array para armazenar os produtos
  let editingIndex = -1; // Índice do produto em edição

  // Função para carregar os dados do localStorage
  function loadFromLocalStorage() {
    const storedData = localStorage.getItem("produtosSalvos");
    if (storedData) {
      produtos = JSON.parse(storedData);
      renderTable();
    }
  }
  //   const formProdutos = document.getElementById("form-produtos");
  const btnSalvar = document.getElementById("btn_salvar");
  const tabelaProdutos = document.getElementById("tabelaPrudotosSalvos");

  loadFromLocalStorage();

  // Função para renderizar a tabela de produtos
  function renderTable() {
    tabelaProdutos.innerHTML = "";

    for (let i = 0; i < produtos.length; i++) {
      const produto = produtos[i];

      const row = document.createElement("tr");
      row.innerHTML = `
                            <td>${produto.cod}</td>
                            <td>${produto.nome}</td>
                            <td>${produto.categoria}</td>
                            <td>${produto.tamanho}</td>
                            <td>${produto.custo}</td>
                            <td>${produto.quantidade}</td>
                            <td>${produto.valorVenda}</td>
                            <td>${produto.descricao}</td>
                            <td>
                                <button class="btn-editar" data-index="${i}">Editar</button>
                                <button class="btn-excluir" data-index="${i}">Excluir</button>
                            </td>`;

      tabelaProdutos.appendChild(row);
    }

    // Salva os dados no localStorage após renderizar a tabela
    saveToLocalStorage();
  }

  // Função para salvar os dados no localStorage
  function saveToLocalStorage() {
    localStorage.setItem("produtosSalvos", JSON.stringify(produtos));
  }

  // Função para limpar o formulário
  function clearForm() {
    document.getElementById("txt_cod").value = "";
    document.getElementById("txt_produto").value = "";
    document.getElementById("txt_categoria").value = "";
    document.getElementById("txt_tamanho").value = "";
    document.getElementById("txt_custo").value = "";
    document.getElementById("txt_quantidade").value = "";
    document.getElementById("text_venda").value = "";
    document.getElementById("text_descricao").value = "";
  }

  // Evento do botão "Salvar"
  btnSalvar.addEventListener("click", function () {
    const cod = document.getElementById("txt_cod").value;
    const nome = document.getElementById("txt_produto").value;
    const categoria = document.getElementById("txt_categoria").value;
    const tamanho = document.getElementById("txt_tamanho").value;
    const custo = document.getElementById("txt_custo").value;
    const quantidade = document.getElementById("txt_quantidade").value;
    const valorVenda = document.getElementById("text_venda").value;
    const descricao = document.getElementById("text_descricao").value;

    if (editingIndex === -1) {
      // Adiciona um novo produto se não estiver em modo de edição
      produtos.push({
        cod,
        nome,
        categoria,
        tamanho,
        custo,
        quantidade,
        valorVenda,
        descricao,
      });
    } else {
      // Edita o produto se estiver em modo de edição
      produtos[editingIndex] = {
        cod,
        nome,
        categoria,
        tamanho,
        custo,
        quantidade,
        valorVenda,
        descricao,
      };
      editingIndex = -1;
    }

    // Renderiza a tabela novamente
    renderTable();

    // Limpa o formulário e fecha o modal
    clearForm();
    $("#modalProdutos").modal("hide");
  });

  // Evento da tabela para abrir modal de edição ou excluir
  tabelaProdutos.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("btn-editar")) {
      // Modo de edição
      const index = target.dataset.index;
      editingIndex = index;

      document.getElementById("txt_cod").value = produtos[index].cod;
      document.getElementById("txt_produto").value = produtos[index].nome;
      document.getElementById("txt_categoria").value =
        produtos[index].categoria;
      document.getElementById("txt_tamanho").value = produtos[index].tamanho;
      document.getElementById("txt_custo").value = produtos[index].custo;
      document.getElementById("txt_quantidade").value =
        produtos[index].quantidade;
      document.getElementById("text_venda").value = produtos[index].valorVenda;
      document.getElementById("text_descricao").value =
        produtos[index].descricao;

      $("#modalProdutos").modal("show");
    } else if (target.classList.contains("btn-excluir")) {
      // Excluir o produto
      const index = target.dataset.index;
      produtos.splice(index, 1);

      // Renderiza a tabela novamente
      renderTable();
    }
  });

  // FUNCAO MOSTRA ALERTA ESTOQUE BAIXO
  function contarItensEstoqueBaixo() {
    var dadosDoEstoque = JSON.parse(localStorage.getItem("produtosSalvos"));
    var estoqueMinimo = 10;
    var contador = 0;

    for (var i = 0; i < dadosDoEstoque.length; i++) {
      if (dadosDoEstoque[i].quantidade < estoqueMinimo) {
        contador++;
      }
    }

    return contador;
  }

  // FUNCAO MOSTRA ITENS COM ESTOQUE BAIXO
  function listarItensEstoqueBaixo() {
    var dadosDoEstoque = JSON.parse(localStorage.getItem("produtosSalvos"));
    var estoqueMinimo = 10;
    var itens = [];

    for (var i = 0; i < dadosDoEstoque.length; i++) {
      if (dadosDoEstoque[i].quantidade < estoqueMinimo) {
        itens.push(dadosDoEstoque[i].nome);
      }
    }

    return itens;
  }

  window.onload = function () {
    var quantidade = contarItensEstoqueBaixo();
    document.getElementById("estoqueBaixo").innerText = quantidade;
  };
});
