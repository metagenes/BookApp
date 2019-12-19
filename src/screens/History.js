// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   StatusBar,
//   ImageBackground,
// } from 'react-native';
// import {
//   Container,
//   Header,
//   Left,
//   Body,
//   Right,
//   Icon,
//   Text,
//   Title,
//   Content,
//   Footer,
//   Button,
//   FooterTab,
// } from 'native-base';

// export default class History extends Component {
//   render() {
//     return (
//       <Container>
//         <Header style={{backgroundColor: '#fdfbfb'}}>
//           <View style={{marginTop: 0}}>
//             {/* <Button
//               style={{
//                 marginRight: 0,
//                 backgroundColor: '#fdfbfb',
//                 backfaceVisibility: 'visible',
//               }}
//               onPress={() => this.props.navigation.goBack()}> */}
//             <Icon
//               onPress={() => this.props.navigation.goBack()}
//               style={{color: 'black', marginTop: 15, marginLeft: 10}}
//               name="arrow-back"
//             />
//             {/* </Button> */}
//           </View>
//           {/* <Left /> */}

//           <Body style={{flexDirection: 'row'}}>
//             {/* <Icon style={{color: 'black'}} name="arrow-back" /> */}

//             {/* <Button
//               onPress={() => this.props.navigation.goBack()}
//               style={{
//                 backgroundColor: 'transparent',
//                 marginRight: 285,
//                 ImageBackground: 'transparent',
//               }}>
//               <Icon style={{color: 'white', marginTop: 0}} name="arrow-back" />
//             </Button> */}

//             <Title style={{color: 'black', marginLeft: 110}}>History</Title>
//           </Body>

//           {/* <Right /> */}
//         </Header>

//         <Text style={{textAlign: 'center', fontSize: 30}}>History Empty</Text>
//       </Container>
//     );
//   }
// }

// // import React, {Component} from 'react';
// // import {View, Icon} from 'native-base';
// // import {Text} from 'react-native';

// // class History extends Component {
// //   render() {
// //     return (
// //       <View>
// //         {/* <Icon
// //       style={{color: 'black', marginLeft: 20, marginTop: 12}}
// //       name="arrow-back"
// //     /> */}
// //         <Text>Ini Halaman History</Text>
// //       </View>
// //     );
// //   }
// // }

// // export default History;


import React, { Component } from 'react';
import { ToastAndroid, TouchableOpacity, Image } from 'react-native';
import {
  Container,
  Header,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
  H3,
  Title,
  Card,
} from 'native-base';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import jwt_decode from 'jwt-decode';
// import {NavigationEvents} from 'react-navigation';

