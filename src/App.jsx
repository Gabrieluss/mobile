import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";


const Stack = createNativeStackNavigator();

export default props=> {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

