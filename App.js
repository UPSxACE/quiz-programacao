import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import GameScreen from './screens/GameScreen';

const GameTabs = createBottomTabNavigator();
const RootStack = createStackNavigator();

export default function App() {
  const [bgColor, setBgColor] = useState('#f3f4f6');
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);

  useEffect(() => {
    async function loadData() {
      Promise.all([
        setName(await AsyncStorage.getItem('nickname')),
        new Promise((resolve) => {
          setTimeout(() => {
            resolve('promise done');
          }, 3000);
        }),
      ]).then(() => {
        setLoading(false);
      });
    }

    loadData();
  }, []);

  function Game() {
    return (
      <GameTabs.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      >
        <GameTabs.Screen name='Home'>
          {(props) => (
            <HomeScreen
              loadingState={loading}
              nameState={name}
              setNameState={setName}
              {...props}
            />
          )}
        </GameTabs.Screen>
        <GameTabs.Screen name='Game' options={{ unmountOnBlur: true }}>
          {(props) => <GameScreen {...props} />}
        </GameTabs.Screen>
      </GameTabs.Navigator>
    );
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
              <RootStack.Screen name='GameTabs' component={Game} />
            </RootStack.Navigator>
            <StatusBar style='auto' />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaView>
      {loading && (
        <View
          style={{
            position: 'absolute',
            zIndex: 99,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size={100} color={'black'} />
        </View>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
