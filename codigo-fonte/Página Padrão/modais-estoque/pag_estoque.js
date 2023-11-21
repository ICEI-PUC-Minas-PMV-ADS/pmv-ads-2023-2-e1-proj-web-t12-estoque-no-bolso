document.addEventListener('DOMContentLoaded', function () {
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