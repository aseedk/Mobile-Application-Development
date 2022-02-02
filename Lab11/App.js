import React, { useEffect, useState} from 'react';
import * as Contacts from 'expo-contacts';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    FlatList,
    Button,
} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';

function WelcomeScreen({ navigation }) {
    return (
        <View style={{flex:1, justifyContent:'center'}}>
            <View style={{margin:10}}>
                <Button title="View Contact List" onPress={()=> navigation.navigate("View")}> </Button>
            </View>
            <View style={{margin:10}}>
                <Button title="View Contact List Modified" onPress={()=> navigation.navigate("ViewModified")}> </Button>
            </View>
            <View style={{margin:10}}>
                <Button title="Search Contact" onPress={()=> navigation.navigate("Search")}> </Button>
            </View>
            <View style={{margin:10}} >
                <Button title="Add to Contact" onPress={()=> navigation.navigate("Add")}> </Button>
            </View>
        </View>
    );
}

function ViewAllContacts({ navigation}) {
    const [contacts, setContacts ] = useState([])
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setContacts(data)
                }
            }
        })();
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={({item}) => {
                    return (
                        <View style={{flexDirection:'row', margin:10}}>
                            <Image
                                style={styles.stretch}
                                source={item.image}
                            />
                            <Text style={{paddingLeft:10}}>{`${item.name} (${item.phoneNumbers ? item.phoneNumbers[0].number : ''})`}</Text>
                            <Button title={"Edit"} onPress={() => {
                                navigation.navigate('EditContact', {
                                    Name: item.name,
                                    PhoneNo: item.phoneNumbers,
                                    Image: item.image
                                });
                            }}/>
                        </View>
                    )
                }}
            />
        </View>

    );
}
function ViewAllContactsModified() {
    const [contacts, setContacts ] = useState([])
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setContacts(data)
                }
            }
        })();
    }, []);
    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={({item}) => {
                    return (
                        <View style={{flexDirection:'row', margin:10}}>
                            <Entypo name="user" size={24} color="black" />
                            <Text style={{paddingLeft:10}}>Name: {item.name} </Text>
                        </View>
                    )
                }}
            />
        </View>

    );
}




function AddContact() {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [contactNo, setContactNo] = useState();
    const [imageURI, setImageURI] = useState();
    return (
      <View style={{flex:1, justifyContent:'center'}}>
          <Text>Contact First Name: </Text>
          <TextInput placeholder={"Enter Contact First Name: "} onChangeText={setFirstName}/>
          <Text>Contact Last Name: </Text>
          <TextInput placeholder={"Enter Contact Last Name: "} onChangeText={setLastName}/>
          <Text>Contact Number: </Text>
          <TextInput placeholder={"Enter Contact Number: "} onChangeText={setContactNo}/>
          <Button title="Pick Image" onPress={
              async () => {
                  const result = await ImagePicker.launchImageLibraryAsync({
                      mediaTypes: ImagePicker.MediaTypeOptions.Images
                  });
                  setImageURI(result);
              }}>
          </Button>
          <Button title={"Add Contact"} onPress={async () => {
              const contact = {
                  [Contacts.Fields.FirstName]: firstName,
                  [Contacts.Fields.LastName]: lastName,
                  [Contacts.Fields.PhoneNumbers[0]]: contactNo,
                  [Contacts.IMAGE]: imageURI,
                  [Contacts.Fields.Company]: 'Comsats'
              };
              const contactId = await Contacts.addContactAsync(contact);
              setLastName('');
              setFirstName('');
              setContactNo('');
              setImageURI('');
          }}/>
      </View>
  );
}
function EditContact({route }) {
    const {Name} = route.params;
    const {ContactNo} = route.params;
    const {Image} = route.params;
    const [name, setName] = useState();
    const [contactNo, setContactNo] = useState();
    const [imageURI, setImageURI] = useState();
    return (
        <View style={{flex:1, justifyContent:'center'}}>
            <Text>Contact Name: </Text>
            <TextInput placeholder={"Enter Contact Name: "} value={Name} onChangeText={setName}/>
            <Text>Contact Number: </Text>
            <TextInput placeholder={"Enter Contact Number: "} value={ContactNo} onChangeText={setContactNo}/>
            <Button title="Pick Image" onPress={
                async () => {
                    const result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images
                    });
                    setImageURI(result);
                }}>
            </Button>
            <Button title={"Edit Contact"} onPress={async () => {
                const contact = {
                    [Contacts.Fields.Name]: name,
                    [Contacts.Fields.PhoneNumbers]: contactNo,
                    [Contacts.IMAGE]: imageURI,
                    [Contacts.Fields.Company]: 'Comsats'
                };
                const contactId = await Contacts.addContactAsync(contact);
                setName('');
                setContactNo('');
                setImageURI('');
            }}/>
        </View>
    );
}
function SearchContact( ) {
    const [contacts, setContacts ] = useState([])
    const [search, setSearch] = useState("");
    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setContacts(data)
                }
            }
        })();
    }, []);
    return (
        <View style={{flex:1, justifyContent:'center'}}>
            <Text>Search Contact</Text>
            <TextInput placeholder={"Search By Name"} onChangeText={setSearch}/>
            <FlatList
                data={contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))}
                renderItem={({item}) => {
                    return (
                        <View style={{flexDirection:'row', margin:10}}>
                            <Entypo name="user" size={24} color="black" />
                            <Text style={{paddingLeft:10}}>{`${item.name} (${item.phoneNumbers ? item.phoneNumbers[0].number : ''})`}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="View" component={ViewAllContacts}/>
            <Stack.Screen name="ViewModified" component={ViewAllContactsModified}/>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Add" component={AddContact}/>
            <Stack.Screen name="Search" component={SearchContact}/>
            <Stack.Screen name="EditContact" component={EditContact}/>
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
