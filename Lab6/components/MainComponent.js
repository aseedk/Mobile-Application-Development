import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class MainComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
          <View>
              <Text style= {styles.titleText}>I am Main Component</Text>
              <Text>{this.props.title}</Text>
              <Text>{this.props.variable}</Text>
              <Text>{this.props.function()}</Text>
              <Text>{this.props.object}</Text>
          </View>  
        );
    }
}
const styles = StyleSheet.create({
    baseText: {

    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });

export default MainComponent;