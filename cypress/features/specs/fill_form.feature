#language: pt

@regressao @criarFreteTms
Funcionalidade: Fill Pipefy QA Interview Form
  Eu como um candido do processo seletivo da Pipefy
  Quero realizar o preenchimento do formulário

Contexto: Acessar o Formulário
  Dado que acesso o formulario

Cenario: Enviar o formulário preenchido
  Quando efetuo o envio do formulario preenchido
  Entao visualizo a mensagem de confirmacao
