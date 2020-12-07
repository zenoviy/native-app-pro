import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [clicks, setClicks] = useState(0);
  return (
    <View style={styles.container}>
      <Image 
        source={{uri:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'}} 
        style={{ width: "40%", height: "40%" }}
      />
      <Text>Open up App.js to start working on your app!!!</Text>
      <Text>Work in emulator</Text>
      <Text h1>{clicks}</Text>
      <Button 
        onPress={() => setClicks(clicks + 1)}
        title="click"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
