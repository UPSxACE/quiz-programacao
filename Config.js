import cssQuestions from './questions/cssQuestions';
import englishQuestions from './questions/englishQuestions';
import htmlQuestions from './questions/htmlQuestions';

export const defaultConfig = {
  Inglês: { amountQuestions: 1, on: true },
  HTML: { amountQuestions: 1, on: true },
  CSS: { amountQuestions: 1, on: true },
  //JavaScript: { amountQuestions: 1, on: true },
  //Programação: { amountQuestions: 1, on: true },
};

export const gameQuestions = {
  Inglês: englishQuestions,
  HTML: htmlQuestions,
  CSS: cssQuestions,
};
