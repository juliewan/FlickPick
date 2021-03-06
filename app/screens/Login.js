import React from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

const bg = { uri: "https://i.imgur.com/YbmvQ8p.jpg" };

export default function Login({ navigation }) {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Welcome back, Bud.</Text>
      </View>
      <View style={styles.userBar}>
        <Icon name="user" color="#334161" size={24} />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#334161"
          style={styles.textInput}
        />
      </View>
      <View style={styles.pwBar}>
        <Icon name="lock" color="#334161" size={24} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#334161"
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("LookUpMovies")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeContainer: {
    position: "absolute",
    top: 155,
  },
  welcomeText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 22,
    fontFamily: "BebasNeue",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  userBar: {
    position: "absolute",
    top: 230,
    backgroundColor: "#465881",
    width: "65%",
    height: 40,
    flexDirection: "row",
    paddingTop: 4,
    paddingHorizontal: 9,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#003f5c",
    paddingVertical: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  pwBar: {
    position: "absolute",
    top: 285,
    backgroundColor: "#465881",
    width: "65%",
    height: 40,
    flexDirection: "row",
    paddingTop: 4,
    paddingHorizontal: 9,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#003f5c",
    paddingVertical: 2,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textInput: {
    fontFamily: "BebasNeue",
    fontSize: 16,
    paddingHorizontal: 7,
    color: "#fff",
  },
  loginButton: {
    position: "absolute",
    top: 350,
    width: "50%",
    borderRadius: 15,
    height: 40,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  buttonText: {
    paddingTop: 5,
    color: "#fff",
    fontSize: 21,
    fontFamily: "BebasNeue",
  },
});
