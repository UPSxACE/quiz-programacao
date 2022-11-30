const htmlQuestions = [
  {
    id: 1,
    question:
      'Em qual destes elementos o conteúdo que vai ser mostrado para o utilizador deve ser inserido:',
    possibilities: ['<head>', '<script>', '<link>', '<body>'],
    correctAnswer: '<body>',
  },
  {
    id: 2,
    question: 'Forma correta de criar um elemento div:',
    possibilities: ['div >', '<div>', 'div:', '<div></div>'],
    correctAnswer: '<div></div>',
  },
  {
    id: 3,
    question:
      'Forma correta de criar um elemento de título com "Futebol ao Vivo" dentro:',
    possibilities: [
      '<Text>Futebol ao Vivo</Text>',
      '<title>Futebol ao Vivo</title>',
      'title: Futebol ao Vivo',
      '<h1>Futebol ao Vivo</h1>',
    ],
    correctAnswer: '<h1>Futebol ao Vivo</h1>',
  },
  {
    id: 4,
    question:
      'Forma correta de adicionar uma classe de nome "grey-box" a um elemento div:',
    possibilities: [
      '<class grey-box></class>',
      '<class>grey-box div</class>',
      '<class div>grey-box</class>',
      '<div class="grey-box"></div>',
    ],
    correctAnswer: '<div class="grey-box"></div>',
  },
  {
    id: 5,
    question: 'div, p, h1, h2, h3, span, button, a são todos:',
    possibilities: [
      'Nomes de classes HTML',
      'Tipos de texto',
      'Nomes de fontes',
      'Nomes de elementos HTML',
    ],
    correctAnswer: 'Nomes de elementos HTML',
  },
  {
    id: 6,
    question: 'Por defeito, todos os elementos HTML:',
    possibilities: [
      'São de cor azul',
      'Ocupam o mínimo de espaço possível',
      'Possuem uma imagem de fundo',
      'São renderizados como caixas, que ocupam toda a tela da esquerda à direita',
    ],
    correctAnswer:
      'São renderizados como caixas, que ocupam toda a tela da esquerda à direita',
  },
  {
    id: 7,
    question: `<div>
    <h1>Futebol Ao Vivo</h1>
</div>
    `,
    possibilities: [
      'Neste pedaço de código, o elemento h1 é o "pai", e o "div" é o "filho"',
      'Neste pedaço de código, ambos os elementos são "pais"',
      'Neste pedaço de código, ambos os elementos são "filhos"',
      'Neste pedaço de código, o elemento div é o "pai", e o "h1" é o "filho"',
    ],
    correctAnswer:
      'Neste pedaço de código, o elemento div é o "pai", e o "h1" é o "filho"',
  },
  {
    id: 8,
    question:
      'Devo adicionar os meta dados que o utilizador não vai ver no elemento:',
    possibilities: ['<header>', '<body>', '<main>', '<head>'],
    correctAnswer: '<head>',
  },
  {
    id: 9,
    question:
      'Devo adicionar todo o conteúdo que o utilizador vai ver no elemento:',
    possibilities: ['<header>', '<main>', '<head>', '<body>'],
    correctAnswer: '<body>',
  },
  {
    id: 10,
    question:
      'Devo conectar a página de HTML a uma página de estilo através do elemento:',
    possibilities: ['<style>', '<head>', '<body>', '<link>'],
    correctAnswer: '<link>',
  },
  {
    id: 11,
    question:
      'Devo conectar a página de HTML a um código de JavaScript através do elemento:',
    possibilities: ['<head>', '<body>', '<link>', '<script>'],
    correctAnswer: '<script>',
  },
  {
    id: 12,
    question: 'Para criar um parágrafo utilizo o elemento:',
    possibilities: ['<h1>', '<span>', '<div>', '<p>'],
    correctAnswer: '<p>',
  },
  {
    id: 13,
    question: 'Para criar um título utilizo o elemento:',
    possibilities: ['<p>', '<span>', '<a>', '<h1>'],
    correctAnswer: '<h1>',
  },
  {
    id: 14,
    question: 'Para criar um pequeno pedaço de texto utilizo o elemento:',
    possibilities: ['<p>', '<h1>', '<a>', '<span>'],
    correctAnswer: '<span>',
  },
  {
    id: 15,
    question: 'Para criar um botão utilizo o elemento:',
    possibilities: ['<p>', '<h1>', '<div>', '<button>'],
    correctAnswer: '<button>',
  },
  {
    id: 16,
    question: 'Para criar um link clicável utilizo o elemento:',
    possibilities: ['<p>', '<link>', '<div>', '<a>'],
    correctAnswer: '<a>',
  },
  {
    id: 17,
    question: 'Para criar uma caixa normal, ou uma divisão utilizo o elemento:',
    possibilities: ['<main>', '<box>', '<span>', '<div>'],
    correctAnswer: '<div>',
  },
  {
    id: 18,
    question: 'Devo colocar o meu rodapé dentro de um elemento:',
    possibilities: ['<main>', '<head>', '<h1>', '<footer>'],
    correctAnswer: '<footer>',
  },
];

// diferença entre ID e classes

export default htmlQuestions;
