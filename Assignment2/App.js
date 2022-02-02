import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
    const [menu, setMenu] = useState(0);
    const [score, setScore] = useState(0);
    const [guess, setGuess] = useState(0);
    const [rand, setRand] = useState();
    const [result, setResult] = useState("");
    const [hint, setHint] = useState("");
    if (menu === 0){
    return (
      <View style={styles.background}>
          <View style={styles.container}>
              <Text style={styles.mainText}>Welcome to Guess The Number Game</Text>
              <TouchableOpacity style={styles.mainButtonText} onPress={() => {
                  setRand(Math.floor(Math.random() * 10));
                  setMenu(1);
              }} >
                  <Text style={styles.mainText}>Start Game</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
    }else if (menu === 1){
    return (
      <View style={styles.background}>
          <View style={styles.container}>
              <Text style={styles.mainText}>Score: {score}</Text>
              <Text style={styles.mainText}>Current Guess: {guess}</Text>
              <View style={styles.numpadView}>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(7)}>
                      <Text>7</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(8)}>
                      <Text>8</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(9)}>
                      <Text>9</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.numpadView}>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(4)}>
                      <Text>4</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(5)}>
                      <Text>5</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(6)}>
                      <Text>6</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.numpadView}>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(1)}>
                      <Text>1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(2)}>
                      <Text>2</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.numpadTouchableOpacity} onPress={() => setGuess(3)}>
                      <Text>3</Text>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.gameButton} onPress={() => {
                  if (rand === guess){
                      setScore(score + 1);
                      setResult("You Guessed it Right!!!");
                  }
                  else {
                      setScore( score - 1);
                      setResult("Sorry Your Guess Was Wrong");
                  }
                  setMenu(3);
              }} >
                  <Text style={styles.gameButtonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.gameButton} onPress={() => {
                    if (guess === 0){
                        setHint("");
                    }
                    else if (guess === rand){
                        setHint('DONT MOVE!!!');
                    }else if(guess <= rand){
                        setHint('Go High Boi!!!');
                    }else {
                        setHint('Go Low Boi!!!');
                    }
              }} >
                  <Text style={styles.gameButtonText}>Hint</Text>
              </TouchableOpacity>
              <Text style={styles.mainText}>{hint}</Text>
          </View>
      </View>
    );
    }else if (menu === 3){
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.mainText}>{result}</Text>
                    <Text style={styles.mainText}>Total Score is: {score}</Text>
                    <TouchableOpacity style={styles.gameButton} onPress={() =>{
                        setRand(Math.floor(Math.random() * 10));
                        setGuess(0);
                        setHint("");
                        setMenu(1);
                    }}>
                        <Text style={styles.mainText}>Next Round</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.gameButton} onPress={() =>{
                        setMenu(0);
                        setHint("");
                        setGuess(0);
                        setScore(0);
                    }}>
                        <Text style={styles.mainText}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#000',
    },
    container: {
        margin:"7%",
        padding:"10%",
        borderRadius: 25,
        height:"100%",
        backgroundColor: 'rgba(115,110,110,0.83)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'rgba(255,255,255,0.79)',
        margin:10
    },
    mainButtonText:{
        padding:15,
        width:"90%",
        borderRadius:25,
        backgroundColor:'#212121'
    },
    gameButton:{
        marginTop:10,
        padding:5,
        width:"100%",
        borderRadius:25,
        backgroundColor:'#212121'
    },
    gameButtonText:{
        fontSize: 18,
        textAlign: 'center',
        color: 'rgba(255,255,255,0.79)',
    },
    numpadView:{
        flexDirection:'row'
    },
    numpadTouchableOpacity:{
        backgroundColor:"rgba(33,33,33,0.9)",
        margin:5,
        borderWidth:1,
        borderRadius:25,
        padding:15,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
