import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  tabBarOptions,
  BottomTabBar,
} from 'react-navigation-tabs';
// import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
import {createSwitchNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import Home from './src/screens/Home';
import DetailScreen from './src/screens/DetailScreen';
import PopularBooks from './src/screens/PopularBooks';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Profile from './src/screens/Profile.js';
import Search from './src/screens/Search';
import GenreFilter from './src/screens/GenreFilter';

import ListBooks from './src/screens/ListBooks';
import History from './src/screens/History';
import AllBooks from './src/screens/AllBooks';
import DetailAllBooks from './src/screens/DetailAllBooks';
import DetailCategory from './src/screens/DetailCategory'
import SearchTab from './src/screens/Search'

const AppNavigator = createStackNavigator({

  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Library',
      headerStyle: {
        backgroundColor: '#cecece',
        screen: Home,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#000',
      },
      header: null,
    }),
  },
  // DetailScreen: {
  //   screen: DetailScreen,
  //   navigationOptions: {
  //     title: 'DetailPage',
  //     headerStyle: {
  //       backgroundColor: '#cecece',
  //     },
  //     header: null,
  //   },
  // },
  // DetailCategory: {
  //   screen: DetailCategory,
  //   navigationOptions: {
  //     title: 'DetailCategory',
  //     headerStyle: {
  //       backgroundColor: '#cecece',
  //     },
  //     header: null,
  //   },
  // },
  // PopularBooks: {
  //   screen: PopularBooks,
  // },
  Search: {
    screen: Search,
    navigationOptions: () => ({
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#fdfbfb',
      },
      header: null,
    }),
  },
  // searching: {
  //   screen: searching,
    
  // },
  PopularBooks: {
    screen: PopularBooks,
    navigationOptions: () => ({
      title: 'PopularBooks',
      headerStyle: {
        backgroundColor: '#fdfbfb',
      },
      header: null,
    }),
  },
  AllBooks: {
    screen: AllBooks,
    navigationOptions: () => ({
      title: 'AllBooks',
      headerStyle: {
        backgroundColor: '#fdfbfb',
      },
      header: null,
    }),
  },
  DetailAllBooks: {
    screen: DetailAllBooks,
    navigationOptions: () => ({
      title: 'DetailAllBooks',
      headerStyle: {
        backgroundColor: '#fdfbfb',
      },
      header: null,
    }),
  },
  ListBooks: {
    screen: ListBooks,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Icon
          type="FontAwesome"
          name="user"
          style={{color: tintColor, fontSize: 23}}
        />
      ),
    },
  },
  GenreFilter: {
    screen: GenreFilter,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="compass"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="history"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="user"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },
    SearchTab: {
      screen: SearchTab,
      navigationOptions: {
        tabBarLabel: 'SearchTab',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="FontAwesome"
            name="user"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },

  },
  {
    tabBarOptions: {
      activeTintColor: '#4a148c',
      inactiveTintColor: '#757575',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);

const auth = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
});

const pageScreen = createSwitchNavigator({
  // Splash: SplashScreen,
  Auth: {
    screen: auth,
  },
  App: {
    screen: BottomNavigator,
  },
});
export default createAppContainer(pageScreen);
