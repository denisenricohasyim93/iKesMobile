/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text
} from 'react-native';

export default class MainPerawat extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: "white"}}>Ini Menu Utama Perawat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'darkgreen',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
