import React from 'react';
import {Header} from 'react-native-elements'

const AppHeader =(props)=>{
    return(
        <Header
        centerComponent={{ text: props.title, style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
        ></Header>
    );
}

export default AppHeader;