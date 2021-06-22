import * as React from 'react';
import {
  View,
  Text,
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import RequestScreen from './screens/RequestScreen';
import BuyMedicineScreen from './screens/BuyMedicineScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const AppTabNavigator = createBottomTabNavigator({
  RequestScreen:{screen:RequestScreen},
  BuyMedicineScreen:{screen:BuyMedicineScreen}
})

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreem:{screen:WelcomeScreen},
  AppTabNavigator:{screen:AppTabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator)
