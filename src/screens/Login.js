import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon,
  View,
  Button,
} from 'native-base';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Home from './Home'
import {ToastAndroid} from 'react-native';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
      isSecure: true,
    };
  }

  // loginUser = async() => {
  //   const loginData = {
  //     email: this.state.email,

  //     password: this.state.password,
  //   };
  //  await axios
  //     .post('http://192.168.6.156:7000/library/login', loginData)
  //     .then(response => {
  //       console.log('success login', response.data.token);

  //      await AsyncStorage.setItem('usertoken', response.data.token);
  //       // this.props.navigation.replace('Home');
  //       this.props.navigation.replace('Home');
  //       // return response.data.token;
  //       if ('usertoken' !== null) {
  //         this.props.navigation.replace('Home');
  //       } else {
  //         console.log(error);
  //       }
  //     })
  //     .catch(error => {
  //       // console.log('error');
  //       console.error(error.response.data);
  //     });

  //   // loginUser(value !== null).then(res => {
  // };

  loginUser = async () => {
    try {
      const loginData = {
        email: this.state.email,

        password: this.state.password,
      };

      const response = await axios.post(
        'http://192.168.100.157:8000/user/login',
        loginData,
      );
      await AsyncStorage.setItem('token', response.data.token);
      console.log(`token didapat`, response.token);
      this.props.navigation.navigate('App');
      ToastAndroid.showWithGravity(
        'Welcome To Library App',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      console.log('token didapat', response.data.token);
    } catch (error) {
      console.log(error);
      ToastAndroid.showWithGravity(
        'Wrong Email or Password ',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  };

  render() {
    return (
      <Container style={{width: 330}}>
        <Content>
          <Text
            style={{
              fontSize: 45,
              marginTop: 40,
              marginLeft: 20,
              fontFamily: 'bold',
            }}>
            Here To Get Welcomed!
          </Text>
          <Form style={{marginLeft: 9}}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                onChangeText={email => this.setState({email})}
                autoCapitalize="none"
              />
            </Item>

            <Item floatingLabel style={{marginLeft: 12}}>
              <Label style={{marginLeft: 0}}>Password</Label>

              <Input
                secureTextEntry={this.state.isSecure}
                onChangeText={password => this.setState({password})}
                autoCapitalize="none"
              />
              <Icon
                onPress={() => this.setState({isSecure: !this.state.isSecure})}
                type="FontAwesome5"
                name={this.state.isSecure ? 'eye-slash' : 'eye'}
                style={{fontSize: 18, color: '#4B4C72'}}
              />
            </Item>

            <View>
              <TouchableOpacity onPress={() => this.loginUser()}>
                <Text style={{marginLeft: 13, fontSize: 20, marginTop: 40}}>
                  Sign in
                </Text>
                <Button
                  rounded
                  dark
                  style={{width: 45, marginLeft: 270, marginTop: -30}}>
                  <Icon
                    style={{width: 23, fontSize: 35}}
                    name="arrow-forward"
                  />
                </Button>
                {/* <Text style={{width: 70, marginTop: 10}}>Ini Button</Text> */}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.replace('Register', {
                    itemId: 2,
                    name: 'siska eee',
                  })
                }>
                <Text
                  style={{
                    marginLeft: 13,
                    fontSize: 15,
                    marginTop: 50,
                    textDecorationLine: 'underline',
                  }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('!#', {
                    itemId: 2,
                    name: 'siska eee',
                  })
                }>
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 210,
                    width: 100,
                    marginTop: -10,
                    textDecorationLine: 'underline',
                  }}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
