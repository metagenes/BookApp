/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Image} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import ListBooks from './ListBooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
// const { itemId } = route.params;
// const { otherParam } = route.params;
import Home from './Home';

class DetailScreen extends Component {
  constructor(props) {
    super(props);

    // this.data = props.navigation.getParam('name');
  }
  // state = {
  //   name: '',
  // };
  //rent
  rentBook = () => {
    const userData = {
      user_id: this.state.user_id,
    };
    console.log(`this is book_id on rentBook`);
    axios
      .post('http://192.168.100.157:8000/user/borrow', userData,this.props.navigation.getParam('detailData').book_id)
      .then(response => {
        console.log('borrowed');
        this.props.navigation.navigate('History');
        ToastAndroid.showWithGravity(
          'Saved, your choosen book already borrowed',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      })
      .catch(error => {
        // console.log('error');

        ToastAndroid.showWithGravityAndOffset(
          'fail to borrowed',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        console.error(error.response.data);
      });
  };
  // end
  render() {
    console.log(
      'ini console log di Detailscreen',
      this.props.navigation.getParam('data'),
    );

    const {goBack} = this.props.navigation;
    const data = this.props.navigation.getParam('detailData');
    return (
      <View style={styles.content}>
        <View style={{marginTop: 0}}>
          <Button
            style={{backgroundColor: 'transparent', marginRight: 285}}
            // onPress={() => this.props.navigation.goBack(Home)}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon style={{color: 'white', marginTop: 0}} name="arrow-back" />
          </Button>
        </View>
        <Container style={{padding: 0, marginTop: -45}}>
          <View style={{marginTop: 0}}>
            <Image
              source={{uri: data.imgurl}}
              style={{
                width: 360,
                height: 230,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                position: 'absolute',
              }}
            />
            {/* <View> */}

            {/* </View> */}
            {/* <Button onPress={() => goBack()}>
              <Icon
                onPress={() => goBack()}
                style={{color: 'white', marginLeft: 20, marginTop: 12}}
                name="arrow-back"
              />
            </Button> */}

            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  marginTop: 125,
                  marginLeft: 20,
                }}>
                {data.title}
              </Text>
            </View>

            <Text
              style={{
                color: 'white',
                // width: 150,

                marginTop: 20,
                marginLeft: 20,
              }}>
              {data.author}
            </Text>
          </View>
          <View style={{marginTop: 80, padding: 15}}>
            <Text>{data.description}</Text>
          </View>
          {/* new */}
          <View>
              <TouchableOpacity
                // onPress={() =>
                //   this.props.navigation.navigate('Login', {
                //     itemId: 2,
                //     name: 'siska eee',
                //   })
                // }
                onPress={() => this.rentBook()}>
                <Text style={{marginLeft: 13, fontSize: 20, marginTop: 40}}>
                  borrow
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
            {/* endhere */}
          {/* <View> */}
            {/* new */}
            {/* <TouchableOpacity
                onPress={() => this.rentBook()}> */}
            {/* endhere */}
            {/* <Button
              style={{
                width: 140,
                backgroundColor: '#f4c06f',
                borderRadius: 20,
                marginTop: 80,
                marginLeft: 104,
              }}>
              <Text
                style={{
                  width: 100,
                  color: 'white',
                  fontWeight: '200',
                  alignContent: 'center',
                  textAlign: 'center',
                  marginLeft: 20,
                }}>
                RENT
              </Text>
            </Button>
            </TouchableOpacity>
          </View> */}
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              // flexDirection: 'row',
            }}>
            <View
              style={{marginTop: 110, marginLeft: 80, flexDirection: 'row'}}>
              {/* <Text
                style={{
                  color: 'white',
                  width: 80,
                  flexDirection: 'row',
                  marginTop: 50,
                  marginLeft: -20,
                }}>
                Judul Buku
              </Text>
              <Text
                style={{color: 'white', marginTop: 80, flexDirection: 'row'}}>
                Judul Author
              </Text> */}

              <Image
                style={{
                  width: 100,
                  height: 150,
                  borderRadius: 10,
                  marginLeft: 140,
                  // marginTop: 100,
                  // marginLeft: 245,
                }}
                source={{uri: data.imgurl}}></Image>
            </View>
          </View>
        </Container>
        {/* <Text style={styles.name}></Text> */}
        {/* <Text style={styles.name}>Ini Detail</Text> */}
        {/* <Profile name={this.state.name} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 40,
    color: 'red',
  },
});

export default DetailScreen;
