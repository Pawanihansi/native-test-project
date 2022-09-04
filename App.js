//import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const[name,setName] =useState('Tanisha');
  const[person,setPerson]=useState({name:'vihaga',age:24});
  
  const clickHandler =()=>{
    setName('gamage');
    setPerson({name:'shani', age: 30});
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is{person.name} and her age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop:20
  }
});
