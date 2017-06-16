import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default class Params extends React.Component {

  static navigationOptions = {
    title: 'Navigation Demo',
  };

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View>
        <Text>收到的参数为：{params.title}</Text>
      </View>
    );
  }
}