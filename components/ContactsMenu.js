import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"

const CONTACTS = [
  {type:"starred",name:"Starred"},
  {type:"contact", name:"Ana", photo:"https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg"},
  {type:"contact", name:"Steve", photo:"https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg"},
  {type:"contact", name:"Mike", photo:"https://www.sebamed.com/fileadmin/user_upload/visuals_produktlinie_men_560x420.jpg"}
]

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      {/* contact container */}
      {CONTACTS.map((item,index)=>{
        return(
          <TouchableOpacity key={index} style={styles.row}>
          {/* //image */}
          <View style={styles.starredIcon}>
            {item.type === 'starred' ?  <AntDesign name="star" size={30} color="#efefef"/> : 
             <Image style={styles.image} source={{uri:item.photo}}/>
            }
          
          </View>
          {/* text */}
          <Text style={styles.text}>{item.name && item.name}</Text>
  
        </TouchableOpacity>
        )
      })}

    </View>
  )
}

export default ContactsMenu

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  row:{
    flexDirection:'row',
    marginTop:20,
    alignItems:'center'
  },
  starredIcon:{
    backgroundColor:"#333333",
    width: 55,
    height:55,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20
  },
  text:{
    color:"white",
    paddingLeft:15,
    fontSize:18
  },
  image:{
    height:55,
    width:55,
    borderRadius:20
  }
})