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
    title: 'Back3',
  };

  back = () => {
    this.props.navigation.goBack();
  };

  reBack = () => {
    console.log(this.props.navigation);
    /*this.props.navigation.dispatch({
      type: 'Navigation/RESET',
      index: 0,
      actions: [{ type: 'Navigate', routeName:'Back'}]
    });*/
    console.log(this.props.navigation.state.params.backKey);
    this.props.navigation.goBack(this.props.navigation.state.params.backKey)
  };

  next = () => {
    this.props.navigation.navigate('Back4');
  };

  render() {
    return (
      <View style={styles.container}>
        <Button text="返回" onPress={this.back} />
        <Button text="返回上上页" onPress={this.reBack} />
        <Button text="带参数的replace" onPress={this.next} />
      </View>
    )
  }
}
