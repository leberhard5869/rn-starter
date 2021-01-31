import React, { useReducer } from "react";  // Same as 'Redux'
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

// Reducer rule #1: Never mutate state directly, only redefine it (with an 'action')

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return state.change_red + action.payload > 255 || state.change_red + action.payload < 0 ? state : { ...state, change_red: state.change_red + action.payload };
    case 'change_green':
      return state.change_green + action.payload > 255 || state.change_green + action.payload < 0 ? state : { ...state, change_green: state.change_green + action.payload };
    case 'change_blue':
      return state.change_blue + action.payload > 255 || state.change_blue + action.payload < 0 ? state : { ...state, change_blue: state.change_blue + action.payload };
    default:
      return state;  // Reducer rule #2: Always need to return a object defining state, even if it hasn't changed
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { change_red: 0, change_green: 0, change_blue: 0 });  // One 'dispatches' an 'action'; action convention is to define an 'type' (what you are doing) and a 'payload' (by how much)
  const { change_red, change_green, change_blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
        color="Blue"
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${change_red}, ${change_green}, ${change_blue})` }}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;