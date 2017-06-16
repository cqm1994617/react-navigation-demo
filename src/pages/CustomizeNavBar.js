import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class CustomizeNavBar extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>12345</Text>
      </View>
    )
  }
}
