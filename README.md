# pipefy_test_web_cypress

<p id="sobre" align="center">

  ![](https://img.shields.io/badge/license-MIT-green)
  ![](https://img.shields.io/badge/language-Portuguese-yellow)
  ![](https://img.shields.io/badge/language-NodeJS-red)
  
Automação de testes WEB end-to-end do formulário QA Interview da Pipefy
  
  
Tabela de conteúdos
=================
<!--ts-->
 * [Sobre](#sobre)
 * [Pre Requisitos](#pre-requisitos)
 * [Executando a aplicação](#rodando)
 <!--te-->

 <!-- Altere os Pré-requisitos -->

###  Pré-requisitos<a id="pre-requisitos"></a>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
 [Git](https://git-scm.com/),
 [NVM](https://github.com/nvm-sh/nvm),
 [NodeJS](https://nodejs.org/en/).

 Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
  
  ### 🎲Rodando a Aplicação<a id="rodando"></a>

````bash
 # Clone este repositório
 git clone git@github.com:cargox/cargox_test_cargoforce_cypress.git

 # Acesse a pasta do projeto no terminal
 cd pasta

  # Instale as dependências do projeto
 $ npm install

 # Execute a aplicação no modo interativo
 $ npx cypress open
  
 # Execute a aplicação no modo headless
 $ npm run <nome_browser>:headless:run

 ````
  
**Observações:**
- O projeto será executado no CI através de um container docker sempre que for realizado um push e/ou merge afim de encontrar possíveis problemas de código.
