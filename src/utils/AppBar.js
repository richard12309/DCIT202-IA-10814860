import React from 'react'
import { StyleSheet, Text, SafeAreaView,View,Dimensions, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { FontAwesome } from '@expo/vector-icons';

const AppBar = ({screen}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.avatar}>
                <TouchableOpacity>
                    <Text>
                    <FontAwesome name="th-large" size={24} color="#f5565e" />
                    </Text>
                </TouchableOpacity>
                <Text>{screen}</Text>
                <Avatar 
                        rounded
                        source={require('../../assets/images/avatar.jpg')}
                    />

            </View>
        </SafeAreaView>
    )
}

export default AppBar

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:20,
        left:0,
        right:0,
        borderRadius:5,
        height:Dimensions.get('screen').height/12,
        justifyContent:'center',
        backgroundColor:'#fff',
        padding:10,
        shadowColor:"#606061",
        shadowOffset:{width:3,height:1},
        shadowOpacity:0.2,
        shadowRadius:1,
        zIndex:10
    },
    avatar:{
        paddingHorizontal:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})
