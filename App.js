import * as React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import RequestScreen from './screens/RequestScreen';
import BuyMedicineScreen from './screens/BuyMedicineScreen';
import PatientDetailsScreen from './screens/PatientDetailsScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  RequestScreen:{
    screen:RequestScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  PatientDetailsScreen:{
    screen:PatientDetailsScreen,
    navigationOptions:{
      headerTitle:"Details"
    }
  }
})

const AppTabNavigator = createBottomTabNavigator({
  StackNavigator:{
    screen:AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("./components/request.png")} style={{width:30, height:30}}/>,
      tabBarLabel : " ",
    }
  },
  BuyMedicineScreen:{
    screen:BuyMedicineScreen,
    navigationOptions:{
      tabBarIcon: <Image source={require("./components/medicine.png")} style={{width:34, height:34}} />,
      tabBarLabel: " "
    }
  }
})

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreem:{screen:WelcomeScreen},
  AppTabNavigator:{screen:AppTabNavigator}
})


const AppContainer = createAppContainer(SwitchNavigator)
