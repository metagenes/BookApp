import React, {Component} from 'react';
import {Image} from 'react-native';
import axios from 'axios';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Icon,
  Left,
  Body,
  // ScrollView,
  View,
  Right,
  Button,
} from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import {createStackNavigator} from 'react-navigation-stack';
import DetailAllBooks from './DetailAllBooks';
// import {ScrollView} from 'react-native-gesture-handler';

export default class PopularBooks extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get('http://192.168.100.157:8000/book')
      .then(data => this.setState({users: data.data.response}))

      .catch(err => {
        console.log(err);

        return null;
      });
  };

  render() {
    console.log('ini allbook');

    return (
      <View
        style={{
          marginTop: -160,
        }}>
        <View>
          <Text
            style={{
              marginLeft: 21,
              marginTop: 15,

              fontSize: 20,
            }}>
            All Books
          </Text>
        </View>
        <ScrollView>
          {/* <Container style={{padding: 21}}> */}
          {this.state.users.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  paddingBottom: 20,
                  marginTop: 15,
                  marginLeft: 21,
                }}>
                <TouchableOpacity onPress={() => this.props.onPress({...item})}>
                  <Image
                    source={{uri: item.imgurl}}
                    style={{
                      width: 150,
                      height: 190,
                      borderRadius: 20,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    // justifyContent: 'center',
                    alignContent: 'space-between',
                    marginLeft: 15,
                    marginTop: 30,
                    width: 150,
                  }}>
                  {item.author}
                </Text>
                <Text
                  style={{
                    // justifyContent: 'center',
                    // alignContent: 'space-between',
                    fontSize: 15,
                    marginTop: 60,
                    paddingTop: 5,
                    // marginRight: -300,
                    marginLeft: -150,
                    width: 150,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    marginTop: 100,
                    marginLeft: -150,
                    backgroundColor: '#a5bc50',
                    color: 'white',
                    borderRadius: 15,
                    height: 23,
                    textAlign: 'center',
                    width: 75,
                  }}>
                  {item.status}
                </Text>
                <Text
                  style={{
                    marginTop: 130,
                    marginLeft: -75,
                    backgroundColor: '#176baa',
                    color: 'white',
                    borderRadius: 15,
                    height: 23,
                    textAlign: 'center',
                    width: 120,
                    position: 'relative',
                  }}>
                  {item.genre}
                </Text>
              </View>
            );
          })}
          {/* </Container> */}
        </ScrollView>
      </View>
    );
  }
}
