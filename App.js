//import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const[name,setName] =useState('Tanisha');


  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state'/>
      </View>
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
