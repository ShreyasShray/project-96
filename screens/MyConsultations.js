import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class MyConsultations extends React.Component{

    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            allPatients:[],
            MyRequests:[],
            value:""
        },
        this.requestRef=null,
        this.myRequestRef=null
    }

    getUserData=()=>{
        db.collection("users").where("email_id", "==", this.state.userId)
        .get()
        .then((snapshot)=>{
            snapshot.forEach((doc)=>{
                this.setState({value:doc.data().value})
                console.log(this.state.value)
            })
        })
    }

    getMyRequests=async()=>{
        this.myRequestRef = db.collection("requests").where("email_id", "==", this.state.userId)
        .onSnapshot((snapshot)=>{
            var requests = snapshot.docs.map((doc)=>{return doc.data()})
            this.setState({MyRequests:requests})
            console.log(this.state.MyRequests)
        })
    }

    getMyPatients=async()=>{
        this.requestRef = db.collection("accepted_request").where("doctor_id", "==", this.state.userId)
        .onSnapshot((snapshot)=>{
            var patients = snapshot.docs.map((doc)=>{return doc.data()})
            console.log(patients)
            this.setState({allPatients:patients})
        })
    }

    componentDidMount=()=>{
        this.getMyPatients()
        this.getUserData()
        this.getMyRequests()
    }

    componentWillUnmount=()=>{
        this.requestRef()
        this.myRequestRef()
    }

    keyExtractor1=(item, index)=> index.toString()

    renderItem1=({item, i})=>{
        return(
            <ListItem
                key={i}
                title={item.patient_name}
                subtitle={item.patient_problem}
                titleStyle={{ color: "black", fontWeight: "bold" }}
                rightElement={
                    <Text>Contact of Patient : {item.patient_contact}</Text>
                }
                bottomDivider
            ></ListItem>
        );
    }

    keyExtractor=(item, index)=> index.toString()

    renderItem=({item, i})=>{
        return(
            <ListItem
            key={i}
            title={item.problem}
            subtitle={item.status}
            titleStyle={{ color: "black", fontWeight: "bold" }}
            bottomDivider
            ></ListItem>
        );
    }

    render(){
        if(this.state.value==="doctor"){
            return(
                <ScrollView style={{flex:1, backgroundColor:"#A0E5FF"}}>
                    <AppHeader title="My Patients" navigation={this.props.navigation}/> 
                    {
                        this.state.allPatients.length===0?(
                            <View>
                                <Text style={{marginTop:200, textAlign:'center', fontSize:20}}>No Patients</Text>
                            </View>
                        ):(
                            <FlatList
                                keyExtractor={this.keyExtractor1}
                                data={this.state.allPatients}
                                renderItem={this.renderItem1}
                            ></FlatList>
                        )
                    }
                </ScrollView>
            );
        }else if(this.state.value==="patient"){
            return(
                <ScrollView style={{flex:1, backgroundColor:"#A0E5FF"}}>
                    <AppHeader title="My Requests" navigation={this.props.navigation} />
                    {
                        this.state.MyRequests.length===0?(
                            <View>
                                <Text style={{marginTop:200, textAlign:'center', fontSize:20}}>No Requests</Text>
                            </View>
                        ):(
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.MyRequests}
                                renderItem={this.renderItem}
                            ></FlatList>
                        )
                    }
                </ScrollView>
            );
        }else{
            return(
                <View style={{flex:1, backgroundColor:"#A0E5FF"}}>
                    <Text style={{marginTop:200, textAlign:'center', fontSize:20}}>Loading...</Text>
                </View>
            );
        }
    }
}