import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AppBar from '../utils/AppBar';

const ProductList = () => {
    return (
        <View style={styles.container}>
            <AppBar screen="Shop"/>
            <View>
                
            </View>

            
            
        </View>
        
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center',
        borderRadius:10,
        paddingHorizontal:15,
    
    },

})