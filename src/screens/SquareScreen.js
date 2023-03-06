import { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
  // state: {red: number, green: number, blue: number}
  // action: { type: 'red' || 'green' || 'blue', payload: 15 || -15 }
  switch (action.type) {
    case 'red':
      return { ...state, red: calcColor(state.red, action.payload) };
    case 'green':
      return { ...state, green: calcColor(state.green, action.payload) };
    case 'blue':
      return { ...state, blue: calcColor(state.blue, action.payload) };
    default:
      return state;
  }
};

const calcColor = (curr, change) => {
  const newVaue = curr + change;
  if (newVaue > 255) {
    return 255;
  }

  if (newVaue < 0) {
    return 0;
  }

  return newVaue;
};

const COLOR_CHANGE = 15;

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  const increase = (color) => dispatch({ type: color, payload: COLOR_CHANGE });
  const decrease = (color) =>
    dispatch({ type: color, payload: -1 * COLOR_CHANGE });

  return (
    <View>
      <ColorCounter
        onIncrease={() => increase('red')}
        onDecrease={() => decrease('red')}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => increase('green')}
        onDecrease={() => decrease('green')}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => increase('blue')}
        onDecrease={() => decrease('blue')}
        color="Blue"
      />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