// import AuthService from './AuthService';
// const Auth = new AuthService();
let profile, name;
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataWis: [],
      visible: false,
      toastMsg: '',
      profile: {
        exp: '',
        iat: '',
        response: {
          email: '',
          id: '',
          name: '',
          password: '',
        },
      },
      dataWishlist: [],
      dataBorrow: [],
      isDisBorrow: false,
    };
  }

  // async refresh() {
  //   // this.showToast('Abcd');
  //   const data = await AsyncStorage.getItem('token');
  //   this.setState({
  //     profile: jwt_decode(data),
  //   });
  //   const id_user = this.state.profile.response.id;
  //   axios
  //     .get(
  //       `http://192.168.100.157:8000/user/wishlist?user_id=${id_user}`,
  //     )
  //     .then(response => {
  //       this.setState({
  //         dataWishlist: response.data.response,
  //       });
  //     })
  //     .catch(error => console.log(error));
  // }

  componentDidMount() {
    this.Listener = this.props.navigation.addListener('didFocus', async () => {
      const data = await AsyncStorage.getItem('token');
      this.setState({
        profile: jwt_decode(data),
      });
      // console.log('aaaa');
      // profile = decode(data);
      // this.setState({
      // });
      // console.log(data);

      // name = profile.response.name;
      // console.log('data', name);
      // const;
      const id_user = this.state.profile.response.user_id;
      console.log('userdidmo', id_user);
      axios
        .get(
          `http://192.168.100.157:8000/user/history?id=${id_user}`,
        )
        .then(response => {
          this.setState({
            dataBorrow: response.data.response,
          });
          // console.log(response.data.response);
        })
        .catch(error => console.log(error));
    })

  }
  componentWillUnmount() {
    this.Listener.remove()
  }

  // https://nameless-plateau-17084.herokuapp.com/book/wishlist?id=${id_user}

  async getToken() { }

  showToast = msg => {
    this.setState(
      {
        visible: true,
        toastMsg: msg,
      },
      () => {
        this.hideToast();
      },
    );
  };

  hideToast = () => {
    this.setState({
      visible: false,
    });
  };

  async onLogout() {
    await AsyncStorage.removeItem('token').then(() => {
      this.showToast('You are logged out');
      this.props.navigation.navigate('Login');
    });
  }

  // remove = id => {
  //   // console.log(id);
  //   axios
  //     .delete(
  //       `https://nameless-plateau-17084.herokuapp.com/book/removewishlist?id=${id}`,
  //     )
  //     .then(res => {
  //       {
  //         // array.splice(index, 1);
  //         this.setState({
  //           dataWishlist: this.state.dataWishlist.filter(item => item.id != id),
  //         });
  //       }
  //     })
  //     .then(() => this.showToast('Remove Succes'))
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  render() {
    // console.log('datawi', this.state.dataWishlist);
    // const name = profile[response];
    // console.log('nama', this.state.profile.response);
    const name = this.state.profile.response.name;
    const id = this.state.profile.response.user_id;
    // console.log('nama log', id);
    // let a = 1;
    if (this.state.visible) {
      ToastAndroid.showWithGravityAndOffset(
        this.state.toastMsg,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return null;
    }
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon style={{ color: 'black' }} name="arrow-back" />
            </Button>
          </Left>
          {/* <Body>
            <Title style={{color: 'black'}}>Profile</Title>
          </Body> */}
          {/* <Right>
            <View style={{flexDirection: 'row'}}> */}
          {/* <NavigationEvents
                onDidFocus={() => this.showToast('Refreshed')}
              /> */}
          {/* </View>
          </Right> */}
        </Header>
        <ScrollView>
          <View>
            {/* <View
              style={{
                backgroundColor: '#699ff5',
                alignItems: 'center',
                height: 200,
                borderBottomEndRadius: 100,
                borderBottomStartRadius: 100,
              }}> */}
            {/* <Thumbnail
                style={{
                  backgroundColor: 'aqua',
                  width: 100,
                  height: 100,
                  marginTop: 20,
                  marginBottom: 10,
                  borderRadius: 50,
                }}
                source={{
                  uri:
                    'https://yt3.ggpht.com/a/AGF-l7-fI-S21mKPmp9-DXx0FhGSBFSwv_BzPoOZYQ=s288-c-k-c0xffffffff-no-rj-mo',
                }}
              /> */}
            {/* <H3>{name}</H3> */}
          </View>
          <View>
            <Text style={{ alignSelf: 'center' }}>Your History</Text>
          </View>
          {/* </View> */}
          <View>
            <View>
              {this.state.dataBorrow.map((data, index) => {
                return (
                  <Card key={index}>
                    <View
                      style={{
                        paddingLeft: 30,
                        flexDirection: 'row',
                      }}>

                      <Card transparent width={85} height={130}>
                        <Image
                          borderRadius={5}
                          source={{
                            uri: data.imgurl,
                          }}
                          style={{
                            height: 200,
                            width: '100%',
                            flex: 1,
                          }}
                        />
                      </Card>
                      <View style={{ marginLeft: 20 }}>
                        <Text style={{ marginTop: 30 }}>Title : {data.title}</Text>
                        <Text style={{ marginTop: 30 }}>Borrow date : {data.book_at}</Text>
                        <Text style={{ marginTop: 30 }}>Return Date : {data.return_at}</Text>
                        {/* <Button style={{ width: 100, height: 30, alignContent: 'center',
                              alignItems: 'center', justifyContent: 'center', }}> <Text>Remove</Text> </Button> */}
                        {/* <Button
                            onPress={() => this.remove(data.book_id)}
                            iconLeft
                            light
                            style={{
                              marginTop: 5,
                              width: 50,
                              backgroundColor: 'white',
                              borderColor: 'black',
                              borderWidth: 1,
                            }}> */}
                        {/* <Icon name="trash" />
                          </Button> */}
                      </View>
                      {/* <View></View> */}
                    </View>
                  </Card>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}