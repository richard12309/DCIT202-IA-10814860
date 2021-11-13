import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppBar from '../utils/AppBar'

const CartItem = () => {
    return (
        <View style={styles.container}>
            <AppBar screen="Cart" />
            <Text>CartItem</Text>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
