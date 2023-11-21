document.addEventListener('DOMContentLoaded', function () {
  // Recuperar os dados dos PRODUTOS do localStorage
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  // Associar salvamento ao botão
  document.querySelector('#btn_salvar').addEventListener('click', function (e) {
      salvaProduto(e);
      console.log('btn_salvar');
  });

  // Função para salvar o produto no Local Storage
  function salvaProduto(e) {
    e.preventDefault();

    // Coletar os dados do formulário
    let cod = document.querySelector('#txt_cod').value;
    let produto = document.querySelector('#txt_produto').value;
    let categoria = document.querySelector('#txt_categoria').value;
    let variacao = document.querySelector('#txt_variacao').value;
    let custo = document.querySelector('#txt_custo').value;
    let quantidade = document.querySelector('#txt_quantidade').value;
    let preco = document.querySelector('#text_venda').value;
    let descricao = document.querySelector('#text_descricao').value;


      // Verificar se o nome e o email foram preenchidos
      if (produto && categoria && quantidade) {
          // Criar um objeto de produto com um ID único
          const produtoObj = {
              cod,
              produto,
              categoria,
              variacao,
              custo,
              quantidade,
              preco,
              descricao,
          };

          // Adicionar o produto à lista
          produtos.push(produtoObj);

          // Salvar os produtos no localStorage
          localStorage.setItem('produtos', JSON.stringify(produtos));

          // Limpar o formulário
          clearForm();

          // Atualizar a lista de produtos no corpo do site
          updateProductList();
      }
  }

  // Função para limpar os campos do formulário
  function clearForm() {
      document.querySelector("#txt_cod").value = "";
      document.querySelector("#txt_produto").value = "";
      document.querySelector("#txt_categoria").value = "";
      document.querySelector("#txt_variacao").value = "";
      document.querySelector("#txt_custo").value = "";
      document.querySelector("#txt_quantidade").value = "";
      document.querySelector("#text_venda").value = "";
      document.querySelector("#text_descricao").value = "";
  }

  // Função para atualizar a lista de produtos no corpo do site
  function updateProductList() {
      // Obter o elemento onde a lista será exibida
      var productList = document.getElementById("productList");

      // Criar uma lista não ordenada para mostrar os produtos
      var ul = document.createElement("ul");

      // Adicionar cada produto à lista
      for (var i = 0; i < produtos.length; i++) {
          var produto = produtos[i];

          // Criar um item de lista para cada produto
          var li = document.createElement("li");
          li.innerHTML = `ID: ${produto.cod}, Produto: ${produto.produto}, Categoria: ${produto.categoria}, Quantidade: ${produto.quantidade}, Preço: ${produto.preco}, Descrição: ${produto.descricao}`;

          // Adicionar o item à lista não ordenada
          ul.appendChild(li);
      }

      // Limpar o conteúdo anterior e adicionar a nova lista ao elemento
      productList.innerHTML = "";
      productList.appendChild(ul);
  }

  // Chame a função para inicializar a lista ao carregar a página
  updateProductList();
});
