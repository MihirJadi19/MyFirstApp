import { styleSheets } from 'min-document';
import React, { useState } from 'react';
import {View,Text,TextInput,Image, StyleSheet} from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            
                <AppTextInput 
                autoCapitalize ="none"
                icon="email" 
                keyboardType ="email-address" 
                onChangeText ={text => setEmail(text)}
                textContentType ="emailAddress"
                placeholder="Email" />

                <AppTextInput 
                autoCapitalize ="none"
                autoCorrect ={false}
                icon="lock"
                textContentType ="password"
                onChangeText ={text => setPassword(text)}
                secureTextEntry
                placeholder="Password" />
            <AppButton title="Login" color="primary" onPress ={()=> console.log(email, password)} />
        </Screen>
    );
}
const styles = StyleSheet.create({
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20
    },
    container:{
        // backgroundColor: "#F2F3F4",
        // borderRadius: 25,
        // flexDirection:"row",
        // width:"100%",
        padding: 15,
        // marginVertical:10
    },
    textInput:{
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto": "Avenir"
    }
})

export default LoginScreen;