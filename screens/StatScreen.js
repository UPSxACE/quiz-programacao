import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function StatScreen({ navigation }) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    async function test() {
      const data = JSON.parse(await AsyncStorage.getItem('data'));
      console.log(data);
      console.log(data.stats.questions);
      setText(JSON.stringify(data.stats.questions));
      //console.log(data.stats.questions);
    }
    test();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28 }}>Stats:</Text>
      <Text style={{ fontSize: 28 }}>{text}</Text>
      <View style={{ paddingTop: 8, paddingBottom: 14 }}>
        {dataLoaded ? (
          <FlatList style={{ flexGrow: 0 }} data={''} />
        ) : (
          <ActivityIndicator size={40} color={'black'} />
        )}
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
