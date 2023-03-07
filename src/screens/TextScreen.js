import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text>Enter name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(changed) => setName(changed)}
      />
      <Text>Your name is: {name}</Text>
      {name.length < 5 && <Text>Name must be longer than 5 characters.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
