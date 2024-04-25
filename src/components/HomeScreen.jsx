import React from "react";
import { View,Text, Button, Image, StyleSheet, Pressable } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default props=> {
    return(

         <View style={{
            flex:1,
        }}>
            <Text style={styles.baseText}>
            GAMEON
            </Text>
        <Image
        source={require('../imagens/homeLogo.png')}
        style={
            {
                width:430,
                height:220,
                alignItems: "center",
                justifyContent: "center",
                marginTop:200

            }
        }/> 

        <Pressable style={{marginTop:180}}>       
            <Button title="Vamos começar"
            color="#A64CC1"
            onPress={() => props.navigation.navigate('Login')}/>
        </Pressable>
        </View>
    )
}
 
const styles = StyleSheet.create({
    baseText:{
       color:"black",
       fontSize: 50,
       fontFamily: "Jacquard 24",
       fontWeight: "bold",
       textAlign: "center",
       marginTop:50
    }
});
