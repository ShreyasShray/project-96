import * as React from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import {Card} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class PatientDetailsScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            patient_name:this.props.navigation.getParam("details")["name"],
            patient_problem:this.props.navigation.getParam("details")["problem"],
            patient_contact:this.props.navigation.getParam("details")["contact"],
            patient_address:this.props.navigation.getParam("details")["address"],
            userId:firebase.auth().currentUser.email
        }
    }

    render(){
        return(
            <KeyboardAvoidingView style={{flex:1, backgroundColor:"#A0E5FF"}}>
                <AppHeader title="Patient Details" />
                <ScrollView>
                    <Card>
                        <Card>
                            <Text>Name: {this.state.patient_name}</Text>
                        </Card>
                        <Card>
                            <Text>Problem: {this.state.patient_problem}</Text>
                        </Card>
                        <Card>
                            <Text>Contact: {this.state.patient_contact}</Text>
                        </Card>
                        <Card>
                            <Text>Address: {this.state.patient_address}</Text>
                        </Card>
                    </Card>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}