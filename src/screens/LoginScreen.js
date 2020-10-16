import React, {Component} from 'react';
import{Text,StyleSheet,View,TextInput,TouchableOpacity}from 'react-native';
const LoginScreen=({navigation})=>{    
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>Login</Text>
                <TextInput
                style={styles.input}
                placeholder="username"/>
                <TextInput
                style={styles.input}
                placeholder="password"
                secureTextEntry/>
                <View style={styles.btncontainer}>
                    <TouchableOpacity
                    style={styles.userBtn}
                    onPress={() => navigation.navigate('Search')}  >
                    <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                         style={styles.userBtn}
                         onPress={() => navigation.navigate('Index')}  >
                        <Text style={styles.btnTxt}>Go to Blog</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        
        );
        };


const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00008B'
    },
    welcome:{
        fontSize: 30,
        textAlign:'center',
        margin: 10,
        color:'#FFFFFF'
        
    },
    input:{
        width: '90%',
        backgroundColor:"#FFFFFF",
        elevation: 8,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 22,

        marginBottom:10
    },
    btncontainer: {
        flexDirection: "row",
        justifyContent:"space-between",
        width:"90%"
    },
    userBtn:{
        elevation: 8,
        backgroundColor: "#7CB9E8",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
       width: "45%"
    },
    btnTxt:{
        fontSize:18,
        textAlign:'center',
    color:"#FFFFFF"
    
    }
}

)
export default LoginScreen;
