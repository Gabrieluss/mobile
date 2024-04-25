import React from "react";
import { View,Text, Image, TextInput, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props=> {
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }}>


       
        
        <Image
        source={require('../imagens/registroLogo.png')}
        style={
            {
                width:350,
                height:300,
            }
        }/>   

    <Text style={styles.baseText}>REGISTER!</Text>  

    <Pressable style={{borderBottomWidth:1,borderColor:"black",width:400 }}>
        <TextInput
            style={style1.input}
            placeholder="Nome Completo"
        />
    </Pressable>

    <Pressable style={{borderBottomWidth:1,borderColor:"black",width:400}}>  
        <TextInput
            style={style1.input}
            placeholder="Email ID"
        />
    </Pressable>

    <Pressable style={{borderBottomWidth:1,borderColor:"black",width:400}}>    
        <TextInput
            style={style1.input}
            placeholder="Password"
            
        />
    </Pressable>

    <Pressable style={{borderBottomWidth:1,borderColor:"black",width:400}}>    
        <TextInput
            style={style1.input}
            placeholder="Confirm Password"
        />
    </Pressable>

    <Pressable style={{borderBottomWidth:1,borderColor:"black",width:400}}>    
        <TextInput
            style={style1.input}
            placeholder="Date of Birth"
            
        />
    </Pressable>    

           
        </View>
    )
}
const style1 = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
    }
})

const styles = StyleSheet.create({
    baseText:{
       color:"black",
       fontSize: 25,
       fontFamily: "Jacquard 24",
       fontWeight: "bold",
       margin:10,
       textAlign: "left"
    }
});

