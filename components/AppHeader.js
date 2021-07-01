import React from 'react';
import {Header, Icon} from 'react-native-elements';

const AppHeader =(props)=>{
    return(
        <Header
        centerComponent={{ text: props.title, style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
        leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff'  onPress={() => props.navigation.toggleDrawer()}/>}
        ></Header>
    );
}

export default AppHeader;