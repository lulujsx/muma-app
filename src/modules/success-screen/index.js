import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SuccessImg from '../../assets/BackgroundImg/SuccessImg.png';
import styles from './SuccessScreenStyles';

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.validationContainer}>
      <View style={styles.imageContainer}>
        <Image 
          source={SuccessImg}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>¡Qué bueno que estés acá!</Text>
      <Text style={styles.text}>
        ¡Listo ya! Ya puedes empezar a usar tu cuenta.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Ir al login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SuccessScreen;
