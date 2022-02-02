import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{height:'100%', backgroundColor:'#fff', padding:0.5,justifyContent:"center"}}>
      <View style={{justifyContent:'center',backgroundColor:'grey', flex:1}}>
        <Text style={{textAlign:"center", fontSize:26, fontWeight:"bold"}}>Calculator</Text>
      </View>
      <View style={styles.CalculatorRows}>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>9</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CalculatorRows}>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>6</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CalculatorRows}>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>3</Text>
        </TouchableOpacity>
      </View><View style={styles.CalculatorRows}>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.CalculatorButton}>
          <Text style={styles.CalculatorButtonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  CalculatorRows:{flex:1,  flexDirection:'row'},
  CalculatorButton:{ justifyContent:"center",backgroundColor:'grey',height: '100%',borderColor:'#000', borderWidth:1, flex:1},
  CalculatorButtonText:{textAlign:'center', fontSize:32, fontWeight:"bold"}

});

