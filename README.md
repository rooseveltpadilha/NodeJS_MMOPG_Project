![enter image description here](http://static.r2games.com/newsimg/dps%20pet%2006.png)

**PROJETO MMOPG EM NODE.JS**

> Por realizar um curso na Udemy para NodeJS acabei de desenvolver este projeto.

Após a inicialização com `yarn dev` o servidor node se inicia.

****

**RECURSOS DO PROJETO**

 1. Tela para login no `localhost:8080`.
 2. Comunicação com o banco de dados *em mongoDB* ao criar um novo cadastro.
 3. Validação de dados em todos os formulários.
 4. Cadastro de novas ações em cada uma das opções dentro do jogo.
 5. Cronometro que calcula quanto tempo falta para cada ação ser finalizada.
 6. Gasto de moedas a cada solicitação de acões.
 7. Exemplo de CRUD completo com todas rotas cadastradas e com passagem de parâmetros para *view*.

****

**MÓDULOS UTILIZADOS**

 - express `Módulo para configuração do servidor`
 - express-session `Possibilita criação de sessions`
 - express-validator `Possibilita validação de dados dos formulários da aplicação`
 - mongodb `Banco de dados escolhido para aplicação`
 - ejs `Possibilita a criação de views para o esquema de MVC escolhido`
 - crypto `Possibilita a criptografia das senhas dos usuários cadastrados`
 - cookie-parser `Faz com que os cookies sejam armazenados no navegador para auth`
 - cosign `Faz com que os pacotes sejam carregados automaticamente quando o servidor inicia`
 - body-parser `faz com que o que seja enviado via post seja recuperado`

 

****
**O JOGO FOI BASEADO NA SÉRIE DE GAME OF THRONES**

Pode ser implementada diversas funcionalidades no game, mas é apenas um exemplo de aplicação em NodeJS para aprendizado.
****