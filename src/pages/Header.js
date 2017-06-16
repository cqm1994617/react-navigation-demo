import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from '../components/Button';

import {NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class Header extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.title || '无'
    }
  };

  changeTitle = () => {
    this.props.navigation.setParams({
      title: '修改了一个标题~~~'
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Button text="修改标题" onPress={this.changeTitle} />
      </View>
    );
  }
}
