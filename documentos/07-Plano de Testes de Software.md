# Plano de Testes de Software


Os testes funcionais a serem realizados na aplicação são descritos a seguir.

| Caso de teste | Requisitos Associados | Objetivo do teste | Passos | Critério de exito | Responsável |
| --- | --- | --- | --- | --- | ---- |
| CT 01: Verificar cadastro de usuários | RF: 012 O site deve permitir ao usuário cadastrar uma conta. | Conferir se o cadastro está sendo processado corretamente | 1. Acessar o navegador. 2.Informar o endereço do site. 3. Visualizar a página Home. 4. Clicar em "login", em seguida “novo usuário”. 5. Preencher o formulário e clicar em “submit” | Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Submit", deve aparecer a mensagem "Usuário cadastrado com sucesso" e ser direcionado para página de login. Os dados cadastrados devem ir para o banco de Cadastro de Usuários | João
| CT 02: Verificar login no site | RF: 013 O site deve permitir ao usuário logar no sistema. | Conferir se a função de login funciona corretamente | 1. Um usuário cadastrado deve acessar o navegador.  2. Informarmar os dados de usuário e senha.  3. Clicar em "login".  4. Se o cadastro estiver correto o usuário será encaminhado para página principal, se os dados estiverem incorreto, deve aparecer a mensagem de dados incorretos | O usuário deve ter acesso ao sistema se tiver fornecidos os dados corretos e dados incorretos ou usuáriosnão cadastrados deverão ser avisados  | João
| CT 03: Verificar o botão de relatório de vendas | RF: 08 A aplicação deve ser capaz de gerar um relatório de vendas realizadas. | Conferir se o relatório está sendo gerado corretamente | 1 - Acessar a página de relatórios; 2 – Clicar no botão “Relatório Total de Vendas” 3-Preencher o período solicitado e clicar | Ao clicar no botão deve aparecer na tela o relatório de todas as vendas cadastradas no período solicitado, se não houver vendas deve ser informado ao usuário que nenhuma venda foi efetivada. Caso o usuário desista de gerar o relatório ao fechar o popup ele deve ser redirecionado para a página de relatórios | João
| CT 03: Verificar o botão de relatório de estoque | RF: 09 A aplicação deve ser capaz de gerar um relatório da quantidade total dos produtos em estoque. | Conferir se o relatório está sendo gerado corretamente | 1 - Acessar a página de relatórios; 2 – Clicar no botão “Relatório Total de Estoque”; 3-Preencher o período solicitado e clicar | Ao clicar no botão deve aparecer na tela o relatório de todo o estoque cadastrado no período solicitado, se não houver estoque deve ser informado ao usuário que nenhum produto foi cadastrado. Caso o usuário desista de gerar o relatório ao fechar o popup ele deve ser redirecionado para a página de relatórios | João


 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
