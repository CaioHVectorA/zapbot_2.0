// @ts-nocheck
function verificarVitoria(tabuleiro, jogador) {
    // Combinações de vitória possíveis no jogo da velha
    const combinacoesVitoria = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6] // Diagonais
    ];
  
    // Verificar se alguma combinação de vitória está preenchida pela IA
    for (let combinacao of combinacoesVitoria) {
      const [a, b, c] = combinacao;
      if (tabuleiro[a] === jogador && tabuleiro[b] === jogador && tabuleiro[c] === jogador) {
        return true;
      }
    }
  
    return false;
  }
  
  // Função que realiza a jogada da IA
export function jogarIA(tabuleiro) {
    const jogadorIA = "O";
  
    // Verificar se a IA pode ganhar em uma jogada
    for (let i = 0; i < 9; i++) {
      if (tabuleiro[i] === String(i + 1)) {
        // Fazer uma cópia do tabuleiro para simular a jogada
        const tabuleiroSimulado = [...tabuleiro];
        tabuleiroSimulado[i] = jogadorIA;
  
        // Verificar se a jogada resulta em vitória para a IA
        if (verificarVitoria(tabuleiroSimulado, jogadorIA)) {
          return i + 1;
        }
      }
    }
  
    // Verificar se o jogador pode ganhar na próxima jogada
    const jogador = "X";
    for (let i = 0; i < 9; i++) {
      if (tabuleiro[i] === String(i + 1)) {
        // Fazer uma cópia do tabuleiro para simular a jogada do jogador
        const tabuleiroSimulado = [...tabuleiro];
        tabuleiroSimulado[i] = jogador;
  
        // Verificar se a jogada resulta em vitória para o jogador
        if (verificarVitoria(tabuleiroSimulado, jogador)) {
          return i + 1;
        }
      }
    }
  
    // Jogar em uma posição vazia aleatória
    const posicoesVazias = tabuleiro.reduce((acc, valor, indice) => {
      if (valor === String(indice + 1)) {
        acc.push(indice + 1);
      }
      return acc;
    }, []);
  
    const jogadaAleatoria = posicoesVazias[Math.floor(Math.random() * posicoesVazias.length)];
    return jogadaAleatoria;
  }