import React,{useState} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity,ScrollView} from 'react-native';

export default function App() {
  const [studentId, setStudentID] = useState(1);
  const [studentName, setStudentName] = useState('');
  const [subjectMarks1, setSubjectMarks1] = useState(90);
  const [subjectMarks2, setSubjectMarks2] = useState(90);
  const [subjectMarks3, setSubjectMarks3] = useState(90);
  const [studentsInfo, setStudentsInfo] = useState([]);
  const submitButton = () =>{
    const studentMarks = [parseInt(subjectMarks1), parseInt(subjectMarks2), parseInt(subjectMarks3)]
    const totalMarks = studentMarks.reduce((result,number)=> result+number);
    const percentage = Math.round(parseInt(totalMarks)/300 * 100,2);
    let GPA;
    if (percentage>= 90)
      GPA = 4.0;
    else if (percentage>= 85){
      GPA = 3.7;
    }
    else if (percentage>= 80){
      GPA = 3.3;
    }
    else if (percentage>= 75){
      GPA = 3.0;
    }
    else if (percentage>= 70){
      GPA = 2.7;
    }
    else if (percentage>= 65){
      GPA = 2.3;
    }
    else if (percentage>= 60){
      GPA = 2.0;
    }
    else if (percentage>= 55){
      GPA = 1.7;
    }
    else if (percentage>= 50){
      GPA = 1.3;
    }
    else{
      GPA = "F";
    }
    studentsInfo.push({id: studentId, Name: studentName, Marks1: subjectMarks1, Marks2: subjectMarks2, Marks3: subjectMarks3, TotalMarks: totalMarks, Percentage: percentage, GPA: GPA})
    setStudentID(studentId + 1)
    setStudentName("");
    setSubjectMarks1(0);
    setSubjectMarks2(0);
    setSubjectMarks3(0);
  }
  const resetButton = () => {
    setStudentName("");
    setSubjectMarks1(0);
    setSubjectMarks2(0);
    setSubjectMarks3(0);
    setStudentID(1);
    setStudentsInfo([]);
  }
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Student Name </Text>
        <TextInput style={styles.inputs} value = {studentName} placeholder={"Enter Student Name: "} onChangeText={setStudentName} />
        <Text style={styles.text}>Subject Marks 1</Text>
        <TextInput style={styles.inputs} value = {subjectMarks1} placeholder={"Enter Subject Marks 1: "} onChangeText={setSubjectMarks1} keyboardType='numeric'/>
        <Text style={styles.text}>Subject Marks 2</Text>
        <TextInput style={styles.inputs} value = {subjectMarks2} placeholder={"Enter Subject Marks 2: "} onChangeText={setSubjectMarks2} keyboardType='numeric'/>
        <Text style={styles.text}>Subject Marks 3</Text>
        <TextInput style={styles.inputs} value = {subjectMarks3} placeholder={"Enter Subject Marks 3: "} onChangeText={setSubjectMarks3} keyboardType='numeric'/>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.button} onPress={submitButton} disabled={studentName.length === 0}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetButton}>
            <Text>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <ScrollView style={{borderWidth: 1, padding: 10, width: "100%"}}>
            {studentsInfo.map(student => {
              return(
              <View>
                <Text>Student ID: {student.id}</Text>
                <Text>Student Name: {student.Name}</Text>
                <Text>Marks 1: {student.Marks1}</Text>
                <Text>Marks 2: {student.Marks2}</Text>
                <Text>Marks 3: {student.Marks3}</Text>
                <Text>Total Marks: {student.TotalMarks}</Text>
                <Text>Student Percentage: {student.Percentage}</Text>
                <Text>Student GPA: {student.GPA}</Text>
                <Text>-------------------------</Text>
              </View>)
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom:20,
    justifyContent: 'center',
  },
  inputs:{
    borderWidth:1,
    padding:5,
    alignItems: 'center',
    marginBottom:5
  },
  text:{
    textAlign:'left',
    fontWeight:'bold',
    padding:5,
    marginBottom:5
  },
  button:{
    marginRight:20,
    borderWidth:1,
    backgroundColor:'blue',
    padding:5,
  }
});
