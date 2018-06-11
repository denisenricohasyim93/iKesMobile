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
  Text,
  Dimensions,
  Image
} from 'react-native';
var { height, width } = Dimensions.get("window");

export default class MainPemilik extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: width, height: 0.3*height, alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
          <View style={{width: 0.5*width, height: 0.3*height, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Image source={require('../images/if_Artboard_1_1790664.png')} style={{width: 100, height: 100}} />  
            <Text>Laporan Keuangan</Text>
          </View>
          <View style={{width: 0.5*width, height: 0.3*height, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <Image source={require('../images/if_SEO_Performance_2___324966.png')} style={{width: 100, height: 100}} />  
            <Text>Laporan Kinerja Pegawai</Text>
          </View>
        </View>
        <View style={{width: width, height: 0.3*height, alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
          <View style={{width: 0.5*width, height: 0.3*height, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <Image source={require('../images/if_Antivirus_32591.png')} style={{width: 100, height: 100}} />  
            <Text>Laporan Stok Obat</Text>
          </View>
          <View style={{width: 0.5*width, height: 0.3*height, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Text>D</Text>
          </View>
        </View>
        <View style={{width: width, height: 0.3*height, alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
          <View style={{width: 0.5*width, height: 0.3*height, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Text>E</Text>
          </View>
          <View style={{width: 0.5*width, height: 0.3*height, flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Text>F</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});
