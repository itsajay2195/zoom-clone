import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

const Home = () => {
  return (
    <View style={styles.container}>
        <SafeAreaView style={styles.safeAreaViewStyle}>
        <Header/>
      <SearchBar/>
      <MenuButtons/>
      <ContactsMenu/>
        </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#1c1c1c",
        paddingVertical:30,
        paddingHorizontal:15
    },
    safeAreaViewStyle:{height:'100%'}
})