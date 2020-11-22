import React, { useState } from "react";
import axios from "axios";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

export default function LookUpMovies({ navigation }) {
  const apiurl = "http://www.omdbapi.com/?apikey=d97766ae";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
      let results = data.Search;
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.searchTitle}>Pick Your Flick.</Text>
      <View style={styles.searchBar}>
        <FontAwesome5 name="search" size={24} color="#334161" />
        <TextInput
          placeholder="Search Here"
          placeholderTextColor="#334161"
          style={styles.textInput}
          onChangeText={(text) =>
            setState((prevState) => {
              return { ...prevState, s: text };
            })
          }
          onSubmitEditing={search}
          value={state.s}
        />
      </View>
      <ScrollView style={styles.results}>
        {state.results.map((result) => (
          <TouchableOpacity
            key={result.imdbID}
            onPress={() => openPopup(result.imdbID)}
          >
            <View key={result.imdbID} style={styles.result}>
              <Text style={styles.title}>{result.Title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={false}
        visible={typeof state.selected.Title != "undefined"}
      >
        <ScrollView>
          <View style={styles.popup}>
            <Image
              source={{ uri: state.selected.Poster }}
              style={{
                width: 350,
                height: 525,
              }}
              resizeMode="cover"
            />
            <Text style={styles.plotText}>{state.selected.Plot}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() =>
                setState((prevState) => {
                  return { ...prevState, selected: {} };
                })
              }
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 90,
  },
  searchTitle: {
    marginBottom: 15,
    color: "#fb5b5a",
    textAlign: "center",
    fontSize: 35,
    fontFamily: "BebasNeue",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  searchBar: {
    alignItems: "center",
    position: "absolute",
    top: 145,
    backgroundColor: "#465881",
    width: "75%",
    height: 40,
    flexDirection: "row",
    paddingTop: 4,
    paddingHorizontal: 9,
    borderRadius: 15,
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
  title: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "BebasNeue",
    textAlign: "center",
  },
  results: {
    flex: 1,
    marginTop: 70,
  },
  result: {
    flex: 1,
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  popup: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    paddingTop: 90,
    paddingBottom: 90,
    paddingHorizontal: 10,
  },
  plotText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "left",
    fontFamily: "BebasNeue",
    marginTop: 15,
    marginBottom: 15,
  },
  closeButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    borderRadius: 15,
    height: 40,
    backgroundColor: "#fb5b5a",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  closeText: {
    paddingTop: 5,
    color: "#fff",
    fontSize: 21,
    fontFamily: "BebasNeue",
  },
});
