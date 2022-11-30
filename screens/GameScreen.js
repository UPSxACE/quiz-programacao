import AsyncStorage from '@react-native-async-storage/async-storage';
import { getActionFromState } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { useReducer } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { defaultConfig, gameQuestions } from '../Config';

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
  const empty_category_hitmiss_obj = {};
  questions_obj.forEach((category) => {
    empty_category_hitmiss_obj[category.categoryName] = [];
  });

  return {
    gameOver: false,
    newCategory: true,
    answered: false,
    amountOfCategories: questions_obj.length,
    currentCategory: 0,
    amountOfQuestions: questions_obj[0].questions.length,
    currentQuestion: 0,
    currentQuestionId: questions_obj[0].questions[0].id,
    categoryName: questions_obj[0].categoryName,
    question: questions_obj[0].questions[0].question,
    correct_answer: questions_obj[0].questions[0].correctAnswer,
    randomizedPossibilites: shuffle(
      questions_obj[0].questions[0].possibilities
    ),
    answer: null,
    points: 0,
    questions_data: questions_obj,
    hit_miss_counter: {
      hits: { ...empty_category_hitmiss_obj },
      misses: { ...empty_category_hitmiss_obj },
    },
  };
};

function reducer(state, action) {
  switch (action.type) {
    case 'category-confirm':
      return { ...state, newCategory: false };
    case 'answer':
      const newHitMissCounter = state.hit_miss_counter;
      let new_points = state.points;
      if (action.user_answer == state.correct_answer) {
        new_points = state.points + 3;
        newHitMissCounter.hits[state.categoryName] = [
          ...newHitMissCounter.hits[state.categoryName],
          state.currentQuestionId,
        ];
      } else {
        newHitMissCounter.misses[state.categoryName] = [
          ...newHitMissCounter.misses[state.categoryName],
          state.currentQuestionId,
        ];
      }
      return {
        ...state,
        answered: true,
        answer: action.user_answer,
        points: new_points,
        hit_miss_counter: newHitMissCounter,
      };
    case 'next':
      let newCurrentCategory = state.currentCategory;
      let newNewCategory = false;
      // will be 0 if current question + 1 returns same number as amount of questions
      let newCurrentQuestion =
        (state.currentQuestion + 1) % state.amountOfQuestions;

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
        currentQuestionId:
          state.questions_data[newCurrentCategory].questions[newCurrentQuestion]
            .id,
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

export default function GameScreen({ route, navigation, setData }) {
  const data = route.params.data;
  const questions_data = pickQuestions(data.config);
  const [gameState, dispatchGameState] = useReducer(
    reducer,
    questions_data,
    initGame
  );

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
          onPress={async () => {
            const data = JSON.parse(await AsyncStorage.getItem('data'));
            const newQuestionStatsData = data.stats.questions;
            Object.keys(gameState.hit_miss_counter.hits).forEach(
              (question_category) => {
                gameState.hit_miss_counter.hits[question_category].forEach(
                  (question_id) => {
                    if (!newQuestionStatsData.hits[question_category]) {
                      newQuestionStatsData.hits[question_category] = {};
                    }

                    newQuestionStatsData.hits[question_category][question_id] =
                      data.stats.questions.hits[question_category][question_id]
                        ? data.stats.questions.hits[question_category][
                            question_id
                          ] + 1
                        : 1;
                  }
                );
              }
            );
            Object.keys(gameState.hit_miss_counter.misses).forEach(
              (question_category) => {
                gameState.hit_miss_counter.misses[question_category].forEach(
                  (question_id) => {
                    if (!newQuestionStatsData.misses[question_category]) {
                      newQuestionStatsData.misses[question_category] = {};
                    }
                    newQuestionStatsData.misses[question_category][
                      question_id
                    ] = data.stats.questions.misses[question_category][
                      question_id
                    ]
                      ? data.stats.questions.misses[question_category][
                          question_id
                        ] + 1
                      : 1;
                  }
                );
              }
            );

            await AsyncStorage.setItem(
              'data',
              JSON.stringify({
                ...data,
                points: data.points + gameState.points,
                stats: { ...data.stats, questions: newQuestionStatsData },
              })
            );
            navigation.navigate('GameTabs', {
              screen: 'Home',
            });
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
          color={'indigo'}
          onPress={() => {
            dispatchGameState({ type: 'category-confirm' });
          }}
        />
      </View>
    );
  }

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
          paddingHorizontal: 24,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            marginBottom: 16,
            //padding: 8,
            textAlign: 'justify',
            width: '100%',
            //borderWidth: 1,
          }}
        >
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
            title="PRÓXIMO"
            color="indigo"
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
          buttonStyle={{ width: '100%' }}
          titleStyle={{ fontSize: 18 }}
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
              dispatchGameState({
                type: 'answer',
                user_answer: item,
              });
            }
          }}
        />
      </View>
    );
  }
}

// Fisher-Yates Shuffle
// MODIFIED TO ACCEPT NEW ARGUMENT: max_length
function shuffle(array, max_length) {
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

  if (max_length) {
    return array.slice(0, max_length);
  }

  return array;
}

function pickQuestions(data) {
  const final_array = [];
  const categories = Object.keys(defaultConfig);

  categories.forEach((category) => {
    if (data[category].on) {
      final_array.push({
        categoryName: category,
        questions: shuffle(
          gameQuestions[category],
          (data[category].amountQuestions + 1) * 3
        ),
      });
    }
  });

  return final_array;

  return [
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
}
