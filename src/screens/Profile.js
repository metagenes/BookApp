// import React, {Component} from 'react';
// // import axios from 'axios';
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
//   CardItem,
//   Card,
//   Thumbnail,
//   Image,
// } from 'native-base';

// import {TouchableOpacity} from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage';
// import {ToastAndroid} from 'react-native';

// import decode from 'jwt-decode';

// export default class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],

//       thisProfile: {
//         name: '',
//         email: '',
//       },
//     };
//   }

//   async Logout() {
//     await AsyncStorage.removeItem('usertoken').then(() => {
//       ToastAndroid.showWithGravity(
//         'you are success logout',
//         ToastAndroid.SHORT,
//         ToastAndroid.CENTER,
//       );

//       this.props.navigation.navigate('Login');
//     });
//   }

//   // getWishlist = id => {
//   //   return axios
//   //     .get(`http://192.168.6.156:7000/whishlist/${id}`)
//   //     .then(response => {
//   //       console.log("success get");
//   //       return response.data.response;
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });
//   // };

//   async componentDidMount() {
//     // const response = await getWishlist(this.props.match.params.id);

//     // console.log("response", response);
//     // this.setState({
//     //   data: response
//     // });

//     // this is decode
//     const data = await AsyncStorage.getItem('token');

//     // console.log(decode(data));

//     const thisProfile = decode(data);

//     this.setState({
//       name: thisProfile.response.name,
//       email: thisProfile.response.email,
//     });

//     // console.log('nama', name);
//   }
//   render() {
//     console.log('ini data history', this.state.data);
//     // const token = AsyncStorage.usertoken;
//     // let userprofil, username, email, user_level;
//     // if (token) {
//     //   userprofil = jwt_decode(token);
//     //   username = userprofil.username;
//     //   email = userprofil.email;
//     //   user_level = userprofil.user_level;
//     //   console.log(userprofil);
//     // }
//     return (
//       <View>
//         {/* <Container> */}
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
//           <View>
//             <Title style={{color: 'black', marginLeft: 110, marginTop: 15}}>
//               Profile
//             </Title>
//           </View>
//           <View>
//             <TouchableOpacity onPress={() => this.Logout()}>
//               <Text
//                 onPress={() => this.Logout()}
//                 style={{
//                   marginTop: 18,
//                   marginLeft: 80,
//                   backgroundColor: '#176baa',
//                   color: 'white',
//                   borderRadius: 10,
//                   height: 22,
//                   width: 50,
//                   textAlign: 'center',
//                 }}>
//                 Logout
//               </Text>
//             </TouchableOpacity>
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
//           </Body>

//           {/* <Right /> */}
//         </Header>

//         <Card style={{marginTop: 15}}>
//           <View style={{marginTop: 5}}>
//             <Text
//               style={{
//                 fontSize: 20,
//                 backgroundColor: '#8bc554',
//                 color: 'white',
//                 width: 'auto',
//                 textAlign: 'center',
//                 borderRadius: 5,
//               }}>
//               Welcome..
//             </Text>
//             <Text
//               style={{
//                 marginTop: 15,
//                 fontSize: 15,
//                 backgroundColor: '#8bc554',
//                 color: 'white',
//                 width: 140,
//                 textAlign: 'center',
//                 borderRadius: 5,
//               }}>
//               {this.state.name}
//             </Text>
//             <Text
//               style={{
//                 marginTop: 5,
//                 fontSize: 15,
//                 marginTop: 10,
//                 backgroundColor: '#8bc554',
//                 color: 'white',
//                 width: 140,
//                 textAlign: 'center',
//                 borderRadius: 5,
//                 marginBottom: 5,
//               }}>
//               {this.state.email}
//             </Text>
//           </View>
//         </Card>

//         {/* <table className="table table-borderless ">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Book Title</th>
//               <th scope="col">Author</th>
//               <th scope="col">Date Borrow</th>
//               <th scope="col">Date Return</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.map((item, index) => {
//               return (
//                 <tr key={index}>
//                   <th scope="row">{item.id_transaction}</th>
//                   <td>{item.title}</td>
//                   <td>{item.author}</td>

//                   <td>{item.date_borrow}</td>
//                   <td>{item.date_return}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table> */}
//         {/* </Container> */}
//       </View>
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

import React, {Component} from 'react';
import {ToastAndroid, TouchableOpacity, Image} from 'react-native';
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
import {ScrollView} from 'react-native-gesture-handler';
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

  async componentDidMount() {
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
        `http://192.168.100.157:8000/user/wishlist?user_id=${id_user}`,
      )
      .then(response => {
        this.setState({
          dataWishlist: response.data.response,
        });
        // console.log(response.data.response);
      })
      .catch(error => console.log(error));
  }


  async getToken() {}

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
    const email = this.state.profile.response.email;
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
        <Header style={{backgroundColor: 'white'}}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon style={{color: 'black'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'black'}}>Profile</Title>
          </Body>
          <Right>
            <View style={{flexDirection: 'row'}}>
              {/* <NavigationEvents
                onDidFocus={() => this.showToast('Refreshed')}
              /> */}
              <TouchableOpacity onPress={() => this.refresh()}>
                <Button
                  transparent
                  onPress={() => this.refresh()}
                  style={{height: 30}}>
                  <Icon style={{color: 'black'}} name="refresh" />
                </Button>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.onLogout()}>
                <Button
                  style={{
                    width: 100,
                    height: 30,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => this.onLogout()}>
                  <Text style={{}}>Logout</Text>
                </Button>
              </TouchableOpacity>
            </View>
          </Right>
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
              <H3>Name : {name}</H3>
            <H3>User Email : {email}</H3>
            </View>
            <View>
              <Text style={{alignSelf: 'center'}}>Your Wishlist</Text>
            </View>
          {/* </View> */}
          <View> 
              <View>
                {this.state.dataWishlist.map((data, index) => {
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
                        <View style={{marginLeft: 20}}>
                          <Text style={{marginTop: 30}}>{data.title}</Text>
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