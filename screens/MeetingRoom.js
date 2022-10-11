import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const MeetingRoom = () => {
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.startMeetingContainer}>
          <View style={styles.info}>
            <TextInput placeholder='Enter Name' style={styles.textInput} value={name} onChangeText={text=> setName(text)}/>
          </View>

          <View style={styles.info}>
            <TextInput placeholder='Enter your room id' style={styles.textInput} value={roomId} onChangeText={text=> setRoomId(text)}/>
          </View>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:'white',textAlign:'center'}}> Start Meeting</Text>
            </TouchableOpacity>
          </View>
      </View> 
      
    </SafeAreaView>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#1c1c1c",
    flex:1
  },
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