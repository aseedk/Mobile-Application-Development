
import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Keyboard, TouchableOpacity, Alert, ScrollView} from 'react-native';
export default function App() {
  const [name, setName] = useState();
  const [gpa, setGPA] = useState();
  const [studentList, setStudentList] = useState([{Name: "Aseed", GPA: '4.0', key: Math.random()}]);

  const Add = () =>{
    if (name === "" || gpa === 0 ){
      Alert.alert('Error:', 'Fields are Empty');
      return;
    }
    const id = Math.random();
    setStudentList([...studentList, {Name: name, GPA: gpa, key: id }])
    Keyboard.dismiss();
    setName("");
    setGPA(0);
  }

  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.subView}>
        <Text style={styles.textStyle} >Name: </Text>
        <TextInput style={styles.textInputStyle} placeholder={"Please Enter Your Name"} value={name} onChangeText={setName}>
        </TextInput>
        <Text style={styles.textStyle} >GPA: </Text>
        <TextInput style={styles.textInputStyle} placeholder={"Please Enter Your GPA"} value={gpa} onChangeText={setGPA} >
        </TextInput>
        <TouchableOpacity style={styles.touchableOpacityStyle} onPress={Add}>
          <Text style={styles.textStyle}>Add/Update</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subView}>
        <ScrollView>
          {studentList.map((value,index) => {
            return(
                <View style={styles.listStyle} key={value.key}>
                  <TouchableOpacity style={{flexDirection:'row', padding:10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 10}}>{(index + 1)} # </Text>
                    <Text style={{fontSize: 18, marginRight: 10}}>{value.Name}</Text>
                    <Text style={{fontSize: 18, marginRight: 10, fontWeight: 'bold'}}>{value.GPA}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'red', padding:10, borderRadius:25}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>X</Text>
                  </TouchableOpacity>
                </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.subView}>
        <Text>Search: </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView:{
    flexDirection:'column',
    margin:'1%',
    marginTop: 30,
    flex:1
  },
  subView:{
    borderWidth:1,
    margin:1,
    flex:1,
    padding:10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle:{
    padding:5,
    borderWidth:1,
    marginBottom:10
  },
  touchableOpacityStyle:{
    marginTop:10,
    alignItems: 'center',
    padding:10,
    width:'70%',
    borderWidth: 1,
    borderRadius:25,
    alignSelf:'center'
  },
  textStyle:{
    fontSize:18,
    fontWeight:'bold'
  },
  listStyle:{
    flex:1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'green',
    width:'70%',
    alignSelf:'center',
    justifyContent:'space-between',
    marginBottom: 20
  }
});
