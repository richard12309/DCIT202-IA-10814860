import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HomeItems = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'700'
                    }}>Popular</Text>
                <TouchableOpacity>
                    <Text style={{color:'grey'}}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
            <View style={styles.column1}>
                    <View style={styles.item}>
                        <TouchableOpacity>
                        <Text style={styles.new}>New</Text>
                        <View style={styles.imageWrapper}>
                            <Image 
                                source={require("../../assets/images/n1.png")}
                                resizeMode="contain"
                                style={styles.image}
                            />
                            <Text style={styles.label}>
                                Nike shoes
                            </Text>
                            <Text style={styles.label}>
                                $12.00
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.watchWrapper}>
                        <TouchableOpacity>
                        <View style={styles.watcWrapper}>
                            <View style={styles.watchContainer}>
                            <Image 
                                source={require("../../assets/images/watch.png")}
                                resizeMode="contain"
                                style={styles.watch}
                            />
                            </View>
                            <Text style={styles.label}>
                                Wrist watch
                            </Text>
                            <Text style={styles.label}>
                                $120.00
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    
               
                    <View style={styles.bagcontainer1}>
                    <TouchableOpacity>
                    <View style={styles.bagWrapper}>
                        <Image 
                            source={require("../../assets/images/red.png")}
                            resizeMode="contain"
                            style={styles.bag1}
                         />

                    </View>
                    <View style={{
                        paddingTop:15
                    }}>
                        <Text style={styles.label}>
                            Gucci Bag
                        </Text>
                        <Text style={styles.label}>
                            $150.00
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View> 
            <View style={styles.column2}>
                <View style={styles.bagcontainer}>
                    <TouchableOpacity>
                    <View style={styles.bagWrapper}>
                                <Image 
                                    source={require("../../assets/images/bagpack.png")}
                                    resizeMode="contain"
                                    style={styles.bag}
                                />

                    </View>
                    <View style={{
                        paddingTop:15
                    }}>
                        <Text style={styles.label}>
                            Backpack
                        </Text>
                        <Text style={styles.label}>
                            $15.00
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            
            <View style={styles.n2}>

                <Text style={styles.new}>New</Text>
            <View >
                <TouchableOpacity>
                <View style={styles.bagWrapper}>
                    <Image 
                        source={require("../../assets/images/n2.png")}
                        resizeMode="contain"
                        style={styles.n2Image}
                    />

                </View>
                 <View style={{
                    paddingTop:15
                }}>
                    <Text style={styles.label}>
                        Puma Shoes
                    </Text>
                    <Text style={styles.label}>
                        $15.00
                    </Text>
            </View>
            </TouchableOpacity>
        </View>
                </View>

                <View style={styles.item6}>
                    <TouchableOpacity>
                        <View style={styles.imageWrapper}>
                            <Image 
                                source={require("../../assets/images/swatch.png")}
                                resizeMode="contain"
                                style={styles.swatch}
                            />
                            <Text style={styles.label}>
                                Smart Watch
                            </Text>
                            <Text style={styles.label}>
                                $50.00
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </View>

            </View>
            </View>
        </View>
    )
}

export default HomeItems

const styles = StyleSheet.create({
    text:{
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    row:{
        marginHorizontal:10,
        height:Dimensions.get('screen').height,
        width:Dimensions.get('screen').width-10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    column1:{
        marginTop:10,
        width:Dimensions.get('screen').width/2.1,
    },
    column2:{
        marginTop:10,
        width:Dimensions.get('screen').width/2.1

    },
    item:{
        width:'95%',
        backgroundColor:'silver',
        height:200,
        borderRadius:10,
        marginBottom:10
    },
    watcWrapper:{
        width:'95%',
        backgroundColor:'#e8d776',
        height:200,
        borderRadius:10,
        marginBottom:10
    },
    item6:{
        width:'95%',
        backgroundColor:'#645ae8',
        justifyContent:'center',
        alignItems:'center',
        height:170,
        borderRadius:10,
        marginBottom:10,paddingBottom:10
    },
    bagcontainer:{
        width:'95%',
        backgroundColor:'#8ad9ed',
        height:230,
        borderRadius:10,
        marginBottom:10


    },
    bagcontainer1:{
        width:'95%',
        backgroundColor:'#f0a5ae',
        height:230,
        borderRadius:10,
        marginBottom:10


    },
    new:{
        color:'black',
        padding:5,
        textAlign:'center',
        backgroundColor:'white',
        width:50,
        margin:10,
        borderRadius:10
    },
    imageWrapper:{
        // justifyContent:'center',
        // alignItems:'center'
    },
    image:{
        width:150,
        height:150,
        marginTop:-50
    },
    swatch:{
        width:150,
        height:150,
        marginTop:-10,
    },
    watch:{
        width:120,
        height:120,
        marginTop:10
    },
    label:{
        fontSize:17,
        textAlign:'left',
        fontWeight:'500',
        paddingLeft:10
     },
     bag:{
        width:150,
        height:150,
     },
     bag1:{
        width:150,
        height:150,
        marginTop:10
     },
     n2Image:{
        width:150,
        height:150,
        marginTop:-30
     },
     bagWrapper:{
         justifyContent:'center',
         alignItems:'center'
     },
     watchContainer:{
         justifyContent:'center',
         alignItems:'center',
         marginBottom:15
     },
     n2:{
        width:'95%',
         backgroundColor:'#fff',
         height:230,
         borderRadius:10,
         marginBottom:10
     }



})
