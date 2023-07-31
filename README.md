# Registro de Ponto - Readme

## Descrição

Este é um projeto de registro de ponto desenvolvido para a empresa XYZ. O objetivo do sistema é permitir que os funcionários registrem seus horários de entrada e saída de forma fácil e prática. O sistema foi desenvolvido utilizando o framework Vue.js em sua versão 3.x e o Vuetify para a criação da interface gráfica.

## Funcionalidades

- Registro de usuário
- Sistema de autenticação
- Registro de horário de entrada
- Registro de horário de saída
- Exibição do horário Registrado por Usuário

## Instalação e Execução

Para executar o projeto em um ambiente local, siga os passos abaixo:

1. Clone o repositório para o seu computador:

`git clone git@github.com:Aoliveiradev/qualicorp-vuetify.git`

2. Acesse a pasta do projeto:

`cd qualicorp-vuetify`


3. Instale as dependências do projeto:

`npm install`
OBS: o projeto utiliza node 18.17.0


4. Inicie o servidor de desenvolvimento:

`npm run dev`


5. Acesse o projeto no navegador através do endereço:

`http://localhost:3000` 


## Dificuldades e Soluções

Durante o desenvolvimento deste projeto, enfrentei algumas dificuldades, dentre elas:

1. Integração de bibliotecas de data e hora: tive dificuldades em encontrar uma biblioteca de data e hora que funcionasse adequadamente com o Vue.js 3.x. Após algumas pesquisas, entendi que o vuetify 3x ainda não tem compatibilidade com esta feature, e como não tenho mais tempo de desenvolvimento não fiz o downgrade para o vuetify 2x
2. Formatação de horários: tive dificuldades em formatar os horários de entrada e saída no formato HH:mm pela falta dos componentes, eu poderia fazer em javascript estes validadores porém falta tempo.

## Facilidades

Apesar das dificuldades encontradas, identifiquei algumas facilidades durante o desenvolvimento do projeto:

1. Framework Vue.js: O uso do Vue.js facilitou a criação da interface gráfica do sistema e a implementação das funcionalidades de forma modular e reativa.

2. Componentes Vuetify: A biblioteca Vuetify oferece uma grande variedade de componentes prontos para uso, o que acelerou o desenvolvimento e permitiu criar uma interface visual atraente e responsiva.

3. Comunidade de Desenvolvedores: A comunidade de desenvolvedores do Vue.js e do Vuetify é muito ativa, o que facilitou encontrar soluções para problemas específicos e obter suporte quando necessário.

## Conclusão

O projeto de registro de ponto ainda não está concluído, mas hoje ele permite que pessoas possam registrar seus horários de entrada e saída de forma eficiente. superei a maioria dos desafios encontrados durante o desenvolvimento e entrego uma solução funcional e prática. O uso do Vue.js e do Vuetify provou ser uma escolha acertada, facilitando o desenvolvimento e garantindo uma interface de usuário moderna e intuitiva. Ainda há muito a se fazer, mas estou satisfeito com o desenvolvimento.
