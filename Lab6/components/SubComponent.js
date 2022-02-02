import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainComponent from './MainComponent';

class Test{
    constructor(){
        this.name = "I am a Object"
    }
}
class SubComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            variable : "I am A Variable",
            objecttest : new Test()
        }

    }
    render(){
        return(
            <View>
            <MainComponent title = "I am a string"
            variable = {this.state.variable} 
            function = {() => {return "I am a function"}}
            object = {this.state.objecttest.name}></MainComponent>
            <Text style={styles.baseText}>I am Sub Component</Text>
            </View>
        );
    }
    Iamafunction = () => {return "I am a function"};
   
}
const styles = StyleSheet.create({
    baseText: {
        fontStyle: "italic"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });
export default SubComponent;