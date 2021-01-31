import React, { useReducer } from "react";  // Same as 'Redux'
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// Rule #1: Never mutate state directly, only redefine it (with an 'action')

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;  // Rule #2: Always need to return a object defining state, even if it hasn't changed
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });  // One 'dispatches an action'
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;