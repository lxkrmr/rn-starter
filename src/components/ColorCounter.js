import { View, Text, Button, StyleSheet } from 'react-native';

const ColorCounter = ({ color, onChange }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onChange((curr) => (curr + 10 > 255 ? 255 : curr + 10))}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => onChange((curr) => (curr - 10 < 0 ? 0 : curr - 10))}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
