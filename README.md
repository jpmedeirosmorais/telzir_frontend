# TELZIR-FRONTEND CHALENGE

### `npm run start`

Runs the app in (http://localhost:3000);


### `npm run test`

Runs the tests and show the coverage in the terminal;


English version:

This frontend project was created with the React library and using typescript.
The use of react enables the ability to create components in a simple way which helps to better encapsulate the code and also gives us the possibility of component reuse and customization.

-Styled components:
Styled-components was used to create the CSS because it gives us the possibility to use Sass and create stylized React elements. In addition, it allows the ability to send props to these elements, being able to handle these props internally, generating a dynamic CSS according to the values ​​received.

-Custom hooks:
In this project, a custom hook was created using React's ContextAPI. This hook makes it possible to create variables and functions globally, making it possible to use these variables or functions wherever they are needed.
Our specific hook is usePlans which has the getPlansFee() function, it receives the necessary parameters and makes the request to the backend API, receives the response and stores it in a variable that after being treated will be displayed on the user's screen.


Versão PT-BR:

O frontend foi criado com a biblioteca React e usando o typescript.
O uso do react possibilita a capacidade de criação de componentes de maneira simples o que ajuda a encapsular o melhor o código e nos também nos da a possibilidade de reuso do componente e personalização.

-Styled components:
Para a criação do CSS foi utilizado o styled-components por nos dar a possibilidade de usar o Sass e criar elementos React estilizados. Além disso possibilita a capacidade de enviar props para esses elementos podendo tratar essas props internamente gerando um CSS dinâmico de acordo com os valores recebidos.

-Hooks personalizados:
Neste projeto foi criado um hook personalizado usando o ContextAPI do React. Este hook possibilita criar variáveis e funções de maneira global, possibilitando o uso dessas variáveis ou funções onde forem necessárias.
Nosso hook em especifico é o usePlans que tem o a função getPlansFee(), ela recebe os paramêtros necessários e faz a requisição para API do backend, recebe a resposta e armazena em uma variável que depois de tratada será exibida na tela do usuário.