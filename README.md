# 🧠 Base de Conhecimento - Imersão Dev Alura & Google

Bem-vindo ao projeto Base de Conhecimento! Esta é uma aplicação web desenvolvida durante a 6ª edição da **Imersão Dev da Alura em parceria com o Google**, focada em explorar as capacidades da API do Gemini para criar um chatbot interativo que consome uma base de dados local.

## 📖 Descrição do Projeto

O objetivo deste projeto é criar uma interface amigável onde um chatbot, alimentado pela IA do Google (Gemini), responde a perguntas do usuário com base em um conjunto de dados sobre **Jogos, Animes e Esportes**. A aplicação lê as informações de um arquivo JSON local e as utiliza como fonte de conhecimento para fornecer respostas relevantes e contextuais.

É uma demonstração prática de como integrar uma IA em uma aplicação front-end para criar experiências de usuário mais dinâmicas e inteligentes.

## ✨ Funcionalidades

*   **Chatbot Interativo**: Converse com um chatbot que entende linguagem natural.
*   **Base de Conhecimento**: Pergunte sobre diversos tópicos de jogos, animes e esportes.
*   **Respostas Contextuais**: A IA utiliza os dados do projeto para formular respostas precisas.
*   **Interface Limpa**: Um layout simples e intuitivo para facilitar a interação.

Demonstração do Projeto (https://bielzinhodev.github.io/Base-de-Conhecimento---imersao_dev/)

## 🚀 Tecnologias Utilizadas

*   **HTML5**: Estrutura da página.
*   **CSS3**: Estilização e design.
*   **JavaScript**: Lógica da aplicação e interatividade.
*   **Google Gemini API**: Motor da inteligência artificial para o chatbot.
*   **JSON**: Formato do arquivo usado como base de conhecimento.

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, você precisará de um navegador web e seguir os passos abaixo. Como a aplicação faz uma requisição (`fetch`) para um arquivo local (`data.json`), é necessário executá-la a partir de um servidor local para evitar erros de CORS.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/BielzinhoDev/Base-de-Conhecimento---imersao_dev
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```

3.  **Inicie um servidor local:**
    Se você tiver o VS Code, pode usar a extensão **Live Server**. Basta clicar com o botão direito no arquivo `index.html` e selecionar "Open with Live Server".

    Se você tiver Python instalado, pode usar o seguinte comando:
    ```bash
    # Para Python 3
    python -m http.server
    ```

4.  **Abra no navegador:**
    Acesse `http://localhost:8000` (ou o endereço fornecido pelo Live Server) no seu navegador.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:
/ ├── assets/ │ ├── images/ # Imagens dos cards (jogos, animes, esportes.) 
├── data.json # Base de conhecimento com os dados 
├── index.html # Arquivo principal da estrutura HTML 
├── style.css # Arquivo de estilos 
└── script.js # Arquivo com a lógica do chatbot e integração com a API

## 🙏 Agradecimentos

*   À **Alura** e ao **Google** pela oportunidade de aprendizado na Imersão Dev.
*   Aos instrutores **Ahirton** , **Guilherme Lima** , **Mônica** e à comunidade pelo suporte durante o desenvolvimento.

---
Feito com ❤️ por **Gabriel Alexandre**.
