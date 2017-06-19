import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from '../components/Button';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class Back extends React.Component {

  static navigationOptions = {
    title: 'Back',
  };

  state = {
    text: '+1s'
  };

  setValue = (text) => {
    this.setState({
      text
    });
  };

  back = () => {
    console.log(this.props.navigation);
    this.props.navigation.goBack();
  };

  next = () => {
    console.log(this.props.navigation)
    this.props.navigation.navigate('Back2', {
      setValue: this.setValue,
      backKey: this.props.navigation.state.key
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.text}</Text>
        <Button text="返回" onPress={this.back} />
        <Button text="去下一个页面" onPress={this.next} />
      </View>
    )
  }
}
