import React from 'react';
import  { ImageBackground, Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const bg = { uri: "https://wallpapercave.com/wp/wp6608507.jpg" };
//const fp = { uri: "https://i.imgur.com/7IyC3Kj.png" };

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground source={bg} style={styles.background}>
            <View style={styles.logoContainer}><Text style={styles.fpText}>FlickPick</Text>    
        </View>
        <Text style={styles.sloganText}>Pick what you watch.</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity> 
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
    },
    logoContainer: {
        position: "absolute",
        top: 110,
        alignItems: "center",
        justifyContent: "center",
        height: 100,
        width: "80%",
        borderRadius: 20,
    },
    fpText: {
        color: "#fb5b5a",
        fontSize: 50,
        fontFamily: "BebasNeue",
        shadowColor: "#000",
        shadowOffset: {width:1, height:3},
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    sloganText:{
        position: "absolute",
        top: 195,
        color: "#fff",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "BebasNeue",
        shadowOffset: {width:1, height:1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    buttonText: {
        paddingTop: 5,
        color: "#fff",
        fontSize: 21,
        fontFamily: "BebasNeue",
    },
    /*
    logo: {
        width: 342,
        height: 117,
        transform: [{ scale: 0.8 }],
    },*/
    loginButton: {
        position: "absolute",
        top: 350,
        width: "50%",
        borderRadius: 15,
        height: 40,
        backgroundColor: "#003f5c",
        alignItems: "center",
        justifyContent: "center",
        shadowOffset: {width:1, height:2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
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
})

export default WelcomeScreen;