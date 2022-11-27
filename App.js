import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';

const GameTabs = createBottomTabNavigator();
const RootStack = createStackNavigator();

export default function App() {
  function Game() {
    return (
      <GameTabs.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: { display: 'none' } }}
      >
        <GameTabs.Screen name='Home' component={Home} />
      </GameTabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='game' component={Game} />
      </RootStack.Navigator>
    </NavigationContainer>
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
