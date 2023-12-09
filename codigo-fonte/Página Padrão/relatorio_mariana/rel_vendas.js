    
    document.addEventListener("DOMContentLoaded", function () {
    // ATUALIZA A LISTA DE PRODUTOS VENDIDOS
    function atualizarListaProdutos() {

        const registrosExistente = JSON.parse(localStorage.getItem("registroVendas")) || [];
        const tabelaDeProdutos = document.querySelector("#tabelaProdutosVendidos");
    
        // Preencher a tabela com os produtos
        registrosExistente.forEach(function (produto, index) {
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
        });
    }
    atualizarListaProdutos();
});