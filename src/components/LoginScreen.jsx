import React from "react";
import {SafeAreaView, View, StyleSheet, TextInput, Button, Text,Image, Pressable} from "react-native";


export default props=>{
    return(

    <SafeAreaView>

<Image
        source={require('../imagens/loginLogo.png')}
        style={
            {
                width:400,
                height:300,

            }
        }/>     
    <Text style={styless.baseText}>Login</Text> 

    <Pressable style={{borderBottomWidth:1,borderColor:"black",width:450}}>
        <TextInput
            style={styles.input}
            placeholder="Email ID"
        />
        </Pressable>

     <Pressable style={{borderBottomWidth:1,borderColor:"black",width:450}}>   
        <TextInput
            style={styles.input}
            placeholder="Password"
            
        />
        </Pressable>

    <Pressable style={{marginTop:20}}>
        <Button 
            title="Login"
            color="#A64CC1"
            onPress={() => props.navigation.navigate('Register')}/>
    </Pressable>

    <Text style={stylesss.tex}>Or, login with ... </Text>
    </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
    }
})

const styless = StyleSheet.create({
    baseText:{
       color:"black",
       fontSize: 20,
       fontFamily: "Jacquard 24",
       fontWeight: "bold",
       textAlign: "left",
       marginTop:10,
       margin:20,
    }
});

const stylesss = StyleSheet.create({
    tex:{
        margin:177,
      marginTop:40,

    }
})


