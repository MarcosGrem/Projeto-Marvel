/*
 Objetivo 1 - Ao passar o mouse em cima do personagem temos que:
 
  - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animacao

  - retirar a classe selecionado do per. que esta selecionado.

  Objetivo 2 - trocar a imagem e nome do personagem grande ao passar mouse em cima

  - alterar a imagem do jogador 1
  - alterar o nome do jogador 1

 */

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

      const idSelecionado = personagem.attributes.id.value;

      if(idSelecionado === 'ultron') return;
        /* 
      Objetivo 1 - Ao passar o mouse em cima do personagem temos que:
 
     - colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animacao

     - retirar a classe selecionado do per. que esta selecionado.
      */
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        /*  Objetivo 2 - trocar a imagem e nome do personagem grande ao passar mouse em cima

        - alterar a imagem do jogador 1
          - alterar o nome do jogador 1
        */

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');

        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})




