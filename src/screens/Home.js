import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Container,
  Item,
  Input,
  Body,
  Icon,
  Title,
  Right,
  Button,
} from 'native-base';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ListBooks from './ListBooks';
// import Login from './Login';
import FooterPage from './FooterPage';
import Search from './Search';
// import Searching from './searching';
import PopularBooks from './PopularBooks';
import DetailScreen from './DetailScreen';
import DetailCategory from './DetailCategory';
import AllBooks from './AllBooks';

// import tabBottom from './tabBottom';
import {TextInput, Image} from 'react-native-gesture-handler';

class Home extends Component {
  state = {
    data: '',

    //  fullData:[]
  };

  render() {
    console.log('ini console log di home');

    return (
      <View>
        {/* <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" />
          <Icon name="ios-people" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button> */}

        <ScrollView>
          {/* <ScrollView
            // showsHorizontalScrollIndicator={false}
            // horizontal={true}
            style={{
              marginTop: -550,
              flexDirection: 'row',
              marginHorizontal: 0,
              // flexDirection: 'col',
            }}> */}
          <View>
            <Search onPress={() => this.props.navigation.navigate('Search')} />
            {/* <Button
              onPress={() => this.props.navigation.navigate('Search')}
              transparent>
              <Icon style={{color: 'black'}} name="search" />
            </Button> */}
          </View>
          <View>
          {/* <ListBooks
              onPress={() =>
                this.props.navigation.navigate('DetailCategory',{
                  detailData:data,
                })
              }
            /> */}
             <ListBooks
              changeRoute={genre =>
                this.props.navigation.navigate('GenreFilter', {genre})
              }
            />
            </View>
          {/* </ScrollView> */}
          {/* <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}> */}
          <View>
            <PopularBooks
              onPress={data =>
                this.props.navigation.navigate('DetailAllBooks', {
                  detailData: data,
                })
              }
            />
          </View>

          {/* <View>
            <FooterPage />
          </View> */}
          {/* <tabBottom /> */}

          {/* </ScrollView> */}

          {/* <Text style={styles.name}>Halo, {this.state.name}</Text> */}

          {/* <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Login', {
                itemId: 2,
                name: 'siska eee',
              })
            }>
            <Text style={{width: 70, marginTop: 10}}>Ini Button</Text>
          </TouchableOpacity>
          <Login /> */}
          {/* <ScrollView> */}
          <View>
            <AllBooks
              onPress={data =>
                this.props.navigation.navigate('DetailAllBooks', {
                  detailData: data,
                })
              }
            />
          </View>
          {/* <View>
            <tabBottom />
          </View> */}
          {/* </ScrollView> */}
        </ScrollView>
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

export default Home;
