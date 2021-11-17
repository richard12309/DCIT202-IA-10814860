import React from 'react'
import { Alert, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import { connect } from 'react-redux'

const {width,height} = Dimensions.get('screen')
const Profile = ({cart,favorite,navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
               {/* Avatar Image */}
               <View style={styles.imageContainer}>
               <Avatar 
               source={require("../../assets/images/avatar.jpg")} 
               rounded
               size="xlarge"
               />
               </View>
               {/* Bio */}
               <View style={styles.nameSection}>
                   <Text style={styles.name}>Richard Twumasi</Text>
                   <Text style={styles.location}>Ghana/Legon</Text>
               </View>
               {/* Content */}
               <View style={styles.content}>
                    <View style={styles.inside}>
                        <Text style={styles.big}>398</Text>
                        <Text style={styles.small}>Followers</Text>
                    </View>
                    <View style={styles.inside}>
                        <Text style={styles.big}>120</Text>
                        <Text style={styles.small}>Following</Text>
                    </View>
                    <View style={styles.inside}>
                        <Text style={styles.big}>{cart.length}</Text>
                        <Text style={styles.small}>Cart</Text>
                    </View>
                    <View style={styles.inside}>
                        <Text style={styles.big}>{favorite.length}</Text>
                        <Text style={styles.small}>Favorite</Text>
                    </View>

               </View>
               <View style={styles.wrapper}>
               <Pressable 
                onPress={()=>{
                    Alert.alert('Log Out','Logged out successfully')
                    navigation.navigate('Login')
                    return;
                }}
               style={styles.button}>
                        <Text style={styles.btnText}>Log Out</Text>
                    </Pressable>
               </View>
               <Text style={{textAlign:'center',padding:10,color:'grey'}}>&copy;Designed by Vandal Richie</Text>
            </View>
        </View>
    )
}
const mapStateToProps=state=>state
const mapDispatchToProps=(dispatch)=>({})
export default connect(mapStateToProps,mapDispatchToProps)( Profile)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    inner:{
        borderRadius:20,
        width:width/1.1,
        height:height/1.3,
        backgroundColor:'white',
        shadowColor:"#ddd",
        shadowOffset:{width:4,height:4},
        shadowOpacity:1,
        shadowRadius:5
    },
    imageContainer:{
        alignItems:'center',
        padding:10
    },
    nameSection:{
        alignItems:'center'
    },
    name:{
        fontSize:20,
        letterSpacing:2,
        fontWeight:'500'
    },
    location:{
        fontSize:18,
        color:'#636363',
        opacity:0.6
    },
    content:{
        marginTop:30,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:30
    },
    inside:{
        alignItems:'center'
    },
    big:{
        fontSize:20,
        fontWeight:'600',
        // color:'#f5565e'
    },
    small:{
        fontSize:16,
        color:'black',
        opacity:0.6
    },
    wrapper:{
        alignItems:'center',
        
    },
    button:{
        backgroundColor:'#f5565e',
        padding:10,
        borderRadius:5,
        width:'80%',
        marginVertical:20
    },
    btnText:{
        color:'white',
        fontSize:16,
        textAlign:'center'
    }
   

})
