import  React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [number, setNumber] = useState("");
  const [list, setlist] = useState([]);
  const [off, setOff] = useState(0);
  if (off === 0){
    return (
        <View style={styles.container}>
          <View style={{flex:1, justifyContent: 'center'}}>
            <Text style={{color: 'white', alignItems: 'center', fontSize: 40}}>{number}</Text>
          </View>
          <View style={{flex:3, backgroundColor: "#000", borderWidth:1, justifyContent: "center", padding: 20,      margin: 10}}>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.buttonSpecial2} onPress={() => {
                setNumber("");
                setlist([]);
              }}>
                <Text>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpecial2} onPress={() => setOff(1)}>
                <Text>OFF</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpecial2}>
                <Text>%</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpecial} onPress={()=>{
                setlist([...list, number, "/"]);
                setNumber('');
              }}>
                <Text>/</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "7")}>
                <Text>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "8")}>
                <Text>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "9")}>
                <Text>9</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpecial} onPress={()=>{
                setlist([...list, number, "X"]);
                setNumber('');
              }}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "4")}>
                <Text>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "5")}>
                <Text>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "6")}>
                <Text>6</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpecial} onPress={()=>{
                setlist([...list, number, "-"]);
                setNumber('');
              }}>
                <Text>-</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "1")}>
                <Text>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "2")}>
                <Text>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "3")}>
                <Text>3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpecial} onPress={()=>{
                setlist([...list, number, "+"]);
                setNumber('');
              }}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <TouchableOpacity style={styles.button} onPress={() => setNumber(number + "0")}>
                <Text>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonSpecial} onPress={() => {
                let total = 0;
                setlist([...list, number]);
                for(let i=0; i < list.length; i++){
                  if (list[i-1] === '+'){
                    total = total + parseInt(list[i]);
                  }else if (list[i-1] === '-'){
                    total = total - parseInt(list[i]);
                  }else if (list[i-1] === 'X'){
                    total = total * parseInt(list[i]);
                  }else if (list[i-1] === '/'){
                    total = total / parseInt(list[i]);
                  }
                  else{
                    if (list[i] !== '+' && list[i] !== '-' && list[i] !== '-' && list[i] !== '-' ){
                      total = list[i];
                    }
                  }
                }
                setNumber(total);

              }}>
                <Text>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
  }else{
    return(
        <View>
          <Text>Off</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'darkgrey',
    padding: 25,
    margin: 5
  },
  buttonSpecial: {
    borderRadius: 50,
    backgroundColor: 'yellow',
    padding: 25,
    margin: 5
  },
  buttonSpecial2: {
    borderRadius: 50,
    backgroundColor: 'grey',
    padding: 25,
    margin: 5
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
