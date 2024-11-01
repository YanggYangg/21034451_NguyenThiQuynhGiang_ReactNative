import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const CounterComponent = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Counter: {count}</Text>
      <Button 
      title="Increment" onPress={() => dispatch(increment())} />
      <Button 
      title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );

};

export default CounterComponent;