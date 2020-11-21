import React, { useState } from 'react'
import axios from 'axios'
import Icon, { FontAwesome5 } from '@expo/vector-icons'; 
import  { Text, TextInput, ScrollView, View, StyleSheet, Image, } from "react-native";

export default function LookUpMovies ({navigation}) {
    const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=d97766ae";

    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {},
    });

    const search = () => {
        axios(apiurl + "&s=" + state.s).then(({ data }) => {
            let results = data.Search
            setState(prevState => {
                return{...prevState, results:results}
            })
        })
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.searchTitle}>Pick Your Flick.</Text>
            <View style={styles.searchBar}>
                <FontAwesome5 name="search" size={24} color="#334161" />
                <TextInput placeholder="Search Here" placeholderTextColor="#334161" style={styles.textInput}
                    onChangeText={text => setState(prevState =>{
                        return {...prevState, s:text}
                    })}
                    onSubmitEditing={search}
                    value={state.s}
                />
            </View>
            <ScrollView style={styles.results}>
                {state.results.map(result => (
                    <View key={result.imdbID} style={styles.result}>
                        <Image
                         source={{uri: result.Poster}}
                         style={{
                             width: 350,
                             height: 525,
                         }}
                         resizeMode="cover"
                        />
                        <Text style={styles.title}>{result.Title}</Text>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 90,
        paddingHorizontal: 10,
    },
    searchTitle: {
        marginBottom: 15,
        color: "#fb5b5a",
        textAlign: "center",
        fontSize: 35,
        fontFamily: "BebasNeue",
        shadowOffset: {width:1, height:2},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    searchBar: {
        position: "absolute",
        top: 145,
        backgroundColor: "#465881",
        width: "80%",
        height: 40,
        flexDirection: "row",
        paddingTop: 4,
        paddingHorizontal: 9,
        borderRadius: 15,
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
    title: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "BebasNeue",
        textAlign: "center",
        marginTop: 10,
    },
    results: {
        flex: 1,
        marginTop: 70,
    },
    result: {
        flex: 1,
        width: "100%",
        marginBottom: 40,
    },
})