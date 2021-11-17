import React from 'react'
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import AppBar from '../utils/AppBar'
import Banner from '../utils/Banner'
import Category from '../utils/Category'
import Search from '../utils/Search'
import HomeItems from './HomeItems'

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container} >
            <AppBar screen="Home" navigation={navigation}/>
            <ScrollView>
            <View style={styles.searchbox}>
                <Search/>
            </View>
            <View>
                <Banner/>
            </View>
            <View>
                <Category/>
            </View>
            <View>
                <HomeItems navigation={navigation}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    searchbox:{
        marginTop:60
    }
})
