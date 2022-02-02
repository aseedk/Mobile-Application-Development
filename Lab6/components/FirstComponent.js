import React from 'react';
import {Text, View} from 'react-native';

class FirstComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : 'Aseed',
            age : 21,
            cgpa : 3.44
        }
    }
    render(){
        return(
            <View>
                <Text>I am {this.state.name}</Text>
                <Text>my gpa is {this.state.gpa}</Text>
                <Text>my age is {this.state.age}</Text>
            </View>
        );
    }
}
export default FirstComponent;