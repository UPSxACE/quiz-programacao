import { getActionFromState } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { useReducer } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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

const initGame = (questions_obj) => {
  return {
    gameOver: false,
    newCategory: true,
    answered: false,
    amountOfCategories: questions_obj.length,
    currentCategory: 0,
    amountOfQuestions: questions_obj[0].questions.length,
    currentQuestion: 0,
    categoryName: questions_obj[0].categoryName,
    question: questions_obj[0].questions[0].question,
    correct_answer: questions_obj[0].questions[0].correctAnswer,
    randomizedPossibilites: shuffle(
      questions_obj[0].questions[0].possibilities
    ),
    answer: null,
    points: 0,
    questions_data: questions_obj,
  };
};

function reducer(state, action) {
  switch (action.type) {
    case 'category-confirm':
      return { ...state, newCategory: false };
    case 'answer':
      const new_points =
        action.user_answer == state.correct_answer
          ? state.points + 3
          : state.points;
      return {
        ...state,
        answered: true,
        answer: action.user_answer,
        points: new_points,
      };
    case 'next':
      let newCurrentCategory = state.currentCategory;
      let newNewCategory = false;
      // will be 0 if current question + 1 returns same number as amount of questions
      let newCurrentQuestion =
        (state.currentQuestion + 1) % state.amountOfQuestions;

      console.log('AAAAAAAAAAA');

      if (newCurrentQuestion === 0) {
        newCurrentCategory = state.currentCategory + 1;
      }
      if (!(newCurrentCategory < state.amountOfCategories)) {
        return { ...state, answered: false, gameOver: true };
      }
      if (
        newCurrentQuestion === 0 &&
        newCurrentCategory < state.amountOfCategories
      ) {
        newNewCategory = true;
      }

      return {
        ...state,
        newCategory: newNewCategory,
        answered: false,
        answer: null,
        categoryName: state.questions_data[newCurrentCategory].categoryName,
        currentCategory: newCurrentCategory,
        currentQuestion: newCurrentQuestion,
        question:
          state.questions_data[newCurrentCategory].questions[newCurrentQuestion]
            .question,
        correct_answer:
          state.questions_data[newCurrentCategory].questions[newCurrentQuestion]
            .correctAnswer,
        randomizedPossibilites: shuffle(
          state.questions_data[newCurrentCategory].questions[newCurrentQuestion]
            .possibilities
        ),
      };
  }
}

export default function GameScreen({ route, navigation }) {
  const questions_data = [
    {
      categoryName: 'Inglês',
      questions: [
        {
          question: 'Example of question 1?',
          possibilities: ['a', 'b', 'c', 'd'],
          correctAnswer: 'c',
        },
        {
          question: 'Example of question 2?',
          possibilities: ['a', 'b', 'c', 'd'],
          correctAnswer: 'c',
        },
        {
          question: 'Example of question 3?',
          possibilities: ['a', 'b', 'c', 'd'],
          correctAnswer: 'c',
        },
      ],
    },
    {
      categoryName: 'HTML',
      questions: [
        {
          question: 'Example of question 4?',
          possibilities: ['a', 'b', 'c', 'd'],
          correctAnswer: 'c',
        },
        {
          question: 'Example of question 5?',
          possibilities: ['a', 'b', 'c', 'd'],
          correctAnswer: 'c',
        },
        {
          question: 'Example of question 6?',
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

  if (gameState.gameOver) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: 'bold' }}>Game Over</Text>
        <Text style={{ fontSize: 24, paddingBottom: 16 }}>
          Pontos: {gameState.points}
        </Text>
        <Button
          containerStyle={{ width: 240 }}
          title={'FIM'}
          color={'indigo'}
          onPress={() => {
            navigation.navigate('GameTabs', { screen: 'Home' });
          }}
        />
      </View>
    );
  }

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
        <Button
          title={'COMEÇAR'}
          onPress={() => {
            dispatchGameState({ type: 'category-confirm' });
          }}
        />
      </View>
    );
  }

  console.log(gameState);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flexDirection: 'row', paddingHorizontal: 24, paddingTop: 8 }}
      >
        <Text style={{ fontSize: 20 }}>{gameState.categoryName}</Text>
        <Text style={{ fontSize: 20, marginLeft: 'auto' }}>
          Pontos: {gameState.points}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 16,
        }}
      >
        <Text style={{ fontSize: 28, paddingBottom: 16 }}>
          {gameState.question}
        </Text>
        <FlatList
          style={{ flexGrow: 0, width: '100%' }}
          data={gameState.randomizedPossibilites}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={{ paddingHorizontal: 24, paddingBottom: 16, height: 56 }}>
        {gameState.answered && (
          <Button
            title='PRÓXIMO'
            color='indigo'
            onPress={() => {
              dispatchGameState({ type: 'next' });
            }}
          ></Button>
        )}
      </View>
    </View>
  );

  function renderItem({ item }) {
    return (
      <View
        style={{
          width: '100%',
          paddingBottom: 12,
        }}
      >
        <Button
          containerStyle={{
            paddingHorizontal: 24,
          }}
          buttonStyle={{ width: '100%', height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={item}
          //color={'cornflowerblue'}
          color={
            gameState.answered
              ? gameState.answer == item || gameState.correct_answer == item
                ? gameState.correct_answer == item
                  ? 'green'
                  : 'red'
                : 'cornflowerblue'
              : 'cornflowerblue'
          }
          onPress={() => {
            if (!gameState.answered) {
              dispatchGameState({ type: 'answer', user_answer: item });
            }
          }}
        />
      </View>
    );
  }
}

//Fisher-Yates Shuffle
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
