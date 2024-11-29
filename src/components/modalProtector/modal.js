import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const protectoraImg = require("../../assets/protectoraIImg.png");

const phoneIcon = require("../../assets/phone.png");



const ModalProtectora = () =>{

    const [modalVisible, setModalVisible] = useState(false);
 
    return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalClose}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>X</Text>
              </Pressable>
              </View>
            <View style={styles.modalItems}>
              <Image source={protectoraImg}></Image>
              <Text style={styles.modalTitle}>Animalistas</Text>
              <Text style={styles.modalText}>Se parte del cambio que queres ver en el mundo</Text>
            </View>
             
                <View style={styles.contactData}> 
                  
                {Object.entries(contactInfo).map(([key, value]) => (
                <View key={key} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                <Pressable style={[styles.button, styles.buttonOpen]}><Image source={contactIcons[key]}></Image></Pressable>
                <Text style={{ marginLeft: 10 }}>{value}</Text>
                </View>
              ))}
                </View>
              
          
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
            <Image source={phoneIcon} style={styles.buttonImage} />
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
    
};

const contactInfo = {
  telnum: "+1234567890", 
  instagram: "nombredeusuario", 
  gmail: "ejemplo@gmail.com" 
};

const contactIcons = {
  telnum: require("../../assets/phone.png"),
  instagram: require("../../assets/instagram.png"),
  gmail: require("../../assets/mail.png")
};

const styles = StyleSheet.create({
  modalItems: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
 
  },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      width: 350,
      height: 450, 
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalClose: {
      width: 330,
      alignItems: 'flex-end',
      paddingRight: 15,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      width:40,
      height: 40,
    },
    buttonOpen: {
      backgroundColor: '#0199a3',
    },
    buttonClose: {
      backgroundColor: '#F08318',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    modalTitle: {
      fontWeight: 'bold',
      fontSize: 25,
      color: '#5F5B5B',
    },
    contactData: {
        width: 300,
        gap: 5,
        marginTop: 1,
    }
  });

export default ModalProtectora;