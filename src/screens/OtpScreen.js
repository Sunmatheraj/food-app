import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
 
const OtpScreen = ({ navigation }) => {
 const [otp, setOtp] = useState('');
 
 
 return (
 <View style={styles.container}>
 <ScrollView style={styles.scrollView} >
 <Spacer>
 <Text style={styles.Text}h3>Verification</Text>
 </Spacer>
 <Input
 label="otp"
 value={otp}
 onChangeText={setOtp}
 autoCapitalize="none"
 autoCorrect={false}
 />
 <Spacer />
 
 <TouchableOpacity 
 onPress={() => navigation.navigate('Signup')} >
   <Text style={{marginLeft:32,color:'rgb(07, 127, 255)'}}>back</Text>
 </TouchableOpacity>
 
 <Spacer>
 <Button style={styles.Button} title="Verify" />
 </Spacer>
 </ScrollView>
 </View>
 );
};
 
OtpScreen.navigationOptions = () => {
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
     marginTop:10,
     marginHorizontal:30
 },
 Text:{
     alignSelf:'center'
 }
});
 
export default OtpScreen;