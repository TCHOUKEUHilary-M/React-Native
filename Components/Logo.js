import React from 'react';
import { View, Image,Text,StyleSheet } from 'react-native';
import  '../assets/caysti.png'

class Logo extends React.Component{
      render() {
            return(
            <View style={styles.logo}>
            <Image style={styles.image} source={require('../assets/caysti.png')}/>
            <Text style={styles.text}>Caysti</Text>
                  </View>
                  )
      }
}
const styles = StyleSheet.create({
      image: {
            width: 150,
            heigh: 50,

  },
  text: {
        color: 'red',
        fontSize: 30,
        alignSelf: 'center',
      },
  logo: {
        alignItems: 'center',
    marginBottom:25     
  }
});
export default Logo;