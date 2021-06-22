import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    TextInput,
    Modal
} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class WelcomeScreen extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            isModalVisible:false
        }
    }
    
    userLogin=async()=>{
        this.props.navigation.navigate("AppTabNavigator")
    }

    userSignUp=async()=>{

    }

    showModal=()=>{
        return(
            <Modal
                animationType="slide"
                visible={this.state.isModalVisible}
                transparent={false}
            >
                <View style={{flex:1, backgroundColor:"white"}} >
                    <Text style={{fontSize:24, alignSelf:'center', marginTop:40}}>Sign Up here</Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=>{this.setState({isModalVisible:false})}}
                    >
                        <Text style={styles.buttonText} >Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor:"#a0e5ff"}}>
                {
                    this.showModal()
                }
                <AppHeader title="Welcome Screen" />
                <View>
                    <TextInput 
                        placeholder="abc@gmail.com"
                        style={styles.inputBox}
                        onChangeText={(text)=>{this.setState({email:text})}}
                    />
                    <TextInput 
                        placeholder="Password"
                        style={styles.inputBox}
                        secureTextEntry={true}
                        onChangeText={(text)=>{this.setState({email:text})}}
                    />
                </View>
                <View>
                    <TouchableOpacity 
                        style={[styles.buttonStyle, {marginTop:100}]}
                        onPress={()=>{this.userLogin()}}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={()=>{this.setState({isModalVisible:true})}}
                    >
                        <Text style={styles.buttonText}>Sing Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle:{
        alignSelf:'center',
        padding:10,
        backgroundColor:"#0070FF",
        marginTop:60,
        width:240,
        alignItems:'center',
        borderRadius:14,
        shadowColor:"black",
        shadowOffset:{width:0, height:8},
        shadowOpacity:0.44,
        elevation:0.40,
    },
    buttonText:{
        color:"white",
        fontSize:20,
        fontWeight:'bold'
    },
    inputBox:{
        marginTop:60,
        alignSelf:'center',
        width:280,
        borderBottomWidth:1.4,
        paddingLeft:5,
        fontSize:20
    }
})