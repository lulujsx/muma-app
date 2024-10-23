import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tickMascotero from '../../../assets/Icons/tickMascotero.png';  
import tickProtectora from '../../../assets/Icons/tickProtectora.png';  
import puntitosMascotero from '../../../assets/Icons/puntitosMascotero.png';  
import puntitosProtectora from '../../../assets/Icons/puntitosProtectora.png';  
import styles from './RegisterStyles';  

function Register() {
  const navigation = useNavigation();

  const handleClick = (type) => {
    console.log(type);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => handleClick("mascotero")}
        style={[styles.optionContainer, { paddingRight: '8rem' }]}
      >
        <Image source={puntitosMascotero} style={styles.puntitosMascotero} />
        <View style={styles.innerContainer}>
          <View style={[styles.tickContainer, { shadowOffset: { width: 3, height: 5 }, shadowRadius: 10 }]}>
            <Image source={tickMascotero} style={styles.tickImage} />
          </View>
          <Text style={styles.tituloMascotero}>Mascotero</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.navigate("Protective")}
        style={[styles.optionContainer, { paddingLeft: '8rem' }]}
      >
        <View style={styles.innerContainer}>
          <View style={[styles.tickContainer, { shadowOffset: { width: 3, height: 5 }, shadowRadius: 14 }]}>
            <Image source={tickProtectora} style={styles.tickImage} />
          </View>
          <Text style={styles.tituloProtectora}>Protectora</Text>
        </View>
        <Image source={puntitosProtectora} style={styles.puntitosProtectora} />
      </TouchableOpacity>
    </View>
  );
}

export default Register;
