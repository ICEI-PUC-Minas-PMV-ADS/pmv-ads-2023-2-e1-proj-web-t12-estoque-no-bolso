document.addEventListener('DOMContentLoaded', function () {
   
  // Recuperar os dados dos PRODUTOS do localStorage
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  
  document
      .querySelector("#contact-form")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        // Coletar os dados do formulário
        const nome = document.querySelector("#nome").value;
        const email = document.querySelector("#email").value;
        const telefone = document.querySelector("#telefone").value;
        const mensagem = document.querySelector("#mensagem").value;
        const whatsapp = document.querySelector("#whatsapp").value;

        // Verificar se o nome e o email foram preenchidos
        if (nome && email) {
          // Criar um objeto de contato com um ID único
          const produto = {
            id: idCounter, // Use o contador como ID
            nome,
            email,
            telefone,
            whatsapp,
            mensagem,
          };

          // Incrementar o contador para o próximo ID único
          idCounter++;

          // Adicionar o contato à lista
          produtos.push(produto);

          // Salvar os contatos no localStorage
          localStorage.setItem("produtos", JSON.stringify(produtos));

          // Limpar o formulário
          document.querySelector("#nome").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#telefone").value = "";
          document.querySelector("#whatsapp").value = "";
          document.querySelector("#mensagem").value = "";

          // Exibir uma mensagem de confirmação
          document.querySelector("#confirmation-message").textContent =
            "Contato salvo com sucesso!";
        }

  
  

// MODAL

  const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');
    const itemForm = document.getElementById('itemForm');
  
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    itemForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const newItem = {
        name: document.getElementById('itemName').value,
        price: document.getElementById('itemPrice').value,
        cost: document.getElementById('itemCost').value,
        quantity: document.getElementById('itemQuantity').value,
        id: document.getElementById('itemID').value,
        size: document.getElementById('itemSize').value,
        description: document.getElementById('itemDescription').value,
        category: document.getElementById('itemCategory').value,
        image: document.getElementById('itemImage').value, // Aqui você pode salvar o caminho ou a imagem em base64
      };
  
      let itemList = JSON.parse(localStorage.getItem('itemList')) || [];
      itemList.push(newItem);
      localStorage.setItem('itemList', JSON.stringify(itemList));
  
      modal.style.display = 'none';
    });
  });
}