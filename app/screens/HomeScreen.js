import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './Styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  const URL = 'https://dog.ceo/api/breeds/image/random';

  const onSubmit = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      navigation.navigate('Image', {
        image: data.message,
      });
      return data.message;
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.text}>Click here to generate an Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
