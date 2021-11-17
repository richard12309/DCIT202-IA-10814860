import React from 'react'
import { View, Text, StyleSheet, Pressable, FlatList,ScrollView, Dimensions } from 'react-native'
import AppBar from '../utils/AppBar';
import Search from '../utils/Search'
import data  from './items'
import Product from './Product';
import { AntDesign } from '@expo/vector-icons';


const ProductList = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AppBar screen="Shop" navigation={navigation} />
            <View style={styles.Search}>
            <Search/>
            </View>
            <View style ={styles.label}>
                <Text style={styles.big}>Available Products</Text>
                <Pressable style={styles.button}>
                    <Text style={{color:'grey'}}>sort by <AntDesign name="down" size={15} color="grey" /></Text>
                </Pressable>
            </View>
            <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle ={
                        {
                            flexDirection:'row',
                            flexWrap:'wrap',
                            justifyContent:'space-between',
                            margin:10,
                            
                        }
                    }
                    data ={data}
                    renderItem ={(e)=><Product key={+e.item.ID} navigation={navigation} details={e.item} /> }
                />
        </View>
    )
}

export default ProductList;

const styles = StyleSheet.create({
    container:{
        flex:1,  
    },
    Search:{
        marginTop:80
    },
    label:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignItems:'center'
    },
    big:{
        fontSize:20,
        fontWeight:'700'
    },
    button:{
        backgroundColor:'white',
        padding:7
    },
    list:{
        flexDirection:'row'
    }

})