document.addEventListener('DOMContentLoaded', function () {
    const produtos = []; // Array para armazenar os produtos

    const modalProdutos = new bootstrap.Modal(document.getElementById('modalProdutos'), {
        backdrop: 'static'
    });

    const formProdutos = document.getElementById('form-produtos');
    const btnSalvar = document.getElementById('btn_salvar');
    const tabelaProdutos = document.getElementById('tabelaPrudotosVendas');

    // Função para limpar o formulário
    function clearForm() {
        formProdutos.reset();
    }

    // Função para renderizar a tabela de produtos
    function renderTable() {
        tabelaProdutos.innerHTML = '';

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];

            const row = document.createElement('tr');
            row.innerHTML = `<td><input type="checkbox" class="form-check-input"></td>
                            <td>${produto.id}</td>
                            <td>${produto.nome}</td>
                            <td>${produto.estoque}</td>
                            <td>${produto.custo}</td>
                            <td>${produto.preco}</td>`;

            tabelaProdutos.appendChild(row);
        }
    }

    // Evento do botão "Adicionar"
    const btnAdicionar = document.getElementById('btn_adicionar');
    if (btnAdicionar) {
        btnAdicionar.addEventListener('click', function () {
            clearForm();
            modalProdutos.show();
        });
    }

    // Evento do botão "Salvar"
    btnSalvar.addEventListener('click', function () {
        // Adicione aqui a lógica para salvar o produto no array
        // Exemplo:
        const novoProduto = {
            id: document.getElementById('txt_cod').value,
            nome: document.getElementById('txt_produto').value,
            // Adicione os outros campos conforme necessário
        };

        produtos.push(novoProduto);

        // Renderiza a tabela novamente
        renderTable();

        // Limpa o formulário e fecha o modal
        clearForm();
        modalProdutos.hide();
    });

    // Evento do botão "Excluir"
    document.getElementById('btn_excluir').addEventListener('click', function () {
        // Adicione aqui a lógica para excluir os produtos selecionados
        // Exemplo:
        const checkboxes = document.querySelectorAll('#tabelaPrudotosVendas input[type="checkbox"]:checked');

        for (let i = checkboxes.length - 1; i >= 0; i--) {
            const index = checkboxes[i].parentNode.parentNode.rowIndex - 1;
            produtos.splice(index, 1);
        }

        // Renderiza a tabela novamente
        renderTable();
    });

    // Evento da tabela para abrir modal de edição
    tabelaProdutos.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName === 'TD' && target.parentNode.rowIndex > 0) {
            const index = target.parentNode.rowIndex - 1;
            const produtoSelecionado = produtos[index];

            // Preencha o formulário com os dados do produto
            document.getElementById('txt_cod').value = produtoSelecionado.id;
            document.getElementById('txt_produto').value = produtoSelecionado.nome;
            // Preencha os outros campos conforme necessário

            // Abre o modal de edição
            modalProdutos.show();
        }
    });
});