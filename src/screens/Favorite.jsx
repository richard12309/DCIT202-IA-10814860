import React, { useEffect } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View,ActivityIndicator, Dimensions, Pressable } from 'react-native'
import { Image } from 'react-native-elements'
import { connect } from 'react-redux'
import AppBar from '../utils/AppBar'
import {FontAwesome} from '@expo/vector-icons'
import {  REMOVE_FROM_FAVORITE } from '../Redux/actions'

const {width,height} = Dimensions.get('screen')
const Favorite = ({favorite,updateFavorite,navigation}) => {
    useEffect(()=>{},[favorite])

    const deleteItem=e=>{
        const filter =favorite.filter(a=> a !== e.item );
        updateFavorite(filter)
    }
    return (
        <View style={styles.container}>
            <AppBar screen="Favorite" navigation={navigation}/>
            <View></View>
            <View style={{marginTop:70,marginBottom:50}}>
                <FlatList 
            
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={favorite} renderItem={(e,i)=>(
                    <View style={{
                        marginBottom:10,
                        width,
                        paddingHorizontal:20,
                        paddingVertical:10,
                        backgroundColor:'white',
                        borderRadius:10
                        
                        }} key={e.item.ID}>
                        <View style={styles.itemContainer}>
                                <Image
                                        placeholderStyle={{backgroundColor:'transparent'}}
                                        PlaceholderContent={<ActivityIndicator/>}
                                        source={e.item.image}
                                        resizeMode="contain"
                                        style={styles.image}
                                />
                                <View style={styles.itemDetails}>
                                    <Text style={styles.itemName}>{e.item.name}</Text>
                                    <Text style={styles.price}>{e.item.price}</Text>
                                </View>
                                <View style={styles.button}>
                                    <Pressable style={styles.button}
                                        onPress={()=>{
                                            deleteItem(e)
                                        }}
                                    >
                                        <Text>
                                            <FontAwesome name="trash" color="red" size={20}/>
                                        </Text>
                                    </Pressable>
                                </View>
                        </View>
                        
                    </View>
                )} />
            </View>
        </View>
    )
}

const mapStateToProps=state=>state
const mapDispatchToProps=(dispatch)=>({
    updateFavorite:item=>dispatch({type:REMOVE_FROM_FAVORITE,payload:item})
})
export default connect(mapStateToProps,mapDispatchToProps)( Favorite)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:70,
        height:70
    },
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    itemDetails:{
        flex:1,
        marginLeft:20,
        justifyContent:'center'
    },
    itemName:{
        fontSize:16,
        fontWeight:'500'
    },
    price:{
        fontSize:17,
        fontWeight:'700'
    },
    button:{
        backgroundColor:'white',
        padding:5,
        borderRadius:2,
        flex:0.2

    }
})
