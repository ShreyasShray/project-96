import * as React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import AppHeader from '../components/AppHeader';
import firebase from 'firebase';
import db from '../config';

export default class BuyMedicineScreen extends React.Component{

    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            medicine:'',
            first_name:'',
            last_name:'',
            contact:'',
            address:'',
            value:''
        }
    }

    orderMedicine=async()=>{
        if(this.state.medicine===''){
            return Alert.alert("Input Box Empty")
        }else{
            db.collection("orders").add({
                medicine:this.state.medicine,
                name:this.state.value + " " + this.state.first_name + " " + this.state.last_name,
                contact:this.state.contact,
                address:this.state.address,
                email_id:this.state.userId
            })
            .then(()=>{
                return Alert.alert("Order Placed")
            })
        }
    }   

    getUserData=async()=>{
        db.collection("users").where("email_id", "==", this.state.userId)
        .get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                this.setState({first_name:doc.data().first_name})
                this.setState({last_name:doc.data().last_name})
                this.setState({contact:doc.data().contact})
                this.setState({address:doc.data().address})
                this.setState({value:doc.data().value})
                console.log("Full Name : " + this.state.first_name + " " + this.state.last_name)
                console.log("Contact : " + this.state.contact)
                console.log("Address : " + this.state.address)
                console.log("Value : " + this.state.value)
                console.log("Email : " + this.state.userId)
            })
        })
    }

    componentDidMount=()=>{
        this.getUserData()
    }

    render(){
        return(
            <View>
                <AppHeader title="Order Medicine Here" />
                <View>
                    <TextInput
                        placeholder="Medicine name    pcs"
                        onChangeText={(text)=>{this.setState({medicine:text})}}
                        style={styles.inputBox}
                        multiline={true}
                    />
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={()=>{this.orderMedicine()}}
                    >
                        <Text style={styles.buttonText}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width:280,
        borderWidth:1.4,
        borderRadius:4,
        paddingLeft:4,
        fontSize:18,
        alignSelf:'center',
        marginTop:40,
        height:40
    },
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
    }
})