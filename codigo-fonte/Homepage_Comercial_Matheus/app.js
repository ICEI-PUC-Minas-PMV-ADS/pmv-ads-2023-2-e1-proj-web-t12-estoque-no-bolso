document.addEventListener("DOMContentLoaded", function() {
  // Recuperar os dados dos contatos do localStorage
  const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
  // let idCounter = 1; // Inicialize um contador de IDs
  let idCounter = idCounter;  


  // Verificar se estamos na página index.html
  if (window.location.pathname.includes("/index.html")) {
      
    // Função para salvar o formulário da página "index.html"
      document.querySelector('#contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Coletar os dados do formulário
        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const telefone = document.querySelector('#telefone').value;
        const mensagem = document.querySelector('#mensagem').value;
        const whatsapp = document.querySelector('#whatsapp').value;

        // Verificar se o nome e o email foram preenchidos
        if (nome && email) {
          // Criar um objeto de contato com um ID único
          const contato = {
            id: idCounter, // Use o contador como ID
            nome,
            email,
            telefone,
            whatsapp,
            mensagem
          };

          // Incrementar o contador para o próximo ID único
          idCounter++;

          // Adicionar o contato à lista
          contatos.push(contato);

          // Salvar os contatos no localStorage
          localStorage.setItem('contatos', JSON.stringify(contatos));

          // Limpar o formulário
          document.querySelector('#nome').value = '';
          document.querySelector('#email').value = '';
          document.querySelector('#telefone').value = '';
          document.querySelector('#whatsapp').value = '';
          document.querySelector('#mensagem').value = '';

          // Exibir uma mensagem de confirmação
          document.querySelector('#confirmation-message').textContent = 'Contato salvo com sucesso!';
        } else {
          // Exibir mensagem de erro se nome e email não forem preenchidos
          document.querySelector('#confirmation-message').textContent = 'Por favor, preencha o nome e o email.';
        }
    });
  }

  // Verificar se estamos na página FormularioDeContato.html
  if (window.location.pathname.includes("FormularioDeContato.html")) {
    // Função para atualizar a lista de contatos na página "FormularioDeContato.html"
    function atualizarListaDeContatos() {
      const contatoTable = document.querySelector("#tabelaDeContatos");

      // Limpar a tabela antes de atualizar
      contatoTable.innerHTML = "";

      // Preencher a tabela com os contatos
      contatos.forEach(function (contato, index) {
        const row = contatoTable.insertRow();

        // Checkbox para seleção
        const cellCheckbox = row.insertCell(0);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        cellCheckbox.appendChild(checkbox);

        // ID
        const cellID = row.insertCell(1);
        cellID.textContent = contato.id; // Use o ID do contato

        // Demais informações do contato
        const cellNome = row.insertCell(2);
        cellNome.textContent = contato.nome;

        const cellEmail = row.insertCell(3);
        cellEmail.textContent = contato.email;

        const cellTelefone = row.insertCell(4);
        cellTelefone.textContent = contato.telefone;

        const cellWhatsApp = row.insertCell(5);
        cellWhatsApp.textContent = contato.whatsapp ? "Sim" : "Não";

        const cellMensagem = row.insertCell(6);
        cellMensagem.textContent = contato.mensagem;

        // Botão de Excluir
        const cellExcluir = row.insertCell(7);
        const excluirBtn = document.createElement("button");
        excluirBtn.textContent = "Excluir";
        excluirBtn.addEventListener("click", function () {
          // Encontrar o índice do contato pelo ID
          const id = contatos.findIndex(c => c.id === contato.id);

          // Remover o contato da lista com base no índice
          contatos.splice(id, 1);

          // Atualizar o localStorage
          localStorage.setItem('contatos', JSON.stringify(contatos));

          // Remover a linha da tabela
          row.remove();
        });
        cellExcluir.appendChild(excluirBtn);
      });
    }

    // Carregar a lista de contatos na inicialização
    atualizarListaDeContatos();

    // Excluir Contatos Selecionados
    const excluir = document.querySelector("#excluir");
    excluir.addEventListener("click", function () {
      const checkboxes = document.querySelectorAll("input[type='checkbox']:checked");

      checkboxes.forEach(function (checkbox) {
        const row = checkbox.parentElement.parentElement;
        const id = parseInt(row.cells[1].textContent);

        // Encontrar o índice do contato pelo ID
        const index = contatos.findIndex(c => c.id === id);

        // Remover o contato da lista com base no índice
        contatos.splice(index, 1);

        // Atualizar o localStorage
        localStorage.setItem('contatos', JSON.stringify(contatos));

        // Remover a linha da tabela
        row.remove();
      });
    });

    // Cancelar a edição
    document.querySelector('#cancelar-edit').addEventListener('click', function () {
      document.querySelector('#edit-form-container').style.display = 'none';
    });

    // Salvar edição
    document.querySelector('#salvar-edit').addEventListener('click', function () {
      const id = parseInt(document.querySelector('#form-edit').getAttribute('data-contact-id'));
      const contato = contatos.find(c => c.id === id);

      // Atualizar os dados do contato com as informações do formulário de edição
      contato.nome = document.querySelector('#nome-edit').value;
      contato.email = document.querySelector('#email-edit').value;
      contato.telefone = document.querySelector('#telefone-edit').value;
      contato.mensagem = document.querySelector('#whatsapp-edit').value;
      contato.mensagem = document.querySelector('#mensagem-edit').value;

      // Atualizar o localStorage
      localStorage.setItem('contatos', JSON.stringify(contatos));

      // Fechar o formulário de edição
      document.querySelector('#edit-form-container').style.display = 'none';

      // Atualizar a tabela de contatos
      atualizarListaDeContatos();
    });
  }


  // verifica se estamos na página pag_produtos.html
  if (window.location.pathname.includes("pag_produtos.html")) {
    
  }  

  // verifca se estamos na página pag_vendas.html
  if (window.location.pathname.includes("pag_vendas.html")) {
  }
});
