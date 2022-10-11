import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import MeetingRoom from './screens/MeetingRoom';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen  name = "Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen  name = "Meeting" component={MeetingRoom} options={{title:'Start a meeting',headerStyle:{backgroundColor:'#1c1c1c',}, headerTintColor:"white"}}/>
        </Stack.Navigator>
      {/* <Stack.Screen />
      <Stack.Screen /> */}

    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})