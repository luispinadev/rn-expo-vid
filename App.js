import React from 'react'
import { TabNavigator } from 'react-navigation'

import Home from './component/Home'
import FullVideo from './component/FullVideo'

const App = TabNavigator(
  {
    Home: {
      screen: Home,
    },
    FullVideo: {
      screen: FullVideo,
    },
  },
  {
    navigationOptions: {
      tabBarVisible: false,
    },
  }
)

export default App
