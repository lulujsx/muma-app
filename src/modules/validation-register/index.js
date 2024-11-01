import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import ValidationImg from '../../assets/BackgroundImg/ValidationImg.png';
import styles from './ValidationRegisterStyles';

const ValidationRegister = () => {
  return (
    <View style={styles.validationContainer}>
      <View style={styles.imageContainer}>
        <Image 
          source={ValidationImg}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.title}>Te enviamos un correo!</Text>
      <Text style={styles.text}>
        Revisa tu correo, te va a llegar un mensaje de validación y deberás confirmar tu cuenta para finalizar con el registro.
      </Text>
      <Text style={styles.note}>
        *Recordá revisar en tu casilla de Spam o de Correo no deseado, a veces llega ahí
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://mail.google.com')}>
          <Text style={styles.buttonText}>Abrir correo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ValidationRegister;
