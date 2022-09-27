import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import image from "./image/family_chooser_tecnica_m.png"


const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    padding: 500,
  },
  text: {
    fontSize: 30,
    color: 'red',
  },

});

const App = (): JSX.Element => {
  return (
    <View style={styles.app}>
    <ImageBackground
      source={image}
      style={{
        width: '50%',
        height: '50%',
        position: 'absolute',
      }} />
        <Text style={styles.text}> Building my first website </Text>
      </View>
    
  );
}

export default App;
