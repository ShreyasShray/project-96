import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class BuyMedicineScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader title="Buy Medicine Screen" />
                <Text style={{fontSize:24, alignSelf:'center', marginTop:40}}>Buy Medicine Screen</Text>
            </View>
        );
    }
}