import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
	const [counter, setCounter] = useState(0);
return (
    <View style={styles.container}>
      <Text>Counter {counter}</Text>
	  <Button title = "Increase" onPress={()=> setCounter(counter + 1)}></Button>
	  <Button title = "Decrease" onPress={()=> {
		  if (counter !== 0 ) {
			setCounter(counter - 1);
		  }	  
	  }}>
	  </Button>
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
