document.addEventListener("DOMContentLoaded", function () {
    const produtos = JSON.parse(localStorage.getItem("produtosSalvos")) || [];
    const btnLimpar = document.getElementById("btnLimparCarrinho");

    // LIMPAR CARRINHO
    btnLimpar.addEventListener("click", limparCarrinho);
    
    function limparCarrinho() { 
        // Encontrar a tabela de carrinho
        const tabelaCarrinho = document.querySelector("#tabelaPrudotosVendas");
    
        // Remover todas as linhas da tabela
        while (tabelaCarrinho.rows.length > 0) {
            tabelaCarrinho.deleteRow(0);
        }
    
        // Outras ações que você pode querer realizar, como atualizar o localStorage
        atualizarCarrinhoLocalStorage();
    
        console.log("Carrinho limpo com sucesso!");
    };

    // ATUALIZA A LISTA DE PRODUTOS SALVOS EM ESTOQUE
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
            botao.className = "btn-excluir";
            botao.textContent = "Adicionar";
            botao.onclick = function () {
                adicionarNoCarrinho(this, produto);
            };
            cellBotao.appendChild(botao);
        });
    }

    // ADICIONAR O ITEM SELECIONADO NO CARRINHO
    function adicionarNoCarrinho(botao, produto) {
        // Encontrar a linha da tabela onde o botão foi clicado
        const linha = botao.closest('tr');
    
        // Obter os dados da linha
        const cod = linha.cells[0]?.textContent;
        const nomeProduto = linha.cells[1]?.textContent;
    
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
    
        novaLinha.classList.add("itemNoCarrinho");

        cellCodigoCarrinho.textContent = cod || '';
        cellProdutoCarrinho.textContent = nomeProduto || '';
        cellQuantidadeCarrinho.textContent = quantidade;
        cellPrecoCarrinho.textContent = novoPreco.toFixed(2);
    
        // Adicionar o botão de remoção
        const cellRemover = novaLinha.insertCell(-1); // -1 insere no final
        const botaoRemover = document.createElement("button");
        botaoRemover.className = "btn-excluir";
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
    
        // Salvar no localStorage
        atualizarCarrinhoLocalStorage();
    
        console.log("Produto adicionado ao carrinho:", { cod, nomeProduto, quantidade, novoPreco });
    }
    
    // ATUALIZA O VALOR TOTAL DA COMPRA
    function atualizarTotalCompra() {
        // Encontrar a tabela de carrinho
        const tabelaCarrinho = document.querySelector("#tabelaPrudotosVendas");
    
        // Verificar se há pelo menos uma linha (excluindo a linha "TOTAL")
        if (tabelaCarrinho.rows.length > 1) {
            // Calcula o total somando os valores da coluna "preço"
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
    
    // BOTAO PARA REMOVER O ITEM DO CARRINHO
    function removerDoCarrinho(botaoRemover) {
        const linhaRemover = botaoRemover.closest('tr');
        linhaRemover.remove();
        // Atualizar o total após remover um item
        atualizarTotalCompra();
        
        // Salvar no localStorage
        atualizarCarrinhoLocalStorage();
    }

    // ATUALIZA O CARRINHO NO LOCAL STORAGE
    function atualizarCarrinhoLocalStorage() {
        // Encontrar a tabela de carrinho
        const tabelaCarrinho = document.querySelector("#tabelaPrudotosVendas");
    
        // Criar um array para armazenar os produtos do carrinho
        const produtosCarrinho = [];
    
        // Iterar sobre as linhas da tabela (excluindo a linha "TOTAL")
        for (let i = 0; i < tabelaCarrinho.rows.length - 1; i++) {
            const linha = tabelaCarrinho.rows[i];
    
            // Obter os dados da linha
            const cod = linha.cells[0]?.textContent || '';
            const nomeProduto = linha.cells[1]?.textContent || '';
            const quantidade = parseInt(linha.cells[2]?.textContent) || 0;
            const preco = parseFloat(linha.cells[3]?.textContent) || 0;
    
            // Adicionar o produto ao array
            produtosCarrinho.push({ cod, nomeProduto, quantidade, preco });
        }
    
        // Salvar o array no localStorage
        localStorage.setItem("produtosCarrinho", JSON.stringify(produtosCarrinho));
    
        console.log("Dados do carrinho salvos no localStorage:", produtosCarrinho);
    }
    
    // CARREGA OS DADOS DO CARRINHO NO LOCAL STORAGE
    function carregarCarrinhoDoLocalStorage() {
        const produtosCarrinho = JSON.parse(localStorage.getItem("produtosCarrinho")) || [];
    
        // Verificar se há produtos no carrinho
        if (produtosCarrinho.length > 0) {
            // Encontrar a tabela de carrinho
            const tabelaCarrinho = document.querySelector("#tabelaPrudotosVendas");
    
            // Limpar a tabela antes de adicionar os produtos do carrinho
            while (tabelaCarrinho.rows.length > 1) {
                tabelaCarrinho.deleteRow(0);
            }
    
            // Iterar sobre os produtos no carrinho
            produtosCarrinho.forEach(function (produto) {
                // Adicionar o produto à tabela de carrinho
                const novaLinha = tabelaCarrinho.insertRow();
                const cellCodigoCarrinho = novaLinha.insertCell(0);
                const cellProdutoCarrinho = novaLinha.insertCell(1);
                const cellQuantidadeCarrinho = novaLinha.insertCell(2);
                const cellPrecoCarrinho = novaLinha.insertCell(3);
    
                cellCodigoCarrinho.textContent = produto.cod || '';
                cellProdutoCarrinho.textContent = produto.nomeProduto || '';
                cellQuantidadeCarrinho.textContent = produto.quantidade;
                cellPrecoCarrinho.textContent = produto.preco.toFixed(2);
    
                // Adicionar o botão de remoção
                const cellRemover = novaLinha.insertCell(-1); // -1 insere no final
                const botaoRemover = document.createElement("button");
                botaoRemover.className = "btn-excluir";
                botaoRemover.textContent = "Remover";
                botaoRemover.onclick = function () {
                    removerDoCarrinho(this);
                };
                cellRemover.appendChild(botaoRemover);
            });
    
            // Mover a linha "TOTAL" para o final da tabela
            const linhaTotal = tabelaCarrinho.querySelector('.linha-total');
            tabelaCarrinho.appendChild(linhaTotal);
    
            // Atualizar o total da compra
            atualizarTotalCompra();
        }
    }
    
    // SCRIPT MODAL

    const btnModalVenda = document.getElementById("btnModalVenda");
    const formRegistrarVenda = document.getElementById("formRegistroVenda");
    const btnConfirmarVenda = document.getElementById("btnConfirmarVenda");
    
    // LIMPA O FORMULARIO NO MODAL
    btnModalVenda.addEventListener("click", function (event) {
        formRegistrarVenda.reset();
    });
    btnConfirmarVenda.addEventListener("click", confirmarVenda)

    // CONFIRMA A VENDA - PUXA OS DADOS DO CLIENTE E DO CARRINHO
    function confirmarVenda(event){
        event.preventDefault(); // Impede o envio padrão do formulário
        
        // Recuperar os registros de vendas existentes do localStorage
        const registrosExistente = JSON.parse(localStorage.getItem("registroVendas")) || [];
        const carrinhoAtual = JSON.parse(localStorage.getItem("produtosCarrinho")) || [];

        // PEGA DADOS DO CLIENTE
        const nomeCliente = document.getElementById("nomeCliente").value;
        const telefoneCliente = document.getElementById("telefoneCliente").value; 
        
        // SALVA OS DADOS DO CLIENTE NUMA VARIAVEL
        const dadosDoCliente = {nomeCliente, telefoneCliente};

        // PEGA VALOR TOTAL DO CARRINHO
        
        const totalCompraHTML = document.getElementById("totalCompra").textContent;
        const totalCompra = parseFloat(totalCompraHTML);
        console.log("Total da compra:", totalCompra);

        const vendaAtual = {dadosDoCliente, intensNoCarrinho: carrinhoAtual, totalCompra: totalCompra};

        registrosExistente.push(vendaAtual);

        // Salvar o array no localStorage
        localStorage.setItem("registroVendas", JSON.stringify(registrosExistente));

        limparCarrinho();

        // Fechar o modal após o envio
        $("#modalRegistrarVenda").modal("hide");
    }

    // FUNCAO MOSTRA ALERTA ESTOQUE BAIXO
    function contarItensEstoqueBaixo() {
        var dadosDoEstoque = JSON.parse(localStorage.getItem('produtosSalvos'));
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
        var dadosDoEstoque = JSON.parse(localStorage.getItem('produtosSalvos'));
        var estoqueMinimo = 10;
        var itens = [];
    
        for (var i = 0; i < dadosDoEstoque.length; i++) {
            if (dadosDoEstoque[i].quantidade < estoqueMinimo) {
                itens.push(dadosDoEstoque[i].nome);
            }
        }
    
        return itens;
    }


    window.onload = function() {
        var quantidade = contarItensEstoqueBaixo();
        document.getElementById('estoqueBaixo').innerText = quantidade;
    };
    

    atualizarListaProdutos();
    carregarCarrinhoDoLocalStorage();

});
