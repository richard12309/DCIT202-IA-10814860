import React from 'react'
import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.wrapper}>
            <View style={{
                width:Dimensions.get('screen').width,
                flex:1
            }}>
            <Input 
            placeholder="Search..."
            inputStyle={styles.input}
            inputContainerStyle={styles.container}
            rightIcon={()=><EvilIcons name="search" size={24} color="grey" />}
            />
            </View>
            <TouchableOpacity style={styles.filter}>
                <Text style={{textAlign:'center'}}>
                    <FontAwesome name="sliders" size={24} color="white" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    wrapper:{
        flexDirection:'row',
    },
    container:{
        shadowColor:"#ddd",
        shadowOffset:{width:3,height:3},
        shadowOpacity:1,
        shadowRadius:3,
        backgroundColor:'white',
        borderColor:'transparent',
        elevation:1,
        borderRadius:10,
        paddingHorizontal:10,
        marginLeft:-5


    },

    input:{
        fontSize:14,
        borderWidth:2,
        borderColor:'transparent',
        color:'#49494a'
    },
    filter:{
        backgroundColor:'#f5565e',
        height:48,
        padding:12,
        borderColor:'transparent',
        borderRadius:10,
        marginRight:3,   

    }
})
