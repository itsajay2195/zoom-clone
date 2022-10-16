import { StyleSheet, Text, View, SafeAreaView, Alert, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import StartMeeting from '../components/StartMeeting'
import { io } from 'socket.io-client'
import { Camera } from 'expo-camera'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

let socket
const icons = [{
  id:1,
  name:"microphone",
  title:"Mute"
},{
  id:2,
  name:"video-camera",
  title:"Stop Video"
},{
  id:3,
  name:"upload",
  title:"Share Content"
},{
  id:4,
  name:"group",
  title:"Participants"
}]
const MeetingRoom = () => {
  const [name, setName] = useState('')
  const [roomId, setRoomId] = useState('')
  const [allUsers, setAllUsers] = useState([{fname: "Ajay"},{fname:"Vj"}])
  const [startCamera,setStartCamera] = useState(false);

  const _startCamera = async ()=>{
    const {status} =  await Camera.requestCameraPermissionsAsync();
    status === 'granted' ? setStartCamera(true): Alert.alert("Access denied");
  }

  const joinRoom = ()=>{
    _startCamera();
    socket.emit('join-room',{roomId:roomId, userName:name})
  }

  useEffect(() => {
    const API_URL = "http://192.168.0.102:3001"
    socket = io(`${API_URL}`);
    socket.on('connection', ()=> console.log("connected"))
    socket.on('all-users',users=>{
      // console.log('users are ',users)
      // setNames(users)
    })
    // return () => {
    //   second
    // }
  }, [])
  

  return (
    <SafeAreaView style={styles.container}>
      {startCamera? (
        <SafeAreaView style={{flex:1}}>
          <View style={styles.cameraContainer}>
            <Camera type={"front"} style={{width:allUsers.length === 0 ? '100%' : 200,height:allUsers.length === 0? 600: 200}}>
            </Camera>
              {allUsers.map(e=>(
                <View style={styles.activeUsers}>
                  <Text style={{color:'white'}}>{e.fname}</Text>
                </View>  
                ))}
  
  
          </View>

        
          <View style={styles.menu}>
            {icons.map((item,index)=>(
              <TouchableOpacity  key={`${index}-cam_menu`} style={styles.tile}>
                <FontAwesome name={item.name} size={24} color={"#efefef"}/>
                <Text style={styles.textTile}>{item.title}</Text>
            </TouchableOpacity>
            ))}

          </View>
          </SafeAreaView>) : 
      (<StartMeeting name={name} setName={setName} roomId={roomId} setRoomId={setRoomId} joinRoom={joinRoom} />)}
      
    </SafeAreaView>
  )
}

export default MeetingRoom

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#1c1c1c",
    flex:1
  },
  tile:{
    justifyContent:'center',
    alignItems:'center',
    height:50,
    marginTop:15
  },
  textTile:{color:"white",marginTop:10},
  menu:{paddingHorizontal:10,flexDirection:'row', justifyContent:'space-between', paddingBottom:20},
  cameraContainer:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  activeUsers:{
      height:200,
      width:200,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
  }

})