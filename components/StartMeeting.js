import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

const StartMeeting = ({name,setName,roomId,setRoomId, joinRoom}) => {
  return (
    <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
        <TextInput placeholder='Enter Name' style={styles.textInput} value={name} onChangeText={text=> setName(text)}/>
        </View>

        <View style={styles.info}>
        <TextInput placeholder='Enter your room id' style={styles.textInput} value={roomId} onChangeText={text=> setRoomId(text)}/>
        </View>

        <View style={{alignItems:'center'}}>
        <TouchableOpacity disabled= { !roomId && !name ? true: false} style={styles.button} onPress={()=>joinRoom()}>
            <Text style={{color:'white',fontWeight:'bold'}}> Start Meeting</Text>
        </TouchableOpacity>
        </View>
    </View> 
  )
}   

export default StartMeeting

const styles = StyleSheet.create({
    startMeetingContainer:{
    },
    info:{
      width:'100%',
      height:50,
      backgroundColor:'#373538',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#484648',
      padding: 12,
      justifyContent:'center'
    },
    textInput:{
      color:'white',
      fontSize:18
    },
    button:{
      marginTop:20,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#0470DC",
      width: 350,
      borderRadius:20
    }
  
})