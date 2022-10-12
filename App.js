import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import Search from './Components/Search';
import Logo from './Components/Logo';
import Links from './Components/Links';
import Search2  from './Components/Search2';
export default function App() {
  return (
   <View style={styles.container}>
      <Search2 />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },

});
