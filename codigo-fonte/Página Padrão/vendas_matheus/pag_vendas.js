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
                adicionarNoCarrinho(this, produto);
            };
            cellBotao.appendChild(botao);
        });
    }

    atualizarListaProdutos();

    function adicionarNoCarrinho(botao, produto) {
        // Encontrar a linha da tabela onde o botão foi clicado
        const linha = botao.closest('tr');
    
        // Obter os dados da linha
        const cod = linha.cells[0].textContent;
        const nomeProduto = linha.cells[1].textContent;
    
        // Solicitar ao usuário a quantidade desejada
        const quantidadeDigitada = prompt(`Digite a quantidade desejada para ${nomeProduto}:`);
    
        // Validar se a quantidade é um número válido
        const quantidade = parseInt(quantidadeDigitada.trim()) || 0;
    
        // Calcular o novo preço com base na quantidade
        const precoUnitario = parseFloat(produto.valorVenda.trim().replace('R$', '').replace(',', '.')) || 0;
        const novoPreco = quantidade * precoUnitario;

        // Adicionar o produto ao carrinho
        const carrinho = document.querySelector("#tabelaPrudotosVendas");
        const novaLinha = carrinho.insertRow();
        const cellCodigoCarrinho = novaLinha.insertCell(0);
        const cellProdutoCarrinho = novaLinha.insertCell(1);
        const cellQuantidadeCarrinho = novaLinha.insertCell(2);
        const cellPrecoCarrinho = novaLinha.insertCell(3);
    
        cellCodigoCarrinho.textContent = cod;
        cellProdutoCarrinho.textContent = nomeProduto;
        cellQuantidadeCarrinho.textContent = quantidade;
        cellPrecoCarrinho.textContent = novoPreco.toFixed(2);
    
        // Adicionar o botão de remoção
        const cellRemover = novaLinha.insertCell(-1); // -1 insere no final
        const botaoRemover = document.createElement("button");
        botaoRemover.className = "btn-remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function () {
            removerDoCarrinho(this);
        };
        cellRemover.appendChild(botaoRemover);

        // Mover a linha "TOTAL" para o final da tabela
        const tabelaCarrinho = document.querySelector("#tabelaPrudotosVendas");
        const linhaTotal = tabelaCarrinho.querySelector('.linha-total');
        tabelaCarrinho.appendChild(linhaTotal);

        // Atualizar o total da compra
        atualizarTotalCompra();

        console.log("Produto adicionado ao carrinho:", { cod, nomeProduto, quantidade, novoPreco });
        // atualizarCarrinhoLocalStorage();
    }
    
    function atualizarTotalCompra() {
        // Encontrar a tabela de carrinho
        const tabelaCarrinho = document.querySelector("#tabelaPrudotosVendas");
    
        // Verificar se há pelo menos uma linha (excluindo a linha "TOTAL")
        if (tabelaCarrinho.rows.length > 1) {
            // Calcular o total somando os valores da coluna "preço"
            let totalCompra = 0;
            for (let i = 0; i < tabelaCarrinho.rows.length - 1; i++) {
                const precoCell = tabelaCarrinho.rows[i].cells[3];
                if (precoCell) {
                    totalCompra += parseFloat(precoCell.textContent);
                }
            }
    
            // Encontrar a linha "TOTAL"
            const linhaTotal = tabelaCarrinho.querySelector('.linha-total');
    
            // Atualizar a célula de total com o valor calculado
            const cellTotal = linhaTotal.querySelector('#totalCompra');
            if (cellTotal) {
                cellTotal.textContent = totalCompra.toFixed(2);
                console.log("Total da compra atualizado:", totalCompra);
            } else {
                console.error("Erro ao encontrar a célula de total.");
            }
        } else {
            // Se não houver itens no carrinho, definir o total como 0.00
            const cellTotal = tabelaCarrinho.querySelector('#totalCompra');
            if (cellTotal) {
                cellTotal.textContent = '0.00';
                console.log("Carrinho vazio. Total resetado para 0.00");
            } else {
                console.error("Erro ao encontrar a célula de total.");
            }
        }
    }
    
    
    function removerDoCarrinho(botaoRemover) {
        const linhaRemover = botaoRemover.closest('tr');
        linhaRemover.remove();
        // atualizarCarrinhoLocalStorage();
        atualizarTotalCompra(); // Atualizar o total após remover um item
    }  
});
