  import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
    
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Todays tasks</Text>
      <View style={styles.items}></View>

    </View>
<Task text={'anas ko msg kro'} />
<Task text={'Task 2'}/>
<Task text={'anas ko msg kro'} />
<Task text={'Task 2'}/><Task text={'anas ko msg kro'} />
<Task text={'Task 2'}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,

  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,

  },
});
