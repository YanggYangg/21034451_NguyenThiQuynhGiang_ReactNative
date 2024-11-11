import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Screen01 from './components/Screen01'
import Screen02 from './components/Screen02'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './components/store';


const Stack = createStackNavigator();

export default function App() {
  return (
    //<Screen02 />
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen02">
          <Stack.Screen name="Screen01" component={Screen01} />
          <Stack.Screen name="Screen02" component={Screen02} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};