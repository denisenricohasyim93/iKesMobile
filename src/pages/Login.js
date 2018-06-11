import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput,
  Picker,
  Dimensions
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';
var { height, width } = Dimensions.get("window");

export default class Login extends Component<{}> {

  state = {
    user: 'Dokter',
  }

  updateUser = (user) => {
    this.setState({ user: user })
  }

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<View style={styles.containerTextInput}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                />  
            <View style={{width: 0.5*width, height: 0.1*height}}>
              <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} style={{color: 'white'}}>
                  <Picker.Item label = "Dokter" value = "Dokter" />
                  <Picker.Item label = "Perawat" value = "Perawat" />
                  <Picker.Item label = "Pasien" value = "Pasien" />
                  <Picker.Item label = "Pemilik" value = "Pemilik" />
              </Picker>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {
              if (this.state.user === "Dokter") {
                Actions.maindokter()
              }
              if (this.state.user === "Perawat") {
                Actions.mainperawat()
              }
              if (this.state.user === "Pasien") {
                Actions.mainpasien()
              }
              if (this.state.user === "Pemilik") {
                Actions.mainpemilik()
              }
            }}>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>     
        </View>
				{/*<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View>*/}
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'darkgreen',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  containerTextInput : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  textPicker: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'white'
 }
});
