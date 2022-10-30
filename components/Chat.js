import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Chat = ({ modalVisible, setModalVisible }) => {
  const [message, setMessage] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex:1}}>
        <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"} style={{flex:1}}>
          <ChatHeader setModalVisible={setModalVisible} />
          {/* chat messages */}

          <View style={styles.chatMessages}>

          </View>
          {/* type message */}
          <View style={styles.chatFormContainer}>
            <Text style={{ color: "white" }}> send to everyone</Text>
            <View style={styles.chatForm}>
                <TextInput
                  value={message}
                  onChangeText={(text) => setMessage(text)}
                  style={styles.textInput}
                  placeholder={"Type your message"}
                  placeholderTextColor={"gray"}
                />
      
              <TouchableOpacity
                style={{
                  ...styles.button,
                  backgroundColor: message ? "#0B71EB" : "#373838",
                }}
              >
                <FontAwesome
                  name={"send"}
                  size={18}
                  color="#efefef"
                ></FontAwesome>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  chatFormContainer: {
    height:100,
    borderColor: "#2f2f2f",
    borderTopWidth: 1,
    padding: 12,
  },
  chatMessages: {
    flex: 1,
  },
  textInput: {
    flex:1,
    height: 40,
    color: "efefef",
    borderColor: "#595859",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 12,
  },
  chatForm: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    height: 40,
    width: 40,
    marginTop: 12,
    marginLeft: 12,
    backgroundColor: "#373838",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
