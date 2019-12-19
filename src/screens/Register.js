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
import Home from './Home';
import axios from 'axios';
import {ToastAndroid} from 'react-native';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      isSecure: true,
    };
  }

  insertUser = () => {
    const userData = {
      name: this.state.name,

      email: this.state.email,

      password: this.state.password,
    };
    axios
      .post('http://192.168.100.157:8000/user/register', userData)
      .then(response => {
        console.log('Registered');
        this.props.navigation.navigate('Login');
        ToastAndroid.showWithGravity(
          'Saved, your account was successfully created',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      })
      .catch(error => {
        // console.log('error');

        ToastAndroid.showWithGravityAndOffset(
          'your fail register',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        console.error(error.response.data);
      });
  };
  // onSubmit() {
  //   this.insertUser();
  // }
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
            Please Register Before Sign in!
          </Text>
          <Form style={{marginLeft: 9}}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={name => this.setState({name})} />
            </Item>

            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={email => this.setState({email})} />
            </Item>

            <Item floatingLabel>
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
              <TouchableOpacity
                onPress={() => this.insertUser()}>
                <Text style={{marginLeft: 13, fontSize: 20, marginTop: 40}}>
                  Register
                </Text>
                <Button
                  // onPress={() => this.insertUser.bind(this)}
                  // onPress={this.onSubmit.bind(this)}
                  rounded
                  dark
                  style={{width: 45, marginLeft: 270, marginTop: -30}}>
                  <Icon
                    style={{width: 23, fontSize: 35}}
                    name="arrow-forward"
                  />
                </Button>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('Login', {
                    itemId: 2,
                    name: 'siska eee',
                  })
                }>
                <Text
                  style={{
                    marginLeft: 13,
                    fontSize: 12,
                    marginTop: 50,
                    textDecorationLine: 'underline',
                  }}>
                  Already have an account?
                </Text>
                {/* <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 240,
                    marginTop: -10,
                  }}>
                  Forgot Password
                </Text> */}
              </TouchableOpacity>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
