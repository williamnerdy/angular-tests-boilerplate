#language: pt

Funcionalidade: Utilizar o counter
  O usuário deve ser capaz de utilizar o contador de cliques

  @cenario-sucesso
  Cenário: Incrementar corretamente
    Dado que acesso a tela inicial da aplicação
    Quando clicar no botão incrementar
    Então o valor deve ser adicionado 1

  @cenario-sucesso
  Cenário: Decrementar corretamente
    Dado que acesso a tela inicial da aplicação
    Quando clicar no botão decrementar
    Então o valor deve ser subtraído 1
