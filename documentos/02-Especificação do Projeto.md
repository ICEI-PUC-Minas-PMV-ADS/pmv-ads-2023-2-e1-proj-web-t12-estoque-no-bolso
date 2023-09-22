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

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |  ...                    | ...   | 
|  ...  |  ...                    | ...   |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |  ...                    | ...   | 
| ...    |  ...                    | ...   | 

**Prioridade: Alta / Média / Baixa. 

