import React from 'react';
import {View, Button,StyleSheet,TouchableOpacity,Text } from 'react-native';

class Links extends React.Component{
      render() {
            return (
              <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={this.onPress}>
                  <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={this.onPress}>
                  <Text>Change password</Text>
                </TouchableOpacity>
              </View>
            );
      }
}
const styles = StyleSheet.create({
      btn: {
            color: 'white',
            fontSize: 3,
            fontWeight:'bold'
            
      },
      container :{
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-around'
      }

})
export default Links;