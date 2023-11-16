const relat_vendas_URL = "relat_vendas.html";
var produtoCorrente = {};
function confereProduto (produto, modelo) {
    
    for (var i = 0; i < db_produtos.produtos.length; i++) {
        var usuario = db_produtos.produtos[i];
        //esse db_produtos é o banco de dados onde os produtos estão sendo salvos
        if (produto == produto.nome && modelo == produto.modelo) {

            
            sessionStorage.setItem ('produtoCorrente', JSON.stringify (produtoCorrente));

            return true;
        }
    }

    return false;
}