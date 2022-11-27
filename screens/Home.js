import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Input } from '@rneui/base';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ loadingState, nameState, setNameState }) {
  const [inputValue, setInputValue] = useState();

  if (!loadingState) {
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
        ListHeaderComponent={<PageContent nameState={nameState} />}
        contentContainerStyle={{ flex: 1 }}
        ListHeaderComponentStyle={{ flex: 1 }}
      />
    </View>
  );
}

function PageContent({ nameState }) {
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <View style={{ padding: 48 }}>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>{nameState}</Text>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>Pontos: 0</Text>
      </View>
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
          title={'9'}
          color='green'
        />
        <Button
          containerStyle={{ flex: 1, paddingHorizontal: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'Inglês'}
          color='cornflowerblue'
        />
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'L'}
          color='green'
        />
      </View>
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
          title={'9'}
          color='green'
        />
        <Button
          containerStyle={{ flex: 1, paddingHorizontal: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'HTML'}
          color='cornflowerblue'
        />
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'L'}
          color='green'
        />
      </View>
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
          title={'9'}
          color='green'
        />
        <Button
          containerStyle={{ flex: 1, paddingHorizontal: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'CSS'}
          color='cornflowerblue'
        />
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'L'}
          color='green'
        />
      </View>
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
          title={'9'}
          color='green'
        />
        <Button
          containerStyle={{ flex: 1, paddingHorizontal: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'JavaScript'}
          color='cornflowerblue'
        />
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'L'}
          color='green'
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 24,
          paddingBottom: 48,
        }}
      >
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'9'}
          color='green'
        />
        <Button
          containerStyle={{ flex: 1, paddingHorizontal: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'Programação'}
          color='cornflowerblue'
        />
        <Button
          buttonStyle={{ width: 48, height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title={'L'}
          color='green'
        />
      </View>
      <View style={{ paddingHorizontal: 24, paddingBottom: 48 }}>
        <Button
          containerStyle={{ paddingBottom: 8 }}
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title='START'
          color='indigo'
        />
        <Button
          buttonStyle={{ height: 48 }}
          titleStyle={{ fontSize: 20 }}
          title='STATS'
          color='blueviolet'
        />
      </View>
    </View>
  );
}

const page_styles = StyleSheet.create({});
