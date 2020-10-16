import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, FlatList, Image, Linking } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
      
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
          <View>
            <Image style={styles.image} source={{ uri: item }} />
           
          {/* <Button
          title="title">
         onPress={() => Linking.openURL('http://google.com')}
  
          </Button> */}
          <TouchableOpacity onPress={() => Linking.openURL('https://youtu.be/Iq2XfDiecCM')}>
  <Text style={{color: 'blue'}}>
    Video
  </Text>
</TouchableOpacity>
</View>
          )
        }
      }
      />
        
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 400,
    margin:10
  }

});

export default ResultsShowScreen;
