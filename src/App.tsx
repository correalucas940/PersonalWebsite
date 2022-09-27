import React, {useState} from "react";
import  {Pressable, StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    color: 'black',
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
    padding: 250,
    resizeMode: 'contain'
  },
  carImage: {
    flex: 1,
    justifyContent: "center",
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

const App = (): JSX.Element => {
  const [timesPressed, setTimesPressed] = useState(0)

  let textLog = '';
  if (timesPressed > 0 && timesPressed < 101) {
    textLog = timesPressed + ' times the button was clicked';
  } else if (timesPressed > 100) {
    textLog = 'You really need some help to have clicked more than 100 times'
  }
  return (
    
    <View style={styles.container}>
        <Pressable
          onPress={() => {
            setTimesPressed((current) => current + 1);
          }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
          ? 'rgb(255, 255, 255)'
          : 'white'
        },
      styles.wrapperCustom
      ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
        <Text style={styles.text}> Building my first website </Text>
        <Image
        style={styles.image}
        source={require('.//image/family_chooser_tecnica_m.png')}
        />
      </View>
    
  );
};

export default App;
