import React, { useEffect, useState, useCallback} from 'react';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, TouchableOpacity, Alert} from 'react-native'
import { NavigationContainer, useFocusEffect} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Icon } from 'react-native-elements'
const Stack = createNativeStackNavigator();

function DiscountScreen({navigation, route}) {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [savedAmount, setSavedAmount] = useState("");
  const [finalAmount, setFinalAmount] = useState("");
  useEffect(()=>{
    if(amount && discount){
      var save = (parseInt(amount)*parseInt(discount))/100
      setSavedAmount(save)
      setFinalAmount(parseInt(amount)-save)
    }
  })
  return(
    <View style={styles.container}>
      <Text style={{fontSize:18,marginBottom:10}}>Amount</Text>
      <TextInput 
      style={{padding:10, borderWidth:1}}
      onChangeText={setAmount} 
      value={amount}
      placeholder="Enter Amount" />
      <Text style={{fontSize:18,marginBottom:10, marginTop:10}}>Discount</Text>
      <TextInput 
      style={{padding:10, borderWidth:1, marginBottom:10}}
      onChangeText={setDiscount} 
      value={discount}
      placeholder="Enter Discount %" />
      <Button 
      title="Save Discount" 
      disabled={amount==="" || discount===""}
      color="lightblue"
      onPress={()=>{
        route.params.discountHistory.push({amount:amount, discount:discount})
        setAmount("");
        setDiscount("");
        setSavedAmount("");
        setFinalAmount("");
      }}/>
      <View style={{padding:10, borderWidth:1, marginTop: 20}}>
        <Text>Amount: <Text style={{fontWeight:'bold'}}>{amount}</Text></Text>
        <Text>Discount: <Text style={{fontWeight:'bold'}}>{discount}</Text>%</Text>
        <Text>Saved: <Text style={{fontWeight:'bold'}}>{savedAmount}</Text></Text>
        <Text>Amount: <Text style={{fontWeight:'bold'}}>{finalAmount}</Text></Text>
      </View>
    </View>
  );
}
function DiscountHistoryScreen({navigation, route}) {
  const [discountHistory, setDiscountHistory] = useState([]);
  const [update, setUpdate] = useState([]);

  useFocusEffect(useCallback(()=>{
    setDiscountHistory(route.params.discountHistory)
  }))
  return(
    <View style={styles.container}>
    <ScrollView style={{borderWidth:1}}>
        {discountHistory.map((value, index)=>{
          return(
            <View style={styles.listStyle} key={value.key}>
                  <TouchableOpacity style={{flexDirection:'row', padding:10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 10}}>{(index + 1)} # </Text>
                    <View style={{flexDirection:'column'}}>
                      <Text style={{
                        fontSize: 12, 
                        marginRight: 10}}>
                        {value.amount}$  - {value.discount}%
                      </Text>
                      <Text style={{
                        fontSize: 14, 
                        marginRight: 10, 
                        fontWeight: 'bold'}}>
                        Price:  
                        {Math.round(parseInt(value.amount)
                        -parseInt(value.amount)*parseInt(value.discount)/100,2)}$
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    backgroundColor:'red',
                    padding:10,
                    borderRadius:25}}
                    onPress={()=>{
                      discountHistory.splice(index, 1);
                      setUpdate(Math.random());
                    }}
                    >
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>X</Text>
                  </TouchableOpacity>
                </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DiscountScreen">
        <Stack.Screen
          name="DiscountScreen"
          title="hi"
          component={DiscountScreen}
          initialParams={{discountHistory:[]}}
          options={({navigation, route}) =>({
            title: 'Discount App' ,
            headerRight:()=>(
              <Icon
                name="history"
                color="#000"
                size={48}
                onPress={()=>{
                  navigation.navigate('DiscountHistoryScreen', {discountHistory: route.params?.discountHistory})
                }} 
              />
            )
          })}
        />
        <Stack.Screen 
          name="DiscountHistoryScreen"
          component={DiscountHistoryScreen}
          options={({navigation, route})=>({
            title:"Discount History",
            headerRight:() =>(
              <Icon 
              name='delete' 
              color='black' 
              size={48} 
              onPress={()=>{
                navigation.navigate("DiscountScreen", {discountHistory: []})
              }}
              />
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    margin: '10%',
    padding: 8,
  },
  listStyle:{
    flex:1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'green',
    width:'90%',
    alignSelf:'center',
    justifyContent:'space-between',
    margin:10
  }
});
