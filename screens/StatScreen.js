import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { defaultConfig, gameQuestions } from '../Config';

export default function StatScreen({ navigation, route }) {
  const [stats, setStats] = useState(route.params.stats_data);

  function renderItem({ item }) {
    return (
      <View style={{ alignItems: 'center' }}>
        <View
          style={{ width: 240, flexDirection: 'row', borderBottomWidth: 2 }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            {item + ': '}
          </Text>
          <Text style={{ fontSize: 20, marginLeft: 'auto' }}>
            {String(
              Math.floor(
                (Object.keys(stats.questions.hits).length /
                  gameQuestions[item].length) *
                  100
              )
            )}
            %
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Stats:</Text>
      <View style={{ paddingTop: 8, paddingBottom: 14, width: '100%' }}>
        <FlatList
          style={{ flexGrow: 0 }}
          renderItem={renderItem}
          data={Object.keys(defaultConfig)}
          keyExtractor={(item, index) => index}
        />
      </View>
      <Button
        title={'VOLTAR'}
        color={'indigo'}
        onPress={() => {
          navigation.goBack();
          /*
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: 'GameTabs' }],
            })
          )*/
        }}
      />
    </View>
  );
}
