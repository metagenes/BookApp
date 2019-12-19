import React, {Component} from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
const TabBarComponent = props => <BottomTabBar {...props} />;

const tabBottom = createBottomTabNavigator(
  {
    Home: {
      screen: Home,

      // navigationOptions: () => ({
      //   title: 'Library',
      //   headerStyle: {
      //     backgroundColor: '#cecece',
      //     screen: Home,
      //   },
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //     color: '#000',
      //   },
      //   header: null,
      // }),
    },
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{borderTopColor: '#605F60'}} />
    ),
  },
);

export default createAppContainer(tabBottom);
