import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './components/FirstScreen';
import Screen_02 from './components/Screen_02';


const Stack = createStackNavigator();

export default function App() {
  return (
    //<FirstScreen />
    //<Screen_02 />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen_1a">
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Screen_02" component={Screen_02}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}