import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Button from './components/Button';
import {StackNavigator} from 'react-navigation';
import routes from './routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class App extends React.Component {

  static navigationOptions = {
    title: 'Navigation Demo',
  };

  jumpTo = (pages, params) => () => {
    const {navigate} = this.props.navigation;
    navigate(pages, params || {})
  };


  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.inner}
      >
        <Button text="跳转传参" onPress={this.jumpTo('Params', {title: '我是参数！'})}/>
        <Button text="样式不同的导航栏" onPress={this.jumpTo('Header')}/>
        <Button text="ios/android导航栏通用" onPress={this.jumpTo('CustomizeNavBar')}/>
      </ScrollView>
    )
  }
}

const Routes = StackNavigator({
  Home: {screen: App},
  ...routes
});

export default Routes;
