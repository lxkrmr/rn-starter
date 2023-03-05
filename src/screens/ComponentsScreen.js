import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Jane Doe';
  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subHeader}>My name is {name}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  subHeader: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
