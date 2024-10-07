import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CounterApp from './component/useState/useState_01.js';
import CounterApp02 from './component/useState/useState_02.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CounterApp /> */}
      <CounterApp02 />
    
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
