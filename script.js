const seletorCategoria = document.getElementById('seletor-categoria');
const cardContainer = document.querySelector('.card-container');
const inputBusca = document.getElementById('input-busca');
const botaoBusca = document.getElementById('botao-busca');

let dadosCompletos = {};
let categoriaAtual = '';

// Função para buscar e carregar os dados do JSON
async function carregarDados() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar o arquivo data.json');
        }
        dadosCompletos = await response.json();
        popularCategorias();
        exibirTodosOsItens(); // Exibe todos os itens ao carregar
    } catch (error) {
        console.error(error);
        cardContainer.innerHTML = '<p class="erro">Não foi possível carregar os dados. Tente novamente mais tarde.</p>';
    }
}

// Função para popular o <select> com as categorias do JSON
function popularCategorias() {
    const categorias = Object.keys(dadosCompletos);
    categorias.forEach(categoria => {
        const option = document.createElement('option');
        option.value = categoria;
        // Transforma a primeira letra em maiúscula para exibição
        option.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        seletorCategoria.appendChild(option);
    });
}

// Função para exibir todos os itens (opcionalmente filtrados por busca)
function exibirTodosOsItens(termoBusca = '') {
    let todosOsItens = [];
    // Junta todos os itens de todas as categorias em um único array
    for (const categoria in dadosCompletos) {
        todosOsItens = todosOsItens.concat(dadosCompletos[categoria]);
    }

    const itensFiltrados = todosOsItens.filter(item => 
        item.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );

    renderizarCards(itensFiltrados);
}

// Função para criar e exibir os cards de uma categoria
function exibirCardsPorCategoria(categoria, termoBusca = '') {
    if (!categoria) { // Se "Selecione uma categoria" for escolhido
        exibirTodosOsItens(termoBusca);
        return;
    }
    const itensDaCategoria = dadosCompletos[categoria] || [];
    const itensFiltrados = itensDaCategoria.filter(item => 
        item.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );

    // Utiliza a função renderizarCards para exibir os itens filtrados
    renderizarCards(itensFiltrados);
}

// Evento que dispara quando o usuário muda a categoria no <select>
seletorCategoria.addEventListener('change', (event) => {
    const categoriaSelecionada = event.target.value;
    categoriaAtual = categoriaSelecionada;
    const termoBusca = inputBusca.value; // Mantém a busca atual ao trocar de categoria
    exibirCardsPorCategoria(categoriaAtual, termoBusca);
});

// Função unificada para realizar a busca
function realizarBusca() {
    const termoBusca = inputBusca.value;
    exibirCardsPorCategoria(categoriaAtual, termoBusca);
}

// Evento de busca em tempo real
inputBusca.addEventListener('keyup', (event) => {
    realizarBusca();
});

// Transforma o botão de busca em um botão de "Limpar"
botaoBusca.textContent = 'Limpar'; // Altera o texto do botão
botaoBusca.addEventListener('click', () => {
    inputBusca.value = ''; // Limpa o campo de busca
    realizarBusca(); // Atualiza a exibição dos cards
});

// Inicia o processo carregando os dados
carregarDados();
// Adicione este bloco ao final do seu arquivo script.js

const toggleThemeButton = document.getElementById('toggle-theme');

document.body.classList.add('dark-mode'); // Inicia com o modo escuro
toggleThemeButton.textContent = '☀️'; // Define o ícone inicial para o modo escuro

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Altera o ícone do botão para refletir o tema atual
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = '☀️';
    } else {
        toggleThemeButton.textContent = '🌙';
    }
});

// Função auxiliar para renderizar os cards na tela
function renderizarCards(itens) {
   // Adiciona a classe 'hidden' a todos os cards para iniciar a animação de fade-out
   Array.from(cardContainer.children).forEach(child => child.classList.add('hidden'));
   // Espera a animação de fade-out terminar para atualizar o conteúdo
   setTimeout(() => {
       cardContainer.innerHTML = ''; // Limpa os cards existentes
       if (itens.length === 0) {
           const p = document.createElement('p');
           p.textContent = 'Nenhum item encontrado com o termo buscado.';
           cardContainer.appendChild(p);
           return;
       }
       itens.forEach(item => {
           const card = document.createElement('article');
           card.className = 'card hidden'; // Começa escondido
           card.innerHTML = `
               <img src="${item.imagem || 'assets/images/placeholder.png'}" alt="Imagem de ${item.nome}">
               <div class="card-content">
                   <h2>${item.nome}</h2>
                   <p><strong>${item.detalhe}</strong></p>
                   <p>${item.descricao}</p>
                   <a href="${item.link}" target="_blank">Saiba mais</a>
               </div>
           `;
           cardContainer.appendChild(card);
           // Força um pequeno reflow para a animação de fade-in funcionar
           setTimeout(() => card.classList.remove('hidden'), 20);
       });
   }, 300); // O tempo deve ser igual à duração da transição de opacidade no CSS
}
