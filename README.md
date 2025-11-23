# 🧠 Base de Conhecimento - Imersão Dev Alura & Google

Bem-vindo ao projeto Base de Conhecimento! Esta é uma aplicação web desenvolvida durante a 6ª edição da **Imersão Dev da Alura em parceria com o Google**, focada na criação de uma interface para visualizar e pesquisar dados de forma dinâmica, permitindo uma expêriencia agradável ao usuário.

## 📖 Descrição do Projeto

O objetivo deste projeto é criar uma galeria interativa que exibe informações sobre **Jogos, Animes e Esportes**. A aplicação permite que o usuário filtre o conteúdo por categoria ou busque por um item específico através de um campo de busca.

É uma demonstração prática de como manipular o DOM e consumir dados de um arquivo local (JSON) para criar uma experiência de usuário fluida e responsiva no front-end.

## ✨ Funcionalidades

*   **Galeria Dinâmica**: Os cards são gerados dinamicamente a partir de uma base de dados local.
*   **Filtro por Categoria**: Selecione uma categoria (Jogos, Animes, Esportes) para visualizar apenas os itens relacionados.
*   **Busca em Tempo Real**: Digite no campo de busca para filtrar os cards cujo nome corresponde à sua pesquisa.
*   **Tema Claro/Escuro**: Alterne entre os modos de visualização para maior conforto visual.

Demonstração do Projeto (https://bielzinhodev.github.io/Base-de-Conhecimento---imersao_dev/)

## 🚀 Tecnologias Utilizadas

*   **HTML5**: Estrutura da página.
*   **CSS3**: Estilização, design responsivo e temas.
*   **JavaScript**: Lógica da aplicação, manipulação do DOM, busca e filtro de dados.
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
/ ├── assets/ │ ├── images/ # Imagens dos cards (jogos, animes, etc.) │ └── ... ├── data.json # Base de conhecimento com os dados ├── index.html # Arquivo principal da estrutura HTML ├── style.css # Arquivo de estilos └── script.js # Arquivo com a lógica de busca, filtro e renderização

## 🙏 Agradecimentos

*   À **Alura** e ao **Google** pela oportunidade de aprendizado na Imersão Dev.
*   Aos instrutores **Ahirton** , **Guilherme Lima** , **Mônica** e à comunidade pelo suporte durante o desenvolvimento.

---
Feito com ❤️ por **Gabriel Alexandre**.
