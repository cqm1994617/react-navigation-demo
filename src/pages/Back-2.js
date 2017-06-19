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
    justifyContent: 'center',
  },
  tips: {
    marginHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    color: '#ff0000'
  },
  text: {
    lineHeight: 24
  }
});

export default class Back extends React.Component {

  static navigationOptions = {
    title: 'Back2',
  };

  back = () => {
    this.props.navigation.goBack();
  };

  backRefresh = () => {
    const {state, goBack} = this.props.navigation;
    state.params.setValue('长命百岁');
    goBack();
  };

  next = () => {
    this.props.navigation.navigate('Back3', {
      backKey: this.props.navigation.state.params.backKey
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button text="返回" onPress={this.back}/>
        <Button text="返回并修改上个页面值" onPress={this.backRefresh}/>
        <Button text="去下一个页面" onPress={this.next}/>
        <View style={styles.tips}>
          <Text style={[styles.title, styles.text]}>关于返回刷新这一常见需求</Text>
          <Text style={styles.text}>
            本demo中通过从上一个页面传递一个改变state的函数到下一个页面中的方式来进行实现。
            其实你可以把回退刷新理解成，在下一个页面更改了上一个页面的state。
            所以你完全也可以通过事件模块(发布订阅模式)。或是使用Redux、Mobx这类状态管理库，在返回时触发action修改值来实现。
          </Text>
        </View>
      </View>
    )
  }
}
