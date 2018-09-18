import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import I18n from './locale';

const instructions = Platform.select({
  android: I18n.t('platform.android'),
  ios: I18n.t('platform.ios'),
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    I18n.initAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{I18n.t('title')}</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}
