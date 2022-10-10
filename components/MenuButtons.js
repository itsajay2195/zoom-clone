import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"

const items = [
    {id:1,name:"video-camera",title:"New Meeting",customColor:"#FF751F"},
    {id:2,name:"plus-square",title:"Join"},
    {id:3,name:"calendar",title:"Schedule"},
    {id:4,name:"upload",title:"Share Screen"}
]
const MenuButtons = () => {
  return (
    <View style={styles.container}>
        {items.map((item)=>{
            return(
                <View key={item.id} style={styles.buttonContainer}>
                    <TouchableOpacity style={{...styles.button, backgroundColor:item.customColor ? item.customColor : '#0470DC'}}>
                        <FontAwesome name={item.name} size={23} color="#efefef"></FontAwesome>
                    </TouchableOpacity>
                    <Text style={styles.menuText}>{item.title}</Text>
                    
            </View>
            )
        })}
    </View>
  )
}

export default MenuButtons

const styles = StyleSheet.create({
    container:{
        marginTop:25,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:"#1F1F1F",
        borderBottomWidth:1
    },
    buttonContainer:{
        alignItems:'center',
        flex:1
    },
    button:{
        width:50,
        height:50,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center'
    },
    menuText:{
        color:"#858585",
        fontSize:12,
        paddingTop:10,
        fontWeight:'600'
    }
})