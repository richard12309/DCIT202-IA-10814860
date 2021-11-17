import React, { useEffect, useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign,FontAwesome } from '@expo/vector-icons';
import { Image,Rating } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { ADD_TO_CART,ADD_TO_FAVORITE } from '../Redux/actions';

const Product = ({navigation,details,addToCart,addToFavorite,cart}) => {
    const [selected,setSelected]=useState(false)

    useEffect(()=>{

    },[cart])
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Pressable 
                    onPress={()=>{    
                        !selected && addToFavorite(details)
                            setSelected(!selected)
                            return;
                    }}
                >
                    <Text><AntDesign name={!selected?"hearto":"heart"} size={24} color={selected?"red":"#505152"} /> </Text>
                </Pressable>
            </View>
            <View style={styles.imageContainer}>
                <Pressable
                        onPress={()=>navigation.navigate('Item',{
                        name:details.name,
                        price:details.price,
                        rating:details.rating,
                        description:details.description,
                        image:details.image
                                                    
                    })}
                >
                <Image
                    placeholderStyle={{backgroundColor:'transparent'}}
                    PlaceholderContent={<ActivityIndicator/>}
                    source={details.image}
                    resizeMode="contain"
                    style={styles.image}
                />
                </Pressable>
            </View>
            <View style={styles.nameContainer}>
                <View>
                <Text style={styles.name}>{details.name}</Text>
                <Text style={styles.price}>{details.price}</Text>
                <View style={styles.rating}>
                <Rating 
                    ratingCount ={details.rating}
                            count ={5}
                            imageSize={12}
                        />
                </View>
                </View>
                <TouchableOpacity style={styles.button}
                    onPress={()=>{
                        addToCart(details)
                        console.log(cart.length)
                    }}
                >
                    <Text style={{textAlign:'center'}}>
                        <FontAwesome  name="plus" size={15} color="white"/>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const mapStateToProps=state=> state
const mapDispatchToProps =(dispatch)=>{
    return{
    addToCart: item=> dispatch({type:ADD_TO_CART,payload:item}),
    addToFavorite:item=>dispatch({type:ADD_TO_FAVORITE,payload:item})
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Product)

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('screen').width/2.2,
        backgroundColor:'white',
        height:230,
        marginBottom:30,
        borderRadius:10,
        padding:10
    },
    icon:{
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    imageContainer:{
        alignItems:'center'
    },
    image:{
        width:120,
        height:120
    },
    nameContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    rating:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    name:{
        fontSize:20,
        color:'#525151'
    },
    price:{
        fontSize:20,
        fontWeight:'700'
    },
    button:{
        backgroundColor:'#f5565e',
        padding:10,
        borderRadius:45
    }
})
