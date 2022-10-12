import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import StartMeeting from '../components/StartMeeting'
import { io } from 'socket.io-client'

let socket
const MeetingRoom = () => {
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [users, setUSers] = useState(null)

  const joinRoom = ()=>{
    socket.emit('join-room',{roomId:roomId, userName:name})
  }

  useEffect(() => {
    const API_URL = "http://192.168.0.102:3001"
    socket = io(`${API_URL}`);
    socket.on('connection', ()=> console.log("connected"))
    socket.on('all-users',users=>{
      console.log(users)
      setUSers(users)
    })
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      <StartMeeting name={name} setName={setName} roomId={roomId} setRoomId={setRoomId} joinRoom={joinRoom} />
      
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