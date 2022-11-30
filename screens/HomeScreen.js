import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from '@rneui/base';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { defaultConfig } from '../Config';

const categoryList = Object.keys(defaultConfig);

export default function HomeScreen({
  route,
  loadingState,
  nameState,
  setNameState,
}) {
  const [inputValue, setInputValue] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState({});
  const [dataOnOffValidator, setdataOnOffValidator] = useState(false);
  let onCounter = [];

  useEffect(() => {
    async function loadData() {
      let finalData = JSON.parse(await AsyncStorage.getItem('data'));
      if (!finalData || Object.keys(finalData).length === 0) {
        finalData = {
          points: 0,
          config: defaultConfig,
          stats: { questions: { hits: {}, misses: {} } },
        };
      }
      if (!finalData.points) {
        finalData.points = 0;
      }
      if (!finalData.config) {
        finalData.config = {};
      }

      //verify if the current data has all the default categories inside it
      const defaultKeys = Object.keys(defaultConfig);
      defaultKeys.forEach((key) => {
        if (!finalData.config[key]) {
          finalData.config[key] = defaultConfig[key];
        }
      });

      //verify if stats is correctly structured
      if (!finalData.stats) {
        finalData.stats = { questions: { hits: {}, misses: {} } };
      }
      if (!finalData.stats.questions) {
        finalData.stats.questions = { hits: {}, misses: {} };
      }
      if (!finalData.stats.questions.hits) {
        finalData.stats.questions.hits = {};
      }
      if (!finalData.stats.questions.misses) {
        finalData.stats.questions.hits = {};
      }

      //Save data
      setData(finalData);
      setDataLoaded(true);
    }
    loadData();
  }, []);

  if (loadingState || !dataLoaded) {
    // this is causing white screen issues
    return <></>;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size={100} color={'black'} />
      </View>
    );
  }

  if (!nameState) {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            paddingBottom: 12,
          }}
        >
          Insira um nickname:
        </Text>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 12,
          }}
        >
          <Input
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              paddingBottom: 0,
            }}
            containerStyle={{
              width: 300,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            inputStyle={{ paddingHorizontal: 12 }}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            renderErrorMessage={false}
            onChangeText={setInputValue}
          />
        </View>
        <View style={{ alignItems: 'center', paddingBottom: 12 }}>
          <Button
            containerStyle={{ width: 200 }}
            title={'PRÓXIMO'}
            onPress={async () => {
              AsyncStorage.setItem('nickname', inputValue);
              setNameState(inputValue);
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <PageContent
            nameState={nameState}
            data={data}
            setData={setData}
            dataOnOffValidator={dataOnOffValidator}
            setdataOnOffValidator={setdataOnOffValidator}
            onCounter={onCounter}
          />
        }
        contentContainerStyle={{ flex: 1 }}
        ListHeaderComponentStyle={{ flex: 1 }}
      />
    </View>
  );
}

function PageContent({
  nameState,
  data,
  setData,
  dataOnOffValidator,
  setdataOnOffValidator,
  onCounter,
}) {
  const navigation = useNavigation();

  function Item({ item }) {
    const [on, setOn] = useState(data.config[item].on);
    const [amountQuestions, setAmountQuestions] = useState(
      data.config[item].amountQuestions
    );

    useEffect(() => {
      if (data.config[item].on) {
        onCounter.push(item);
        if (dataOnOffValidator === false) {
          setdataOnOffValidator(true);
        }
      }
    }, []);

    return (
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 24,
          paddingBottom: 12,
        }}
      >
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={on ? String((amountQuestions + 1) * 3) : '0'}
          color={
            on
              ? amountQuestions == 2
                ? 'darkgreen'
                : amountQuestions == 1
                ? 'limegreen'
                : '#6fa86f'
              : 'grey'
          }
          onPress={() => {
            if (on) {
              const newData = data;
              newData.config[item].amountQuestions =
                (newData.config[item].amountQuestions + 1) % 3;
              setAmountQuestions(newData.config[item].amountQuestions);
              setData(newData);
            }
          }}
        />
        <Button
          containerStyle={{ flex: 1, paddingHorizontal: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={item}
          color={on ? 'cornflowerblue' : 'grey'}
        />
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={on ? 'L' : 'D'}
          color={on ? 'green' : 'red'}
          onPress={() => {
            // check the need to disable the start button
            if (!on) {
              onCounter.push(item);
            } else {
              onCounter.pop(item);
            }

            if (onCounter.length > 0 && dataOnOffValidator === false) {
              setdataOnOffValidator(true);
            }
            if (onCounter.length <= 0 && dataOnOffValidator === true) {
              setdataOnOffValidator(false);
            }

            // toggle on/off
            const newData = data;
            newData.config[item].on = !newData.config[item].on;
            setOn(!on);
            setData(newData);
          }}
        />
      </View>
    );
  }

  function renderItem({ item }) {
    return <Item item={item} />;
  }

  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <View style={{ padding: 48 }}>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>{nameState}</Text>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>
          Pontos: {data.points}
        </Text>
      </View>
      <FlatList
        renderItem={renderItem}
        data={categoryList}
        keyExtractor={(item, index) => index}
      />
      <View
        style={{ paddingHorizontal: 24, paddingBottom: 48, paddingTop: 36 }}
      >
        <Button
          containerStyle={{ paddingBottom: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title="START"
          color={'indigo'}
          disabled={!dataOnOffValidator}
          disabledStyle={{ backgroundColor: 'grey' }}
          disabledTitleStyle={{ color: 'white' }}
          onPress={() => {
            if (dataOnOffValidator) {
              AsyncStorage.setItem('data', JSON.stringify(data));
              navigation.navigate('GameTabs', {
                screen: 'Game',
                params: { data },
              });
            }
          }}
        />
        <Button
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title="STATS"
          color="blueviolet"
          onPress={() => {
            AsyncStorage.setItem('data', JSON.stringify(data));
            navigation.navigate('Stats', { stats_data: data.stats });
          }}
        />
      </View>
    </View>
  );
}

const page_styles = StyleSheet.create({});
