import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppBar from '../utils/AppBar';

const ProductList = () => {
    return (
        <View style={styles.container}>
            <AppBar screen="Shop"/>
            <Text>ProductList</Text>
        </View>
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})