import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Container } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DetailCategory from './DetailCategory';
// import {ScrollView} from 'react-native-gesture-handler';

// const ListBooks = props => {
//   return (
//     <View>
//       <ScrollView
//         showsHorizontalScrollIndicator={false}
//         horizontal={true}
//         style={{
//           marginLeft: 10,
//           marginTop: -550,
//           flexDirection: 'row',
//           marginHorizontal: 10,
//         }}>
//         <Container style={{padding: 10}}>
//           <View>
//             <Image
//               source={require('../../assets/fantasy.jpg')}
//               style={{width: 190, height: 120, borderRadius: 20}}
//             />
//             <Text
//               style={{
//                 justifyContent: 'center',
//                 alignContent: 'space-between',
//                 marginLeft: 15,
//                 marginTop: -50,
//                 fontSize: 30,
//                 fontWeight: 'bold',
//                 color: 'white',
//               }}>
//               Fantasy
//             </Text>
//           </View>
//         </Container>
//         <Container style={{padding: 10}}>
//           <View>
//             <Image
//               source={require('../../assets/fabel.jpg')}
//               style={{width: 190, height: 120, borderRadius: 20}}
//             />
//             <Text
//               style={{
//                 justifyContent: 'center',
//                 alignContent: 'space-between',
//                 marginLeft: 15,
//                 marginTop: -50,
//                 fontSize: 30,
//                 fontWeight: 'bold',
//                 color: 'white',
//               }}>
//               Fabel
//             </Text>
//           </View>
//         </Container>
//         <Container style={{padding: 10}}>
//           <View>
//             <Image
//               source={require('../../assets/horror.png')}
//               style={{width: 190, height: 120, borderRadius: 20}}
//             />
//             <Text
//               style={{
//                 justifyContent: 'center',
//                 alignContent: 'space-between',
//                 marginLeft: 15,
//                 marginTop: -50,
//                 fontSize: 30,
//                 fontWeight: 'bold',
//                 color: 'white',
//               }}>
//               Horror
//             </Text>
//           </View>
//         </Container>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   forcontainer: {
//     width: 200,
//     height: 200,
//     marginTop: -20,
//     flexDirection: 'row',
//     // backgroundColor: '#cecece',
//     // elevation: 5,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 10,
//   },
//   haloText: {
//     fontSize: 20,
//   },
// });
// export default ListBooks;

class ListBooks extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  render() {
    // const {navigate} = this.props.navigation;
    return (
      <View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            marginLeft: 10,
            marginTop: -550,
            flexDirection: 'row',
            marginHorizontal: 10,
          }}>
          {/* <Container style={{ padding: 10 }}> */}
            <View style={{ padding: 10 } } onPress={() => console.log(`onpress`)} >
              <TouchableOpacity onPress={() => console.log(`onpress`)}>
                <Image
                  source={require('../../assets/fantasy.jpg')}
                  style={{ width: 190, height: 120, borderRadius: 20 }}
                />
                <Text
                  style={{
                    justifyContent: 'center',
                    alignContent: 'space-between',
                    marginLeft: 15,
                    marginTop: -50,
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Fantasy
                    </Text>
              </TouchableOpacity>
            </View>
          {/* </Container> */}
          <Container style={{ padding: 10 }}>
            <View>
              <Image
                source={require('../../assets/fabel.jpg')}
                style={{ width: 190, height: 120, borderRadius: 20 }}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  alignContent: 'space-between',
                  marginLeft: 15,
                  marginTop: -50,
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Fabel
                    </Text>
            </View>
          </Container>
          <Container style={{ padding: 10 }}>
            <View>
              <Image
                source={require('../../assets/horror.png')}
                style={{ width: 190, height: 120, borderRadius: 20 }}
              />
              <Text
                style={{
                  justifyContent: 'center',
                  alignContent: 'space-between',
                  marginLeft: 15,
                  marginTop: -50,
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Horror
                    </Text>
            </View>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  forcontainer: {
    width: 200,
    height: 200,
    marginTop: -20,
    flexDirection: 'row',
    // backgroundColor: '#cecece',
    // elevation: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  haloText: {
    fontSize: 20,
  },
});
export default ListBooks;