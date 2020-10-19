import React, { useState } from 'react';
import { View, StyleSheet,  } from 'react-native';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import Spacer from '../components/Spacer';
 
const SignupScreen = ({ navigation }) => {
 const [email, setEmail] = useState('');
 //const [password, setPassword] = useState('');
 const [isSelected, setSelection] = useState(false);
 const [name, setName] = useState('');
 const [dob, setDob] = useState('');
 const [phonenumber, setPhonenumber] = useState('');
 const [country, setCountry] = useState('');
 const [state, setState] = useState('');

 return (
 <View style={styles.container}>
 <Spacer>
 <Text style={styles.Text}h3>Sign in </Text>
 </Spacer>
 <Input
 label="Name"
 value={name}
 onChangeText={setName}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Spacer />
 <Input
 secureTextEntry
 label="dob"
 value={dob}
 onChangeText={setDob}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Input
 label="county"
 value={country}
 onChangeText={setCountry}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Spacer />
 <Input
 label="state"
 value={state}
 onChangeText={setState}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Spacer />
 <Input
 label="Email"
 value={email}
 onChangeText={setEmail}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Spacer />
 <Input
 label="phonenumber"
 value={phonenumber}
 onChangeText={setPhonenumber}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Spacer />
 <View style={styles.checkboxContainer}>
<CheckBox
value={isSelected}
onValueChange={setSelection}
style={styles.checkbox}
/>
<Text style={styles.label}>Terms and Conditions</Text>
</View>

 <Spacer>
 <Button title="Sign Up" />
 <Button style={styles.Button} title="Create account"></Button>
 </Spacer>
 </View>
 );
};
 
SignupScreen.navigationOptions = () => {
 return {
 header: () => false,
 };
};
 
const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 marginBottom: 250,
 },
 Button:{
     marginTop:10
 },
 Text:{
     alignSelf:'center'
 },
 checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
   },
});
 
export default SignupScreen;