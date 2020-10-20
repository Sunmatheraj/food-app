import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Input, Button, CheckBox } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation  } from 'react-navigation';
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
   <ScrollView showsVerticalScrollIndicator={false}>
 <Spacer>
 <Text style={styles.Text}h3>Sign Up </Text>
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
 label="country"
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

 
 <Button style={styles.Button} 
  onPress={() => navigation.navigate('Otp')}
  title="Sign Up" />

<TouchableOpacity 
 onPress={() => navigation.navigate('Signin')} >
   <Text style={{marginLeft:32,marginBottom:5,color:'rgb(07, 127, 255)'}}>Already Registered!</Text>
 </TouchableOpacity>
 
 </ScrollView>
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
 marginTop:60,
 justifyContent: 'center',
 },
 Button:{
     marginHorizontal:30
 },
 Text:{
     alignSelf:'center'
 },
 checkboxContainer: {
    flexDirection: "row",
    marginLeft:10,
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    marginVertical: 18,
   },
});
 
export default withNavigation(SignupScreen);