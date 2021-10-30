import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppBar from '../utils/AppBar'

const Favorite = () => {
    return (
        <View style={styles.container}>
            <AppBar screen="Favorite"/>
            <Text>Favorite</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
