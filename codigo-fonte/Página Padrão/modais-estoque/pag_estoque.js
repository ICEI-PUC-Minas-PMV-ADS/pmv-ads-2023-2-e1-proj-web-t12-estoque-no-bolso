document.addEventListener('DOMContentLoaded', function() {
  
    // Recuperar os dados dos PRODUTOS do localStorage
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  
    // Associar salvamento ao botão
    document.querySelector('#btn_salvar').addEventListener('click', function(e) {
      salvaProduto(e);
      console.log('btn_salvar');
    });
  
    function salvaProduto(e) {
      e.preventDefault();
    
      // Coletar os dados do formulário
      let cod = document.querySelector('#txt_cod').value;
      let produto = document.querySelector('#txt_produto').value;
      let categoria = document.querySelector('#txt_categoria').value;
      let variacao = document.querySelector('#txt_variacao').value;
      let custo = document.querySelector('#txt_custo').value;
      let quantidade = document.querySelector('#txt_quantidade').value;
      let preco = document.querySelector('#txt_preco').value;
      let descricao = document.querySelector('#txt_descricao').value;
    
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
      }
    }
  });
  
      
        //   // Limpar o formulário
        //   document.querySelector("#nome").value = "";
        //   document.querySelector("#email").value = "";
        //   document.querySelector("#telefone").value = "";
        //   document.querySelector("#whatsapp").value = "";
        //   document.querySelector("#mensagem").value = "";

        //   // Exibir uma mensagem de confirmação
        //   document.querySelector("#confirmation-message").textContent =
        //     "Contato salvo com sucesso!";
        // }
  

  //   // MODAL

  //   const openModalBtn = document.querySelector('openModalBtn');
  //   const closeModalBtn = document.querySelector('closeModalBtn');
  //   const modal = document.querySelector('myModal');
  //   const itemForm = document.querySelector('itemForm');
  
  //   openModalBtn.addEventListener('click', function () {
  //     modal.style.display = 'block';
  //   });
  
  //   closeModalBtn.addEventListener('click', function () {
  //     modal.style.display = 'none';
  //   });
  
  //   itemForm.addEventListener('submit', function (e) {
  //     e.preventDefault();
  
  //     const newItem = {
  //       name: document.querySelector('itemName').value,
  //       price: document.querySelector('itemPrice').value,
  //       cost: document.querySelector('itemCost').value,
  //       quantity: document.querySelector('itemQuantity').value,
  //       id: document.querySelector('itemID').value,
  //       size: document.querySelector('itemSize').value,
  //       description: document.querySelector('itemDescription').value,
  //       category: document.querySelector('itemCategory').value,
  //       image: document.querySelector('itemImage').value, // Aqui você pode salvar o caminho ou a imagem em base64
  //     };
  
  //     let itemList = JSON.parse(localStorage.getItem('itemList')) || [];
  //     itemList.push(newItem);
  //     localStorage.setItem('itemList', JSON.stringify(itemList));
  
  //     modal.style.display = 'none';
  //   });
  // });
 