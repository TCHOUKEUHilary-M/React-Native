import React from "react";
import FilmItem from "./FilmItem";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import film from "../Helpers/FilmsData";
class Search2 extends React.Component {
  render() {
    return (
      <View style={styles.search}>
        <TextInput style={styles.input} placeholder="Titre du film" />
        <TouchableOpacity style={styles.btn} onPress={this.onPress}>
          <Text>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={film}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: "green",
    width: "50%",
    borderRadius: 25,
    backgroundColor: "green",
    margin: 5,
    padding: 15,
    opacity: 10,
    color: "white",
    textAlign: "center",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 25,
    margin: 5,
    padding: 15,
  },
  search: {
    alignItems: "center",
  },
});
export default Search2;
