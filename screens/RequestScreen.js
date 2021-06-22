import * as React from 'react';
import {
    View,
    Text
} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class RequestScreen extends React.Component{
    render(){
        return(
            <View>
                <AppHeader title="Request Screen" />
                <Text style={{fontSize:24, alignSelf:'center', marginTop:40}}>Request Screen</Text>
            </View>
        );
    }
}