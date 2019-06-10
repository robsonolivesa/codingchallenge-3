# Desafio Front-End

A TOTVS quer lançar um site de depoimentos. Foi feita uma planning com o time o qual você é integrante e a sprint começou. Suas tarefas são as seguintes:

## Eu, enquanto usuário, quero poder fazer o login na aplicação para acessar a Home utilizando meu usuário e senha previamente fornecidos.

A página de login deve respeitar as seguintes características:

- Validação do formato de e-mail.
- Senha não deve ficar visível enquanto digitada.
- Deve validar o acesso através da API de login fornecida.

Bônus:

Inserir uma opção "Lembrar-me" que, quando marcada no momento do login, consiste as informações do usuário para que ele não precise fazer login toda vez que a tela recarregar.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e que estou na tela inicial da aplicação, quero poder visualizar meus dados de perfil e atualizá-los

A página de perfil ser acessível através de um menu e deve respeitar as seguintes características:

- O usuário deve poder visualizar e editar seu nome e foto de perfil
- O nome não pode ser salvo em branco

Ao clicar em salvar, o usuário deve receber uma mensagem informando se a operação foi realizada com sucesso ou não e, em caso negativo, a informação do campo que precisa ser corrigido deve ficar clara.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e que estou na tela com os dados do meu perfil, quero poder visualizar os depoimentos que foram feitos para mim, bem como seu autor e status, podendo aprová-los, reprová-los ou excluí-los

Os depoimentos devem ser visualizados em uma lista, com uma divisão entre duas áreas: pendentes e os aprovados.

Os depoimentos pendentes devem respeitar as seguintes características:

- O usuário deve conseguir visualizar o nome e a foto do autor do depoimento
- O usuário deve conseguir visualizar o texto do depoimento
- O usuário deve ter a possibilidade de aprovar ou reprovar um depoimento
- - Ao aprovar um depoimento, ele deve ser movido para a área **aprovados**
- - Ao reprovar um depoimento, ele deve ser excluído do sistema
- O usuário deve ter a possibilidade de visualizar os depoimentos aprovados
- - Os depoismentos aprovados não podem ser editados
- - Os depoismentos aprovados podem ser excluídos

## Eu, enquanto usuário, dado que já estou autenticado no sistema, quero poder visualizar uma lista com meus amigos na plataforma

Os amigos devem ser visualizados em uma lista com o nome e foto e deve haver uma pesquisa que filtre os amigos exibidos

## Eu, enquanto usuário, dado que já estou autenticado no sistema e visualizando a minha lista de amigos, quero poder visualizar os detalhes de um amigo, com os depoimentos que ele recebeu

Ao selecionar um amigo da lista, devem ser exibidos os detalhes dele (nome e foto), e todos os depoimentos que ele recebeu e aprovou.

## Eu, enquanto usuário, dado que já estou autenticado no sistema e visualizando os detalhes de um amigo, quero poder deixar um depoimento para o mesmo

- O depoimento pode ter no máximo 250 caracteres.
- O sistema deve confirmar antes de enviar, alertando que ele não poderá ser alterado posteriormente
- O usuário deve receber um feedback em caso de sucesso ou de erro

## Algumas orientações:

- O projeto deve ser entregue através de um Pull Request neste próprio repositório.
- No arquivo API.md existe uma explicação de como a API funciona e dos métodos disponíveis.
- Na pasta mocks existe uma **sugestão** de layout para as telas propostas.
- O desafio é sobre __interação__, não precisa fazer tudo, basta ir fazendo os pedaços que se sente mais confortável e entregando aos poucos.
- Organize seus commits. Sua utilização do git faz parte do desafio.
