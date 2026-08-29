# 🔎 Visualizador de Perfil do GitHub

Uma aplicação web simples que permite buscar um usuário do GitHub pelo nome e visualizar seus dados de perfil (avatar, bio, seguidores/seguindo) e seus repositórios mais recentes, consumindo diretamente a API pública do GitHub.

![JavaScript](https://img.shields.io/badge/JavaScript-ES%20Modules-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)

## ✨ Funcionalidades

- Busca de usuários do GitHub por nome de usuário
- Exibição de dados do perfil: avatar, nome e bio
- Contadores de seguidores e seguindo
- Listagem dos repositórios mais recentes, com:
  - ⭐ Número de estrelas
  - 🍴 Número de forks
  - 👀 Número de observadores (watchers)
  - 💻 Linguagem principal
- Busca ao clicar no botão ou ao pressionar Enter
- Layout responsivo para desktop, tablet e mobile
- Animações e transições suaves na interface

## 🚀 Tecnologias utilizadas

- **HTML5** — estrutura da página
- **CSS3** — estilização, variáveis (custom properties), grid, flexbox e media queries
- **JavaScript (ES Modules)** — lógica da aplicação, sem frameworks ou bibliotecas externas
- **[GitHub REST API](https://docs.github.com/en/rest)** — fonte dos dados de usuários e repositórios
- **[Devicon](https://devicon.dev/)** — ícone do GitHub via CDN
- **[Google Fonts](https://fonts.google.com/)** — fonte Inter

## 📁 Estrutura do projeto

```
.
├── index.html
└── src/
    ├── css/
    │   ├── reset.css
    │   ├── styles.css
    │   ├── animations.css
    │   └── responsive.css
    └── js/
        ├── index.js          # ponto de entrada, eventos e orquestração
        ├── github-api.js     # chamadas à API do GitHub
        └── profile-view.js   # renderização do perfil e repositórios na tela
```

> **Observação:** o `index.html` referencia os arquivos em `src/css/` e `src/js/`. Certifique-se de organizar os arquivos CSS e JS dentro dessas pastas para que os caminhos funcionem corretamente.

## ⚙️ Como executar localmente

Como o projeto usa `type="module"` no script, ele precisa ser servido por um servidor HTTP local (não funciona abrindo o `index.html` diretamente via `file://`).

1. Clone ou baixe este repositório
2. Organize os arquivos conforme a estrutura acima
3. Inicie um servidor local, por exemplo:

   ```bash
   # com o pacote http-server (Node.js)
   npx http-server .

   # ou com a extensão Live Server do VS Code
   ```

4. Acesse o endereço indicado pelo servidor (ex: `http://localhost:8080`)

## 🕹️ Como usar

1. Digite o nome de usuário do GitHub no campo de busca
2. Clique em **Buscar** ou pressione **Enter**
3. Aguarde o carregamento dos dados
4. Veja o perfil e os repositórios exibidos na tela
5. Clique em um repositório para abri-lo em uma nova aba no GitHub

## 🌐 API utilizada

A aplicação consome os seguintes endpoints públicos da API do GitHub:

- `GET https://api.github.com/users/{username}` — dados do perfil
- `GET https://api.github.com/users/{username}/repos?per_page=10&sort=created` — repositórios do usuário (os 10 mais recentes)

> A API do GitHub possui limite de requisições para chamadas não autenticadas (rate limit). Em caso de uso intenso, buscas podem ser temporariamente bloqueadas.

## 📌 Possíveis melhorias futuras

- Autenticação com token para aumentar o limite de requisições
- Paginação ou "carregar mais" repositórios
- Ordenação dos repositórios (por estrelas, data, nome, etc.)
- Mensagens de erro mais específicas na tela (em vez de `alert`)
- Testes automatizados

## 📄 Licença

Este projeto está disponível livremente para fins de estudo e aprendizado.
