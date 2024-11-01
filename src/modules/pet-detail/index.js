import { View, Text, Image, TouchableOpacity, Button, StyleSheet, Dimensions, ScrollView, Pressable, Modal } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ModalProtectora from './protectora-modal/modal';
const protectoraImg = require("./assets/protectoraIImg.png");
const mapPin = require("./assets/map-pin.png");

const screenWidth = Dimensions.get('window').width;


const PetDetail = ({route}) => {
	
  const [mascota, setMascota] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = route.params;


  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkNjRjY2U2NC0xNzE5LTQwNWUtOWU0Zi02YjFhNDdkNzc5MjMiLCJ1bmlxdWVfbmFtZSI6ImZhY3VAbXVtYS5jb20iLCJuYmYiOjE3MzAzNzkyNTgsImV4cCI6MTczMDQ2NTY1OCwiaWF0IjoxNzMwMzc5MjU4LCJpc3MiOiJNVU1BLUFQSSIsImF1ZCI6Ik1VTUEtQXVkaWVuY2UifQ.ijYNYVJLoGbMJ8k0tgDqCoKenKODxZQ3dw5wgtehcGU';

  useEffect(() => {
    const fetchMascota = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/Mascotas/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMascota(response.data);
      } catch (err) {
        setError('Error al cargar los datos de la mascota');
      } finally {
        setLoading(false);
      }
    };

    fetchMascota();
  }, [token]); 

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  
  
  
  return (
    <ScrollView >
        <Swiper style={{ height: 400 }} showsButtons={false}>
        {mascota.fotos.map((foto, index) => (
            <View key={index} style={{ flex: 1 }}>
                <Image 
                    source={{ uri: foto}} 
                    style={{ width: '100%', height: '100%'}} 
                    resizeMode="cover" 
                />
            </View>
        ))}
    </Swiper>
      <View style={styles.card}>
      <View style={styles.nameContainer}>
      <View style={{gap: 5}}>
        <Text style={styles.title}>{mascota.nombre}</Text>
        <View style={styles.row}>
          <Image style={styles.mapIcon} source={mapPin}/>
          <Text>{mascota.ciudad}</Text>
        </View>
      </View>
      <View>
        <View style={styles.adoptionBtn}>
          <Text style={styles.adoptionText}>{mascota.estado}</Text>
        </View>
      </View>
    </View>

    <View style={styles.boxContainer}>
      {[
        { label: 'Sexo', value: mascota.sexo },
        { label: 'Raza', value: mascota.raza },
        { label: 'Tamano', value: mascota.tamano },
        { label: 'Edad', value: `${mascota.edad} años` },
      ].map((item, index) => (
        <View style={styles.box} key={index}>
          <Text style={styles.boxValue}>{item.value}</Text>
          <Text style={styles.boxLabel}>{item.label}</Text>
        </View>
      ))}
    </View>

    <View style={styles.protectoraCard}>
    <Image source={protectoraImg} style={styles.icon} />
      <View style={styles.protectoraCardItems}>
        <View>
          <Text style={styles.protectoraLabel}>Protectora</Text>
          <Text style={styles.protectoraName}>{mascota.protectora.nombre}</Text>
        </View>
        <View>
        <ModalProtectora></ModalProtectora>
        </View>   
      </View>
    </View>

    <Text style={styles.description}>{mascota.descripcion}</Text>
    <TouchableOpacity style={styles.adoptBtn}>
      <Text style={styles.solAdoptionText}>Solicitar Adopcion</Text>
    </TouchableOpacity>
      </View>
    
</ScrollView>
    
  );
};



export default PetDetail;