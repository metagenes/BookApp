import React, {Component} from 'react';
import axios from 'axios';
import {Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  // ScrollView,
  View,
  Right,
} from 'native-base';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// import {createStackNavigator} from 'react-navigation-stack';

import DetailScreen from './DetailScreen';
// import {ScrollView} from 'react-native-gesture-handler';
export default class PopularBooks extends Component {
  state = {
    popularbook: [],
  };

  componentDidMount() {
    this.getpopularbook();
  }

  getpopularbook = () => {
    axios
      .get('http://192.168.100.157:8000/book')
      .then(data =>
        this.setState({
          popularbook: data.data.response,
        }),
      )
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  render() {
    console.log('ini popularbooks');
    return (
      <View
        style={{
          marginTop: -460,
        }}>
        <View>
          <Text style={{marginLeft: 21, fontSize: 20}}>Popular Books</Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            marginLeft: 10,
            // marginTop: -550,
            flexDirection: 'row',
            marginHorizontal: 10,
            // paddingHorizontal: 5,
          }}>
          {/* <Container style={{padding: 10}}> */}
          {this.state.popularbook.map((item, index) => {
            return (
              <View key={index} style={{paddingHorizontal: 10}}>
                <TouchableOpacity onPress={() => this.props.onPress({...item})}>
                  <Image
                    source={{uri: item.imgurl}}
                    style={{
                      width: 150,
                      height: 190,
                      borderRadius: 20,
                      paddingHorizontal: 10,
                      marginTop: 15,
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    // justifyContent: 'center',
                    alignContent: 'space-between',
                    // marginLeft: 15,
                    // marginTop: 30,
                    width: 150,
                    color: '#d2c1c1',
                  }}>
                  {item.author}
                </Text>
                <Text
                  style={{
                    // justifyContent: 'center',
                    // alignContent: 'space-between',
                    fontSize: 15,
                    // marginTop: 60,
                    // paddingTop: 5,
                    // marginRight: -300,
                    // marginLeft: -150,
                    fontWeight: 'bold',
                    width: 150,
                  }}>
                  {item.title}
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
