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
    title: 'Back4',
  };

  back = () => {
    this.props.navigation.goBack({routeName: 'Back'});
  };

  backToTop = () => {
    this.props.navigation.reset();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button text="返回" onPress={this.back}/>
        <Button text="返回首页" />
      </View>
    )
  }
}
