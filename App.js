//import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button, ScrollView } from 'react-native';

export default function App() {
  const[name,setName] =useState('Tanisha');
  const[person,setPerson]=useState({name:'vihaga',age:24});
  
  const clickHandler =()=>{
    setName('gamage');
    setPerson({name:'shani', age: 30});
  }


  const[people,setPeople]=useState([
    {season:'summer', key:'1'},
    {season:'winter', key:'2'},
    {season:'autumn', key:'3'},
    {season:'spring', key:'4'}
  ])
  return (
    <View style={styles.container}>
      
      <Text>My name is {name}</Text>
      <Text>His name is{person.name} and her age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler}/>
      </View>
      
      
      <ScrollView>
        {people.map(item =>(
            <View key={item.key}>
              <Text style={styles.item}>{item.season}</Text>
              </View>
          ))}
        
      </ScrollView>

      
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
