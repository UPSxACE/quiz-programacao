import { CommonActions } from '@react-navigation/native';
import { Button } from '@rneui/base';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function StatScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 28 }}>Stats:</Text>
      <Button
        title={'VOLTAR'}
        color={'indigo'}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: 'GameTabs' }],
            })
          );
        }}
      />
    </View>
  );
}
