const cssQuestions = [
  {
    id: 1,
    question:
      'Quando utilizo "display: flex;" em um elemento, ele transforma-se em uma caixa especial em que:',
    possibilities: [
      'Os "filhos" desse componente passam a ocupar o máximo de espaço possível',
      'O seu fundo fica preto',
      'Todos os componentes ocupam o mesmo espaço',
      'Os "filhos" desse componente passam a ocupar o mínimo de espaço possivel',
    ],
    correctAnswer:
      'Os "filhos" desse componente passam a ocupar o mínimo de espaço possivel',
  },
  {
    id: 2,
    question: 'Para transformar um elemento em uma caixa especial utilizo:',
    possibilities: [
      'display: block;',
      'display: special;',
      'special;',
      'display: flex;',
    ],
    correctAnswer: 'display: flex;',
  },
  {
    id: 3,
    question:
      'Quando estou a estilizar/configurar tamanhos fixos de a altura ou largura em elementos e fontes:',
    possibilities: [
      'Devo criar um seletor para cada medida(altura e largura)',
      'Não é possível modificar o tamanho de elementos através do CSS',
      'Devo transformar em flex primeiro',
      'Devo adicionar "px" no final',
    ],
    correctAnswer: 'Devo adicionar "px" no final',
  },
  {
    id: 4,
    question: 'A melhor forma de alinhar algo dentro de um elemento é:',
    possibilities: [
      'Utilizar a propriedade "text-align"',
      'Utilizar a propriedade "horizontal"',
      'Transformando esse elemento "pai" em um flex através do comando "display: block;"',
      'Transformando esse elemento "pai" em um flex através do comando "display: flex;"',
    ],
    correctAnswer:
      'Transformando esse elemento "pai" em um flex através do comando "display: flex;"',
  },
  {
    id: 5,
    question: `div .grey-box{
    display: block;
    background-color: grey;
    width: 50%;
}`,
    possibilities: [
      'Neste caso, div e .grey-box são ambos propriedades',
      'Neste caso, display e width são ambos seletores',
      'Neste caso, block e grey são ambos propriedades',
      'Neste caso, div e .grey-box são ambos seletores',
    ],
    correctAnswer: 'Neste caso, div e .grey-box são ambos seletores',
  },
  {
    id: 6,
    question: `div .grey-box{
    display: block;
    background-color: grey;
    width: 50%;
}`,
    possibilities: [
      'Neste caso, div e .grey-box são ambos propriedades',
      'Neste caso, block e grey são ambos propriedades',
      'Neste caso, 50% e block são ambos seletores',
      'Neste caso, display e width são ambos propriedades',
    ],
    correctAnswer: 'Neste caso, display e width são ambos propriedades',
  },
  {
    id: 7,
    question: 'Em CSS, dentro dos colchetes "{}" deve ser inserido:',
    possibilities: [
      'Os seletores',
      'Código HTML',
      'Nada',
      'O código de estilo que vai ser aplicado aos elementos/classes/ids selecionados',
    ],
    correctAnswer:
      'O código de estilo que vai ser aplicado aos elementos/classes/ids selecionados',
  },
  {
    id: 8,
    question: 'Para criar um seletor de um elemento <div> digito:',
    possibilities: [
      'Um ponto final antes do nome do elemento (ex: .div)',
      'Um hashtag antes do nome do elemento (ex: #div)',
      'O nome do elemento seguido de um ponto de exclamação (ex: div!)',
      'Simplesmente o nome do elemento (ex: div)',
    ],
    correctAnswer: 'Simplesmente o nome do elemento (ex: div)',
  },
  {
    id: 9,
    question: 'Para criar um seletor de uma classe "grey-box" digito:',
    possibilities: [
      'Um hashtag antes do nome da classe (ex: #grey-box)',
      'O nome da classe seguida de um ponto de exclamação (ex: grey-box!)',
      'Simplesmente o nome da classe (ex: grey-box)',
      'Um ponto final antes do nome da classe (ex: .grey-box)',
    ],
    correctAnswer: 'Um ponto final antes do nome da classe (ex: .grey-box)',
  },
  {
    id: 10,
    question: 'Para criar um seletor de um id "tituloPrincipal" digito:',
    possibilities: [
      'Um ponto final antes do nome do id (ex: .tituloPrincipal)',
      'O nome do id seguido de um ponto de exclamação (ex: tituloPrincipal!)',
      'Simplesmente o nome do id (ex: tituloPrincipal)',
      'Um hashtag antes do nome do id (ex: #tituloPrincipal)',
    ],
    correctAnswer: 'Um hashtag antes do nome do id (ex: #tituloPrincipal)',
  },
  {
    id: 11,
    question:
      'Para criar um seletor que selecione todos os elementos <div> que tenham TAMBÉM classe "grey-box":',
    possibilities: [
      'Escrevo: div .grey-box',
      'Escrevo: div + grey-box',
      'Escrevo: div#grey-box',
      'Escrevo: div.grey-box',
    ],
    correctAnswer: 'Escrevo: div.grey-box',
  },
  {
    id: 12,
    question:
      'Para criar um seletor que selecione todos os elementos de classe "grey-box" filhos de um <div>:',
    possibilities: [
      'Escrevo: div + grey-box',
      'Escrevo: div#grey-box',
      'Escrevo: div.grey-box',
      'Escrevo: div .grey-box',
    ],
    correctAnswer: 'Escrevo: div .grey-box',
  },
  {
    id: 13,
    question: `div.greyBox h1{
    color: white;
}
    
Neste pedaço de código:`,
    possibilities: [
      'O seletor "div.greyBox h1" seleciona todos os h1 filhos de um <div> de classe "greyBox"',
      'justify-content',
      '"div.greyBox h1" é um seletor e "color" é uma propriedade',
      'Todas as afirmações são verdadeiras',
    ],
    correctAnswer: 'Todas as afirmações são verdadeiras',
  },
  {
    id: 14,
    question:
      'Para modificar o espaço interior(preenchimento) de um elemento, utilizo a propriedade:',
    possibilities: ['margin', 'justify-content', 'space', 'padding'],
    correctAnswer: 'padding',
  },
  {
    id: 15,
    question:
      'Para modificar o espaço exterior de um elemento, utilizo a propriedade:',
    possibilities: ['padding', 'justify-content', 'border', 'margin'],
    correctAnswer: 'margin',
  },
  {
    id: 16,
    question:
      'Para adicionar uma linha de 1px à volta de um div selecionado utilizo o seguinte comando:',
    possibilities: [
      'padding: 1px;',
      'margin: 1px;',
      'border-radius: 1px;',
      'border: 1px solid black;',
    ],
    correctAnswer: 'border: 1px solid black;',
  },
  {
    id: 17,
    question:
      'Para modificar a cor do texto de um elemento selecionado, utilizo a propriedade:',
    possibilities: ['background-color', 'text', 'padding', 'color'],
    correctAnswer: 'color',
  },
  {
    id: 18,
    question:
      'Para alinhar os elementos dentro de um outro elemento que seja flex, segundo o eixo principal, geralmente utilizo a propriedade:',
    possibilities: [
      'align-items',
      'text-align',
      'vertical-align',
      'justify-content',
    ],
    correctAnswer: 'justify-content',
  },
  {
    id: 19,
    question:
      'Para alinhar os elementos dentro de um outro elemento que seja flex, segundo o eixo secundário, geralmente utilizo a propriedade:',
    possibilities: [
      'justify-content',
      'text-align',
      'vertical-align',
      'align-items',
    ],
    correctAnswer: 'align-items',
  },
  {
    id: 20,
    question: 'Através do comando "flex-direction: row;" posso:',
    possibilities: [
      'Este comando não existe',
      'Alinhar o conteúdo todo à direita',
      'Alterar o eixo principal do elemento flex selecionado para que seja vertical',
      'Alterar o eixo principal do elemento flex selecionado para que seja horizontal',
    ],
    correctAnswer:
      'Alterar o eixo principal do elemento flex selecionado para que seja horizontal',
  },
  {
    id: 21,
    question: 'Uma boa forma de alinhar algo à direita (dentro de um flex) é',
    possibilities: [
      'Através do comando "padding-right: auto"',
      'Através do comando "padding-left: auto"',
      'Através do comando "margin-right: auto"',
      'Através do comando "margin-left: auto"',
    ],
    correctAnswer: 'Através do comando "margin-left: auto"',
  },
];

export default cssQuestions;
