import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import styles from './Styles';

const ImageScreen = ({route, navigation}) => {
  const {image} = route.params;

  return (
    <View style={styles.container}>
      {image && (
        <View>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageScreen;
