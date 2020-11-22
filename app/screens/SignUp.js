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

<<<<<<< HEAD
export default function SignUp ({ navigation }) {
    return(
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.welcomeContainer}>
                <Text style={styles.noAccText}>No Account?</Text>
                <Text style={styles.setUpText}>Let's Get You Set Up.</Text>
            </View>
            <View style={styles.userBar}>
                <Icon name="user" color="#334161" size={24}/>
                <TextInput placeholder="Username" placeholderTextColor="#334161" style={styles.textInput}/>
            </View>
            <View style={styles.pwBar}>
                <Icon name="lock" color="#334161" size={24}/>
                <TextInput placeholder="Password" placeholderTextColor="#334161" secureTextEntry={true} style={styles.textInput}/>
            </View>
            <View style={styles.pwBar2}>
                <Icon name="lock" color="#334161" size={24}/>
                <TextInput placeholder="Re-Enter Password" placeholderTextColor="#334161" secureTextEntry={true} style={styles.textInput}/>
            </View>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('WelcomeScreen')}>
                <Text style={styles.buttonText}>Sign Up</Text>
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
        top: 140,
    },
    noAccText: {
        color: "#fb5b5a",
        textAlign: "center",
        fontSize: 35,
        marginBottom: 5,
        fontFamily: "BebasNeue",
        shadowOffset: {width:1, height:2},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    setUpText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "BebasNeue",
        shadowOffset: {width:1, height:2},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    userBar: {
        alignItems: 'center',
        position: "absolute",
        top: 240,
        backgroundColor: "#465881",
        width: "70%",
        height: 40,
        flexDirection: "row",
        paddingTop: 4,
        paddingHorizontal: 9,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#003f5c",
        paddingVertical: 2,
        shadowOffset: {width:1, height:1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    pwBar: {
        alignItems: 'center',
        position: "absolute",
        top: 295,
        backgroundColor: "#465881",
        width: "70%",
        height: 40,
        flexDirection: "row",
        paddingTop: 4,
        paddingHorizontal: 9,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#003f5c",
        paddingVertical: 2,
        shadowOffset: {width:1, height:1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    pwBar2: {
        alignItems: 'center',
        position: "absolute",
        top: 350,
        backgroundColor: "#465881",
        width: "70%",
        height: 40,
        flexDirection: "row",
        paddingTop: 4,
        paddingHorizontal: 9,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: "#003f5c",
        paddingVertical: 2,
        shadowOffset: {width:1, height:1},
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    textInput: {
        fontFamily: "BebasNeue",
        fontSize: 16,
        paddingHorizontal: 7,
        color: "#fff",
    },
    signUpButton: {
        position: "absolute",
        top: 415,
        width: "50%",
        borderRadius: 15,
        height: 40,
        backgroundColor: "#fb5b5a",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: {width:1, height:2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    buttonText: {
        paddingTop: 5,
        color: "#fff",
        fontSize: 21,
        fontFamily: "BebasNeue",
    },
})
=======
export default function SignUp({ navigation }) {
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.noAccText}>No Account?</Text>
        <Text style={styles.setUpText}>Let's Get You Set Up.</Text>
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
      <View style={styles.pwBar2}>
        <Icon name="lock" color="#334161" size={24} />
        <TextInput
          placeholder="Re-Enter Password"
          placeholderTextColor="#334161"
          style={styles.textInput}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
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
    top: 140,
  },
  noAccText: {
    color: "#fb5b5a",
    textAlign: "center",
    fontSize: 35,
    marginBottom: 5,
    fontFamily: "BebasNeue",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  setUpText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "BebasNeue",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  userBar: {
    position: "absolute",
    top: 240,
    backgroundColor: "#465881",
    width: "70%",
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
    top: 295,
    backgroundColor: "#465881",
    width: "70%",
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
  pwBar2: {
    position: "absolute",
    top: 350,
    backgroundColor: "#465881",
    width: "70%",
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
  signUpButton: {
    position: "absolute",
    top: 415,
    width: "50%",
    borderRadius: 15,
    height: 40,
    backgroundColor: "#fb5b5a",
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
>>>>>>> 060d5bbd847f10be1d4de8a9516230f65c145281
