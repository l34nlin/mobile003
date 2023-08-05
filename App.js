import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

const style = StyleSheet.create({
  container:{
      paddingTop:20,
  },
  text:{
      fontSize:18,
      color: #f4f,
      fontWeight:'bold'
  }
})

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <MyButton title={'visualizar'} onPressButton=
//       {Button}/>
//       <StatusBar style="auto" />

//     </View>
//   );
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
