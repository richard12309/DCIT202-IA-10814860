import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons,MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
const Category = () => {
    const [current,setCurrent] = useState(1)
    return (
        <View style={styles.container}>
           <View style={styles.inner}>
            <TouchableOpacity style={styles.button}
                onPress={()=>setCurrent(1)}
            >
                <Text>
                <MaterialIcons name="category" size={24} color={current==1? "#f5565e":"grey"} />
                <Text style={{
                    color:current==1? "#f5565e":"grey"
                }} >All </Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>setCurrent(2)}
            style={styles.button}>
                <Text>
                <MaterialCommunityIcons name="shoe-formal" size={24} color={current==2? "#f5565e":"grey"}/>
                <Text style={{
                    color:current==2? "#f5565e":"grey"
                }} > Footwear </Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>setCurrent(3)}
            style={styles.button}> 
                <Text>
                <MaterialIcons name="watch" size={20} color={current==3? "#f5565e":"grey"}/>
                <Text style={{
                    color:current==3? "#f5565e":"grey"
                }} > Wrist watch </Text>
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>setCurrent(4)}
            style={styles.button}>
                <Text>
                <Entypo name="suitcase" size={20} color={current==4? "#f5565e":"grey"}/>
                <Text style={{
                    color:current==4? "#f5565e":"grey"
                }} > Bags </Text>
                </Text>
            </TouchableOpacity>
            
            </View> 
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    inner:{
        height:Dimensions.get('screen').height/10,
        marginHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    button:{
        alignItems:'center',
        backgroundColor:'white',
        padding:5,
        borderRadius:3
    }
})
