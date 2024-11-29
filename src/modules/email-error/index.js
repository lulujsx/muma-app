
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmailImg from '../../assets/BackgroundImg/EmailImg.png';
import styles from './EmailErrorStyles';

const EmailError = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.emailContainer}>
      <View style={styles.imageContainer}>
        <Image 
          source={EmailImg}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Este e-mail ya se encuentra registrado</Text>
      <Text style={styles.text}>
        Si no recordás tu contraseña podés cambiarla desde el login ingresando en
        el enlace “Olvidé mi contraseña”.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Ir al login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailError;
