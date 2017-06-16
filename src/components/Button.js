import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#76acf8',
    height: 40,
    width: 160,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  }
});


const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
};

export default Button;