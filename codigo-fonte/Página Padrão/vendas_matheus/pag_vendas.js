document.addEventListener("DOMContentLoaded", function () {
    const produtos = JSON.parse(localStorage.getItem("produtosSalvos")) || [];

    function atualizarListaProdutos() {
        const tabelaDeProdutos = document.querySelector("#tabelaProdutosSalvos");

        // Preencher a tabela com os produtos
        produtos.forEach(function (produto, index) {
            const row = tabelaDeProdutos.insertRow();

            const cellCod = row.insertCell(0);
            cellCod.textContent = produto.cod;

            const cellNome = row.insertCell(1);
            cellNome.textContent = produto.nome;

            const cellEstoque = row.insertCell(2);
            cellEstoque.textContent = produto.quantidade;

            const cellCusto = row.insertCell(3);
            cellCusto.textContent = produto.custo;

            const cellvalorVenda = row.insertCell(4);
            cellvalorVenda.textContent = produto.valorVenda;

            // Adiciona o botão "Adicionar no Carrinho"
            const cellBotao = row.insertCell(5);
            const botao = document.createElement("button");
            botao.className = "btn-adicionar";
            botao.textContent = "Adicionar";
            botao.onclick = function () {
                adicionarNoCarrinho(this);
            };
            cellBotao.appendChild(botao);
        });
    }

    atualizarListaProdutos();

    function adicionarNoCarrinho(botao) {
        // Encontrar a linha da tabela onde o botão foi clicado
        const linha = botao.closest('tr');
    
        // Obter os dados da linha
        const cod = linha.cells[0].textContent;
        const produto = linha.cells[1].textContent;
    
        // Modificar para garantir que a quantidade seja um número válido
        const quantidade = parseInt(linha.cells[2].textContent.trim()) || 0;
    
        // Modificar para garantir que o preço seja um número válido
        const preco = parseFloat(linha.cells[4].textContent.trim().replace('R$', '').replace(',', '.')) || 0;
    
        console.log("Valores obtidos para adicionar ao carrinho:", { cod, produto, quantidade, preco });
    
        // Adicionar o produto ao carrinho
        const carrinho = document.querySelector("#tabelaPrudotosVendas");
        const novaLinha = carrinho.insertRow();
        const cellCodigoCarrinho = novaLinha.insertCell(0);
        const cellProdutoCarrinho = novaLinha.insertCell(1);
        const cellQuantidadeCarrinho = novaLinha.insertCell(2);
        const cellPrecoCarrinho = novaLinha.insertCell(3);
    
        cellCodigoCarrinho.textContent = cod;
        cellProdutoCarrinho.textContent = produto;
        cellQuantidadeCarrinho.textContent = quantidade;
        cellPrecoCarrinho.textContent = preco;
    
        // Adicionar o botão de remoção
        const cellRemover = novaLinha.insertCell(-1); // -1 insere no final
        const botaoRemover = document.createElement("button");
        botaoRemover.className = "btn-remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            removerDoCarrinho(this);
        };
        cellRemover.appendChild(botaoRemover);
    
        console.log("Produto adicionado ao carrinho:", { cod, produto, quantidade, preco });
        // atualizarCarrinhoLocalStorage();
    }
    

    function removerDoCarrinho(botaoRemover) {
        const linhaRemover = botaoRemover.closest('tr');
        linhaRemover.remove();
        // atualizarCarrinhoLocalStorage();
    }


    const botaoLimparCarrinho = document.querySelector("#botaoLimparCarrinho");
    botaoLimparCarrinho.addEventListener("click", function () {
        limparCarrinho();
    });

});
