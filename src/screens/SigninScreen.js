import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { withNavigation  } from 'react-navigation';
 
const SigninScreen = ({ navigation }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 
 return (
 <View style={styles.container}>
 <ScrollView style={styles.scrollView} >
 <Spacer>
 <Text style={styles.Text}h3>Sign In </Text>
 </Spacer>
 <Input
 label="Email"
 value={email}
 onChangeText={setEmail}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Spacer />
 <Input
 secureTextEntry
 label="Password"
 value={password}
 onChangeText={setPassword}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <TouchableOpacity 
 onPress={() => navigation.navigate('Signup')} >
   <Text style={{marginLeft:32,color:'rgb(07, 127, 255)'}}>Not Registered!</Text>
 </TouchableOpacity>
 
 <Spacer>
 <Button style={{marginHorizontal:30}}
   onPress={() => navigation.navigate('S')}
  title="Sign In" />
 </Spacer>
 </ScrollView>
 </View>
 );
};
 
SigninScreen.navigationOptions = () => {
 return {
 header: () => false,
 };
};
 
const styles = StyleSheet.create({
 container: {
 flex: 1,
 flexDirection: 'row',
 //justifyContent: 'center',
 alignItems: 'center'
 },
 scrollView: {
    flex: 1
 },
 Button:{
     marginTop:10
 },
 Text:{
     alignSelf:'center'
 }
});
 
 
export default withNavigation(SigninScreen);