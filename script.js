script.js
// --- 1. MODO ESCURO (DARK MODE) COM LOCALSTORAGE ---
const btnTema = document.createElement('button');
btnTema.id = 'btn-tema';
btnTema.textContent = 'Modo Escuro';
btnTema.className = 'btn';
btnTema.style.margin = '10px';

// Insere o botão de tema no cabeçalho
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (header) {
    header.appendChild(btnTema);
  }

  // Verifica o tema salvo anteriormente
  if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark-mode');
    btnTema.textContent = 'Modo Claro';
  }
});

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const eEscuro = document.body.classList.contains('dark-mode');
  
  btnTema.textContent = eEscuro ? 'Modo Claro' : 'Modo Escuro';
  localStorage.setItem('tema', eEscuro ? 'escuro' : 'claro');
});


// --- 2. GERENCIAMENTO DO FORMULÁRIO DE CADASTRO ---
const formCadastro = document.querySelector('form');

if (formCadastro) {
  formCadastro.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const cep = document.getElementById('cep').value;

    // Objeto do voluntário
    const novoVoluntario = {
      nome,
      cpf,
      telefone,
      cep,
      dataCadastro: new Date().toLocaleDateString('pt-BR')
    };

    // Recupera a lista atual ou inicia uma nova
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios') || '[]');
    voluntarios.push(novoVoluntario);

    // Salva no LocalStorage
    localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

    // Feedback ao usuário
    alert('Cadastro de voluntário efetuado e salvo com sucesso!');
    formCadastro.reset();
  });
}