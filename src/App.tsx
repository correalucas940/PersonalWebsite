import React, {useState} from "react";
import {ImageBackground, StyleSheet, View, Text, Button, Alert, TouchableOpacity, Image} from 'react-native';
import image from "./image/family_chooser_tecnica_m.png";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from "@rneui/themed";


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    color: 'red',
  },
  button: {
    alignItems: "center",
    backgroundColor: "gray",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    padding: 250,
    resizeMode: 'contain'
  },

});

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        >
        <Text>Click me</Text>
        </TouchableOpacity>
        <Text style={styles.text}> Building my first website </Text>
        <Image
        style={styles.image}
        source={require('.//image/family_chooser_tecnica_m.png')}
        />
      </View>
    
  );
}

export default App;
