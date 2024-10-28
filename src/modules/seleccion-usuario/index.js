import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tickMascotero from '../../../assets/Icons/tickMascotero.png';  
import tickProtectora from '../../../assets/Icons/tickProtectora.png';  
import puntitosMascotero from '../../../assets/Icons/puntitosMascotero.png';  
import puntitosProtectora from '../../../assets/Icons/puntitosProtectora.png';  
import styles from './UserSelectStyles';  

function UserSelect() {
  const navigation = useNavigation();

  const handleClick = (type) => {
    console.log(type);
  };

  return (
    <View style={styles.container}>
      {/* Opción Mascotero */}
      <TouchableOpacity 
        style={styles.optionContainer}
        onPress={() => navigation.navigate("MascoteroRegister")}
      >
        <Image source={puntitosMascotero} style={styles.puntitosMascotero} />
        <View style={styles.innerContainer}>
          <View style={styles.tickContainer}>
            <Image source={tickMascotero} style={styles.tickImage} />
          </View>
          <Text style={styles.tituloMascotero}>Mascotero</Text>
        </View>
      </TouchableOpacity>

      {/* Opción Protectora */}
      <TouchableOpacity 
        style={styles.optionContainer}
        onPress={() => navigation.navigate("ProtectiveRegister")}
      >
        <View style={styles.innerContainer}>
          <View style={styles.tickContainer2}>
            <Image source={tickProtectora} style={styles.tickImage} />
          </View>
          <Text style={styles.tituloMascotero}>Protectora</Text>
        </View>
        <Image source={puntitosProtectora} style={styles.puntitosProtectora} />
      </TouchableOpacity>
    </View>
  );
}

export default UserSelect;
