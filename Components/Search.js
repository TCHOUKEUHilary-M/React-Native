import React from 'react';
import { View,TextInput,Button,StyleSheet,TouchableOpacity ,Text } from 'react-native';
class Search extends React.Component{
      render() {
            return (
                  <View style={styles.search}>
                        <TextInput style={styles.input} placeholder="Email"/>
                        <TextInput style={styles.input} placeholder="Password" />
                        <TouchableOpacity style={styles.btn} onPress={this.onPress}>
                              <Text>Login</Text>
                        </TouchableOpacity>
                  </View>
            )
      }
}
const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: "yellow",
    width: "50%",
    borderRadius: 25,
    backgroundColor: "yellow",
    margin: 5,
            padding: 15,
            opacity: 10,
    color:'white'
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
export default Search;