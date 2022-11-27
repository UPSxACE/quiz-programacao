import { Button } from '@rneui/base';
import { FlatList } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={PageContent}
        contentContainerStyle={{ flex: 1 }}
        ListHeaderComponentStyle={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

function PageContent() {
  return (
    <View style={{ justifyContent: 'center', flex: 1 }}>
      <View style={{ padding: 48 }}>
        <Text style={{ textAlign: 'center', fontSize: 24 }}>Eduardo</Text>
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
