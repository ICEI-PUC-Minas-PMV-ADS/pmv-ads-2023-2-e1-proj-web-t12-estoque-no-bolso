# Especificação do Projeto

## Perfis de Usuários


| PERFIL     | DESCRIÇÃO                                   | NECESSIDADE                                                                                                                                                  |
|------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VENDEDOR   | Pessoa responsável por vendas.              | 1. Consultar o quantidade de itens em estoque 2. Consultar preço dos produtos 3. Consultar valor de custo de produtos 4. Registra venda                      |
| GESTOR     | Gestor do empreendimento.                   | 1. Consultar vendas 2. Consultar historico de compras feitas 3. Consultar quantidade de itens em estoque 4. Ser alertado em caso de estoque abaixo do limite |
| ESTOQUISTA | Pessoa responsável por controle de estoque. | 1. Consultar o estoque 2. Fazer balanço de estoque 3. atualizar saldo de estoque 4. Registrar entrada e saída de itens                                       |

Vale ressaltar que, por se tratar de micro e pequenas empresas, há casos em que o proprietário realiza todas as funções. Portanto, o este se enquadra em todos os perfis. 


## Histórias de Usuários

Baseando-se nos perfis de usuários, foram identificadas as seguintes histórias de usuarios:

| EU COMO    | QUERO/PRECISO                                       | PARA                                                            |
|------------|-----------------------------------------------------|-----------------------------------------------------------------|
| ESTOQUISTA | ATUALIZAR SALDO DE ESTOQUE                          | PARA FAZER O BALANÇO DO ESTOQUE                                 |
| ESTOQUISTA | COMPARAR ESTOQUE COM SALDO NO SISTEMA               | PARA FAZER O BALANÇO DO ESTOQUE                                 |
| ESTOQUISTA | CADASTRAR OS PRODUTOS NO SISTEMA                    | PARA REALIZAR O CONTROLE DE ESTOQUE                             |
| ESTOQUISTA | CADASTRAR PREÇO NOS ITENS EM ESTOQUE                | PARA PERMITIR FUTURAS CONSULTAS                                 |
| ESTOQUISTA | COMPARAR HISTÓRICO DE ESTOQUE                       | PARA REALIZAR O CONTROLE DE ESTOQUE                             |
| GESTOR     | REGISTRAR COMPRA DE MATERIA PRIMA OU MERCADORIA     | PARA DAR ENTRADA DE PRODUTOS NO ESTOQUE                         |
| GESTOR     | CONSULTAR COMPRA REALIZADA PELA EMPRESA             | PARA COMPARAR VALORES PAGOS E SABER O MENOR PREÇO               |
| GESTOR     | CONSULTAR VENDAS REALIZADAS DE DETERMINADO PRODUTO  | PARA TER CONTROLE DE VENDAS                                     |
| GESTOR     | CONSULTAR ENTRADAS E SAIDAS DO ESTOQUE              | PARA REALIZAR O CONTROLE DE ESTOQUE                             |
| GESTOR     | DE UM ALERTA PARA SALDO BAIXO                       | PARA QUE EU POSSA COMPRAR UM ITEM QUANDO ESTIVER NO FINAL       |
| GESTOR     | CONSULTAR SALDO DE VENDAS (CAIXA)                   | PARA SABER O VALOR VENDIDO DE CADA ITEM EM CAIXA                |
| GESTOR     | UM RELATÓRIO DE VENDAS                              | PARA TER INSIGHTS SOBRE MEUS PRODUTOS                           |
| VENDEDOR   | PESQUISAR UM PRODUTO EM ESTOQUE                     | PARA CONSULTAS NA VENDA                                         |
| VENDEDOR   | CONSULTAR VALOR DE CUSTO DE UM ITEM                 | PARA PODER CONCEDER UM DESCONTO                                 |
| VENDEDOR   | REGISTRAR A VENDA                                   | PARA DAR BAIXA NO ESTOQUE E MARCAR ENTRADA DE DINHEIRO NO CAIXA |
| VENDEDOR   | PRECISO CONSULTAR OS VALORES DO ITENS EM ESTOQUE    | PARA FACILITAR PASSAR UM VALOR AO CLIENTE                       |
| VENDEDOR   | CONSULTAR SALDO DE UM ITEM EM ESTOQUE               | PARA CONSULTAS NA VENDA                                         |


## Requisitos do Projeto

### Requisitos Funcionais

| ID    | DESCRIÇÃO DO REQUISITO                                                                                        | PRIORIDADE |
|-------|---------------------------------------------------------------------------------------------------------------|------------|
| RF-01 | A aplicação deve permitir ao usuário fazer o cadastro de itens                                                | ALTA       |
| RF-02 | A aplicação deve permitir ao usuário fazer a consulta do custo dos itens                                      | MEDIA      |
| RF-03 | A aplicação deve permitir ao usuário registrar uma venda e dar baixa no sistema.                              | ALTA       |
| RF-04 | A aplicação deve enviar uma notificação sempre que o estoque estiver abaixo do permitido                      | MÉDIA      |
| RF-05 | A aplicação deve permitir ao usuário atualizar a quantidade de itens no estoque                               | ALTA       |
| RF-06 | A aplicação deve permitir ao usuário registrar a compra de um item                                            | BAIXA      |
| RF-07 | A aplicação deve permitir ao usuário cadastrar o preço de venda de um item                                    | ALTA       |
| RF-08 | A aplicação deve ser capaz de gerar um relatório de vendas realizadas                                         | BAIXA      |
| RF-09 | A aplicação deve ser capaz de gerar um relatório da quantidade total dos produtos em estoque                  | ALTA       |
| RF-10 | A aplicação deve permitir ao usuário cadastrar uma imagem do produto                                          | BAIXA      |
| RF-11 | A aplicação deve permitir ao usuario editar, remover e arquivar algum item do estoque                         | ALTA       |
| RF-12 | A aplicação deve permitir ao usuário cadastrar uma conta.                                                     | MÉDIA      |
| RF-13 | A aplicação deve permitir ao usuário fazer o login da sua conta.                                              | MÉDIA      |
| RF-14 | A aplicação deve possibilitar realizar um filtro/pesquisa para permitir ao usuário localizar itens no estoque | ALTA       |

**Prioridade: Alta / Média / Baixa. 


### Requisitos Não Funcionais

| ID     | DESCRIÇÃO DO REQUISITO                                              | PRIORIDADE |
|--------|---------------------------------------------------------------------|------------|
| RNF-01 | A aplicação deve ser publicada em um ambiente com acesso à internet | ALTA       |
| RNF-02 | A aplicação deve ser responsível com diferentes tamanhos de tela    | ALTA       |
| RNF-03 | A aplicação deve ser compatível com diferentes navegadores          | ALTA       |
| RNF-04 | A aplicação deve estar disponível 24 horas                          | MÉDIA      |
| RNF-05 | A aplicação deve ser fácil e intuitiva de usar                      | ALTA       |

**Prioridade: Alta / Média / Baixa. 

