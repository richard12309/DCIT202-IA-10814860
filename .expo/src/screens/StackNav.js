import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen'
import TabNav from './TabNav'

const Stack = createNativeStackNavigator()


const StackNav = () => {
    return (
       <Stack.Navigator>
           <Stack.Screen 
            name="Login"
            component={LoginScreen}
            options={{
                headerShown:false
            }}
           />
           <Stack.Screen 
            name="Home"
            options={{
                headerShown:false
            }}
            component={TabNav}
           />

       </Stack.Navigator>
    )
}

export default StackNav

const styles = StyleSheet.create({})
