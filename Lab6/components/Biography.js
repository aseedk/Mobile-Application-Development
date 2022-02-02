import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Biography extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Aseed",
            age : 21,
            cgpa:3.44
        }
    }
    render(){
        return(
            <View>
                <Text style = {styles.baseText}>Hello {this.state.name}</Text>
                <Text style = {styles.innerText}> and my Age is {this.state.age}</Text> 
                <Text style = {styles.baseText}> {this.state.cgpa}</Text>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
    innerText: {
      color: 'red'
    }
  });
export default Biography;