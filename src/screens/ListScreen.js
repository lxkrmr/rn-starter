import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1' },
    { name: 'Friend #2' },
    { name: 'Friend #3' },
    { name: 'Friend #4' },
    { name: 'Friend #5' },
    { name: 'Friend #6' },
    { name: 'Friend #7' },
    { name: 'Friend #8' },
    { name: 'Friend #9' },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={friends}
      // element === { item: {name: 'Friend #1'}, index: 0}
      // renderItem={(element) => <Text>{element.item.name}</Text>}
      renderItem={({ item }) => (
        <Text style={styles.textStyle}>{item.name}</Text>
      )}
      keyExtractor={(friend) => friend.name}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
