# Registro de Testes de Software

# CT-01 - Cadastro de Usuários

Usuário preenche os campos "Email" e "Senha" inválidos ou de usuário não cadastrado.
Navegador retorna que os dados estão inválidos.

Responsável pela execução do caso de Teste | Matheus

![Captura de tela 2023-11-26 172306](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/145354919/0f532674-37bd-460c-b9f5-e58e8f60a978)


# CT-02 - Login de usuários

Dados para inclusão de novo usuários são preenchidos, inclusive com senha e confirmação de senha.
Se o usuário já estiver cadastrado e as informações de usuário e senha estiverem corretas, o login será bem-sucedido.

Responsável pela execução do caso de Teste | Fagner 

![Captura de tela 2023-11-15 064900](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/145354919/d652ac46-d309-4c90-b3ed-3a029b0aea52)

| Informações armazenadas no LocalStorage do usuário logado |

![Captura de tela 2023-11-26 172533](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/145354919/0485af40-05aa-4082-9bfc-5f7762fa546e)

| Informação disponíveis na pasta cadastro de usuários |

![Captura de tela 2023-11-26 172446](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/145354919/0899204d-424e-4269-89bf-0cd24b39bc31)

# CT-03 - Relatório de Vendas

Existem dois botões relacionados aos relatórios de vendas, seria venda de acordo com produtos e outro um relatório total de vendas, ao clicar no primeiro aparece uma pagina zerada mesmo já tendo um produto vendido. Ao clicar no segundo ele exibe de maneira correta todas as vendas feitas.

Responsável pela execução do caso de Teste | Fagner

[CT-04](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/144800739/74164fd9-d3af-4bc3-9286-ba0d32b757a6)

# CT-04 - Relatório de Estoque

Existem dois botões relacionados aos relatórios de estoque, seriam eles estoque total e estoque por produto, os dois cumprem com as descritas funções dos casos de teste.

Responsável pela execução do caso de Teste | Fagner



[Ct-05](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/144800739/31da0706-72b6-4653-a665-19fb2f947330)




# CT-05 - Links página home
Na página Home, ao clicar nos botões eles direcionam corretamente ao ponto indicado, seja um ponto específico na própria Home ou outra página da aplicação, como no caso do botão de login ou contato.

Responsável pela execução do caso de Teste | Mariana

[Untitled_ Nov 26, 2023 8_26 PM.webm](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/145354919/4ff10910-6f4c-4cab-b3b9-f66a14c14eb9)

# CT-06 - Funcionalidades página de estoque - cadastro de itens

Nesta página é exibido uma lista com os itens cadastrados e suas informações. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/58199879/5fea6383-a4a4-4bf0-a0c9-e30eae4f493e)


Ao clicar no botão "adicionar", o modal para cadastro dos itens é exibido. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/58199879/fe91c36d-2d85-4b42-9eb7-a64030e085bf)


| Dados salvos no Local storage | 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/58199879/82873a80-8d3b-4ee1-8f9a-1bd98695581e)


# CT-07 - Funcionalidades página de estoque - edição de itens

Nesta página é exibido uma lista com os itens cadastrados e suas informações.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/58199879/5fea6383-a4a4-4bf0-a0c9-e30eae4f493e)

Ao clicar no botão "editar", o modal editar os item é exibido.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/58199879/e360f1e9-6506-4dd6-92da-2fa657446024)

Após clicar no botão salvar, o item é atualizado.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/58199879/b1ec5cba-9849-4993-9ace-09033e9f0af8)

# CT-08 - Verificar funcionamento da página de vendas


A aplicação permite que o usuário escolha um dos produtos e defina a quantidade a ser vendida. Após clicar em adicionar a venda, é gerada uma lista de produtos vendidos e qual o valor da venda.

Responsável pela execução do caso de Teste | Mariana

[Untitled_ Nov 26, 2023 8_46 PM.webm](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t12-estoque-no-bolso/assets/145354919/cb34e26e-3c7f-416f-8c43-d1b330a7f32d)


