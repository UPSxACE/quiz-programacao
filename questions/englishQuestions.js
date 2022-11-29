// next to add: afterNote: "example of hint to show after answering"
// next to add: feature to listen to words being spoken
// next to add: other types of answers: inputs, blank spaces...

const englishQuestions = [
  {
    id: 1,
    question: 'A tradução de "body" é:',
    possibilities: ['cabeça', 'pequena distância', 'botão', 'corpo'],
    correctAnswer: 'corpo',
  },
  {
    id: 2,
    question: 'A tradução de "head" é:',
    possibilities: ['pé', 'rodapé', 'alinhamento', 'cabeça'],
    correctAnswer: 'cabeça',
  },
  {
    id: 3,
    question: 'A tradução de "header" é:',
    possibilities: [
      'cabeça',
      'exibição/exibir/mostrar',
      'principal',
      'cabeçalho',
    ],
    correctAnswer: 'cabeçalho',
  },
  {
    id: 4,
    question: 'A tradução de "main" é:',
    possibilities: ['corpo', 'botão', 'pequena distância', 'principal'],
    correctAnswer: 'principal',
  },
  {
    id: 5,
    question: 'A tradução de "footer" é:',
    possibilities: ['borda/fronteira', 'botão', 'fundo', 'rodapé'],
    correctAnswer: 'rodapé',
  },
  {
    id: 6,
    question: 'A tradução de "paragraph" é:',
    possibilities: ['âncora', 'pequena distância', 'cabeçalho', 'parágrafo'],
    correctAnswer: 'parágrafo',
  },
  {
    id: 7,
    question: 'A tradução de "heading" é:',
    possibilities: ['pé', 'botão', 'pequena distância', 'título'],
    correctAnswer: 'título',
  },
  {
    id: 8,
    question: 'A tradução de "span" é:',
    possibilities: [
      'título',
      'exibição/exibir/mostrar',
      'âncora',
      'pequena distância',
    ],
    correctAnswer: 'pequena distância',
  },
  {
    id: 9,
    question: 'A tradução de "button" é:',
    possibilities: ['borda', 'itens', 'fundo', 'botão'],
    correctAnswer: 'botão',
  },
  {
    id: 10,
    question: 'A tradução de "anchor" é:',
    possibilities: ['cor', 'conteúdo', 'alinhamento de texto', 'âncora'],
    correctAnswer: 'âncora',
  },
  {
    id: 11,
    question: 'A tradução de "division" é:',
    possibilities: ['espaço', 'exibição/exibir/mostrar', 'itens', 'divisão'],
    correctAnswer: 'divisão',
  },
  {
    id: 12,
    question: 'A tradução de "left" e "right" é:',
    possibilities: [
      'topo/cima e fundo/baixo',
      'fundo e cor',
      'azul e vermelho',
      'esquerda e direita',
    ],
    correctAnswer: 'esquerda e direita',
  },
  {
    id: 13,
    question: 'A tradução de "top" e "bottom" é:',
    possibilities: [
      'esquerda e direita',
      'fundo e cor',
      'azul e vermelho',
      'topo/cima e fundo/baixo',
    ],
    correctAnswer: 'topo/cima e fundo/baixo',
  },
  {
    id: 14,
    question: 'A tradução de "padding" é:',
    possibilities: ['fronteira', 'fundo', 'borda', 'preenchimento'],
    correctAnswer: 'preenchimento',
  },
  {
    id: 15,
    question: 'A tradução de "margin" é:',
    possibilities: ['fronteira', 'fundo', 'preenchimento', 'margem'],
    correctAnswer: 'margem',
  },
  {
    id: 16,
    question: 'A tradução de "color" é:',
    possibilities: ['título', 'divisão', 'fundo', 'cor'],
    correctAnswer: 'cor',
  },
  {
    id: 17,
    question: 'A tradução de "background" é:',
    possibilities: ['borda/fronteira', 'cor', 'preenchimento', 'fundo'],
    correctAnswer: 'fundo',
  },
  {
    id: 18,
    question: 'A tradução de "background color" é:',
    possibilities: ['divisão', 'fronteira', 'divisão', 'côr de fundo'],
    correctAnswer: 'cor de fundo',
  },
  {
    id: 19,
    question: 'A tradução de "border" é:',
    possibilities: [
      'côr de fundo',
      'margem',
      'preenchimento',
      'borda/fronteira',
    ],
    correctAnswer: 'borda/fronteira',
  },
  {
    id: 20,
    question: 'A tradução de "text" é:',
    possibilities: ['teste', 'título', 'cabeçalho', 'texto'],
    correctAnswer: 'texto',
  },
  {
    id: 21,
    question: 'A tradução de "align" é:',
    possibilities: [
      'borda/fronteira',
      'âncora',
      'rodapé',
      'alinhar/alinhamento',
    ],
    correctAnswer: 'alinhar/alinhamento',
  },
  {
    id: 22,
    question: 'A tradução de "text-align" é:',
    possibilities: ['preenchimento', 'âncora', 'texto', 'alinhamento de texto'],
    correctAnswer: 'alinhamento de texto',
  },
  {
    id: 23,
    question: 'A tradução de "justify" também pode significar:',
    possibilities: ['corpo', 'cor de fundo', 'divisão', 'alinhar (texto)'],
    correctAnswer: 'alinhar (texto)',
  },
  {
    id: 24,
    question: 'A tradução de "content" é:',
    possibilities: ['cor', 'exibição/exibir/mostrar', 'cabeçalho', 'conteúdo'],
    correctAnswer: 'conteúdo',
  },
  {
    id: 25,
    question: 'A tradução de "items" é:',
    possibilities: [
      'corpo',
      'exibição/exibir/mostrar',
      'pequena distância',
      'itens',
    ],
    correctAnswer: 'itens',
  },
  {
    id: 26,
    question: 'A tradução de "display" é:',
    possibilities: [
      'rodapé',
      'pequena distância',
      'principal',
      'exibição/exibir/mostrar',
    ],
    correctAnswer: 'exibição/exibir/mostrar',
  },
  {
    id: 27,
    question: 'A tradução de "blue" é:',
    possibilities: ['branco', 'vermelho', 'verde', 'azul'],
    correctAnswer: 'azul',
  },
  {
    id: 28,
    question: 'A tradução de "red" é:',
    possibilities: ['azul', 'verde', 'branco', 'vermelho'],
    correctAnswer: 'vermelho',
  },
  {
    id: 29,
    question: 'A tradução de "white" é:',
    possibilities: ['vermelho', 'verde', 'amarelo', 'branco'],
    correctAnswer: 'branco',
  },
  {
    id: 30,
    question: 'A tradução de "green" é:',
    possibilities: ['vermelho', 'amarelo', 'azul', 'verde'],
    correctAnswer: 'verde',
  },
];

export default englishQuestions;
