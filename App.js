import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "./screens/home";
import Movies from "./screens/movies";

const HomeStack = createStackNavigator ({
  Home : { screen : Home ,
    navigationOptions : {
      title: ' movie Box',
      headerTintColor : '#F0F3F4',
      headerStatusBarHeight : 25,
      headerStyle:{ backgroundColor : '#117864' , }
    }
  },

  Movies : { screen : Movies ,
    navigationOptions: {
      title: 'About Movie',
      headerTintColor : '#F0F3F4',
      headerStatusBarHeight : 25,
      headerStyle:{ backgroundColor : '#117864' , },
    }
  }
})

export default createAppContainer( HomeStack );


