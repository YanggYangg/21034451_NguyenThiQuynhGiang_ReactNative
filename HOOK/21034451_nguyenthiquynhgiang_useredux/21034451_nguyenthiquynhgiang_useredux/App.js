import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import CounterComponent from './components/CounterComponent';


export default function App() {
  return (
    <Provider store={store}>
     <CounterComponent />
    </Provider>
  );
}


