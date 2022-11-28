import { Button } from '@rneui/base';
import { useReducer } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

/*
  example of object "questions":

  [{
    categoryName: "Inglês", 
    questions: [{
      question: "example?", 
      possibilities: ["a","b","c","d"], 
      correctAnswer: "c"
    }]
  }]
*/

const initGame = (questions) => {
  return {
    newCategory: true,
    answered: false,
    amountOfCategories: questions.length,
    currentCategory: 0,
    amountOfQuestions: questions[0].questions.length,
    currentQuestion: 0,
    categoryName: questions[0].categoryName,
    question: questions[0].question,
    answer: null,
    points: 0,
  };
};

function reducer(state, action) {
  switch (action.type) {
    case 'category-confirm':
      return { newCategory: false };
    case 'answer':
      return { answered: true, answer: action.user_answer };
    case 'next':
      return { newCategory: true, answered: false };
  }
}

export default function GameScreen({ route }) {
  const questions_data = [
    {
      categoryName: 'Inglês',
      questions: [
        {
          question: 'example?',
          possibilities: ['a', 'b', 'c', 'd'],
          correctAnswer: 'c',
        },
      ],
    },
  ];

  const data = route.params.data;
  const [gameState, dispatchGameState] = useReducer(
    reducer,
    questions_data,
    initGame
  );

  console.log('gamestate: ');
  console.log(gameState);

  if (gameState.newCategory) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 32, paddingBottom: 16 }}>
          <Text style={{ fontWeight: 'bold' }}>Categoria:</Text>{' '}
          {gameState.categoryName}
        </Text>
        <Button title={'COMEÇAR'} />
      </View>
    );
  }

  return <Text>Game Started</Text>;
}
