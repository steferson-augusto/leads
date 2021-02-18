# Teste Prático - Frontend

Esse projeto foi construído com React 17.

<p align="center">
  <img src="./github/leads.png" alt="leads" width="420" >
</p>

<h4 align="center">
  <a href="#started" >
    Instalação
  </a>
  |
  <a href="#cache" >
    Cache de Requisições
  </a>
  |
  <a href="#usability" >
    Usabilidade
  </a>
  |
  <a href="#utils" >
    Utilidades
  </a>
  |
  <a href="#license" >
    Licença
  </a>
</h4>

<h2 name="started">▶ Instalação</h2>

Clone ou baixe o projeto do Github

```bash
git clone https://github.com/steferson-augusto/leads
```

Abra o diretório do projeto e execute `npm install` ou `yarn`.

Na raiz do projeto, execute `npm run start` ou `yarn start`

Após todos os passos, a aplicação estará pronta para uso através de `http://localhost:3000/`

Todas as requisições enviam por padrão o token jwt `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBdXRob3JpemF0aW9uSWQiOiJjMzQ1YjY1Ny0wYjBjLTExZWItOThmMy0wMGZmNjU0YmQzN2EiLCJVc2VySWQiOiIxIiwicm9sZSI6IlN5c3RlbU93bmVyIiwibmJmIjoxNjAyMzQzODY3LCJleHAiOjE2MzM4Nzk4NjcsImlhdCI6MTYwMjM0Mzg2N30.cZV7gxe0iOtHX2f8URK8aOEvTbdybuAm_Tlu_LueB5U`

Outras requisições necessitam de accountId, está sendo usado `4b263def-0a40-11eb-98f3-00ff654bd37a` inserido manualmente

<br/>
<h2 name="cache">🗃 Cache de Requisições</h2>

A aplicação usa a biblioteca SRW para cache de requisições, trazendo uma usabilidade interessante.

Observe que ao realizar a requisição a uma rota pela primeira vez, há um pequeno intervalo de loading. Ao realizar a mesma requisição, é usado um cache da resposta anterior enquanto o SWR atualiza os dados "por baixo dos panos".

<p align="center">
  <img src="./github/swr-cache.gif" alt="iniciado" width="540" >
</p>

Outra coisa interessante da biblioteca é a estratégia de revalidar as informações quando o usuário dispara o evento onFocus da window.

<p align="center">
  <img src="./github/swr-revalidate.gif" alt="iniciado" width="540" >
</p>

<br/>
<h2 name="usability">📱 Usabilidade</h2>
Foram usados alguns componentes que eu já tinha e eles já possuíam algumas funcionalidades como responsividade ou alternar entre tema light e dark.

<p align="center">
  <img src="./github/usability.gif" alt="iniciado" width="540" >
</p>

<br/>
<h2 name="utils">🔧 Utilidades</h2>

<ul>
  <li>
    <a href="https://pt-br.reactjs.org/docs/create-a-new-react-app.html" target="_blank">React</a>
  </li>

  <li>
    <a href="https://swr.vercel.app/" target="_blank">SWR</a>
  </li>

  <li>
    <a href="https://material-ui.com/getting-started/installation/" target="_blank">Material UI</a>
  </li>

  <li>
    <a href="https://styled-components.com/docs" target="_blank">Styled Components</a>
  </li>

  <li>
    <a href="https://material-table.com/#/docs/get-started" target="_blank">Material Table</a>
  </li>

  <li>
    <a href="https://immerjs.github.io/immer/docs/introduction" target="_blank">Immer</a>
  </li>
</ul>

<br/>
<h2 name="license">📝 Licença</h2>
<p>Este projeto está sob uma licença MIT. Veja mais informações em <a href="https://github.com/steferson-augusto/pjc_teste_pratico_frontend/blob/master/LICENSE" target="_blank">LICENSE</a>.</p>

---

<p>Criado por <a href="https://www.linkedin.com/in/st%C3%A9ferson-augusto-4b0b9b124/" target="_blank">Stéferson Augusto</a></p>
