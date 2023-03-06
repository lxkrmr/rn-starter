import { View, Button, StyleSheet, FlatList, Text } from 'react-native';
import { useState } from 'react';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const handleAddColor = () => setColors((curr) => [randomColor(), ...curr]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <View>
      <Button title="Add a color" onPress={handleAddColor} />
      <FlatList
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
      <Text>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorScreen;
