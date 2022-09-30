import React, {useState} from "react";
import  {Pressable, StyleSheet, View, Text, Image} from 'react-native';
import Faq from "react-faq-component";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 30,
    color: 'white',
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
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    backgroundColor: 'grey'
  }
});

const config = {
  animate: true,
  arrowIcon: "↓",
  tabFocus: true,
}
const App = (): JSX.Element => {
  const [timesPressed, setTimesPressed] = useState(0)

  const style = {
    bgColor: 'black',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    rowContentColor: 'blue',
    arrowColor: "green",
    titleTextSize: '32px',
    rowContentPaddingLeft: '10px',
    rowContentPaddingBottom: "10px",
  };

  let textLog = '';
  if (timesPressed > 0 && timesPressed < 101) {
    textLog = timesPressed + ' times the button was clicked';
  } else if (timesPressed > 100) {
    textLog = 'You really need some help to have clicked more than 100 times'
  }

  const data = {
    title: "FAQ",
    rows: [
        {
            title: "Why did I create this site.",
            content: `I created this website to practice my programming and just mess around and add whatever I think is interesting.`,
        },
        {
            title: "What do I like to do.",
            content:
                "I like to play video games, read books, watch anime and socialize with my friends. I also like to do HTB (Hack The Box) and work on my website whenever I am free.",
        },
        {
            title: "Favorite video game.",
            content: `My favorite video game is BDO (Black Desert Online). As to why it is my favorite, I can't answer because I don't even know that answer myself. `,
        },
    ],
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
          ? 'rgb(0, 0, 0)'
          : 'black'
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
          <View style={{ flexDirection: 'row',  alignContent: "center", alignItems: "center", justifyContent: "center", }}>
        <Image source={require('.//image/family_chooser_tecnica_m.png')}style={{width: "35%", height: 350}} />
        <Image source={require('.//image/Choncc.png')}style={{width: "20%", height: 520}} />
          </View>
          <div>
            <Faq
              data={data}
              styles={style}
              config={config}
              />
          </div>
      </View>
    
  );
};

export default App;
