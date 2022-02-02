import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function SignInScreen({navigation}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect (async () => {
      try {
          const username = await AsyncStorage.getItem('username')
          const password = await AsyncStorage.getItem('password')
          if(username !== null && password!== null) {
              setUsername(username)
              setPassword(password)
          }
      } catch(e) {
          // error reading value
      }
  });
    const saveUserData = async () => {
        try {
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('password', password);
            setUsername("");
            setPassword("");
            navigation.navigate("AccountHistoryScreen")
        } catch (e) {
            // saving error
        }
    }
  return(
    <View style={{margin: "10%", height:"100%", width:"100%"}}>
        <View style={{flex: 1}}>
            <Text>Login</Text>
        </View>
        <View style={{flex: 4}}>
            <Text>User Name</Text>
            <TextInput placeholder={"Enter Username"} onChangeText={setUsername} value={username}/>
            <Text>Password</Text>
            <TextInput placeholder={"Enter Password"} onChangeText={setPassword} value={password}/>
            <TouchableOpacity onPress={() =>{
                saveUserData();
            }}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
            <Text>Dont have an Account Already?</Text>
            <Text onPress={() =>{
                navigation.navigate("SignUpScreen");
            }}>SignUp?</Text>
        </View>
    </View>
  );
}

function SignUpScreen({navigation}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accounts, setAccounts] = useState([]);
    useEffect (async () => {
        try {
            const accounts = await AsyncStorage.getItem('accounts')
            if(accounts !== null) {
                setAccounts(JSON.parse(accounts));
            }
        } catch(e) {
            // error reading value
        }
    });
    const registerUser = async () => {
        try {
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('accounts', JSON.stringify(accounts));
            setUsername("");
            setPassword("");
            navigation.navigate("AccountHistoryScreen");
        } catch (e) {
            // saving error
        }
    }
    return(
        <View>
            <Text>User Name</Text>
            <TextInput placeholder={"Enter Username"} onChangeTextt={setUsername}/>
            <Text>Password</Text>
            <TextInput placeholder={"Enter Password"} onChangeText={setPassword}/>
            <TouchableOpacity onPress={() =>{
                setAccounts([...accounts, {username: username, password: password}]);
                registerUser();
            }}>
                <Text>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

function AccountHistoryScreen({navigation, route}){
    const [accounts, setAccounts] = useState([{}]);
    useEffect (async () => {
        try {
            const accounts = await AsyncStorage.getItem('accounts')
            if(accounts !== null) {
                setAccounts(JSON.parse(accounts));
            }
        } catch(e) {
            // error reading value
        }
    });
    return(
      <View>
          <Text>Navigation</Text>
          <Text>{JSON.stringify(accounts)}</Text>
      </View>
    );
}
export default function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SignInScreen"
                    component={SignInScreen}
                    options={{title: "Name: RegNo"}}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{title: "SignUp", headerLeft: null}}
                />
                <Stack.Screen
                    name="AccountHistoryScreen"
                    component={AccountHistoryScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
