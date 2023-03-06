import { View, Text, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCount((curr) => curr + 1)} />
      <Button title="Decrease" onPress={() => setCount((curr) => curr - 1)} />
      <Text>Counter: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
