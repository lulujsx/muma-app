import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Picker,
} from "react-native";
import axios from "axios";
import styles from "./ProtectiveRegisterStyles";
import { useNavigation } from '@react-navigation/native';
import emailjs from 'emailjs-com';

const ProtectiveRegister = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmarPassword: '', 
    nombreUsuario: '',
    apellidoUsuario: '',
    nombreProtectora: '',
    descripcion: '',
    sitioWeb: '',
    instagram: '',
    facebook: '',
    cantidadDeMascotas: 0,
    direccion: {
      idCiudad: '',
      calle: '',
      numero: '',
      piso: '',
      departamento: '',
      provincia: {
        id: '',
        nombre: ''
      },
      ciudad: {
        id: '',
        nombre: '',
        idProvincia: ''
      }
    }
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (email) => {
    const templateParams = {
      to_name: formData.nombreUsuario,  // Nombre del usuario que registró
      to_email: email,              // Email del usuario registrado
      message: `Gracias por registrarte en nuestra plataforma, ${formData.nombreUsuario}. Tu registro ha sido exitoso.`
    };
  
    emailjs.send('service_ex9pvdp', 'template_h458cry', templateParams, 'Q1r6WCD0oCWqh8uEG')
      .then((response) => {
        console.log('Correo enviado con éxito:', response.status, response.text);
      })
      .catch((error) => {
        console.error('sendEmail:Error al enviar el correo:', error);
      });
  };
  useEffect(() => {
    emailjs.init("Q1r6WCD0oCWqh8uEG");
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Construir el objeto registerData desde formData
    const registerData = {
      email: formData.email || "",
      password: formData.password || "",
      nombreUsuario: formData.nombreUsuario || "vacío",
      apellidoUsuario: formData.apellidoUsuario || "vacío",
      nombreProtectora: formData.nombreProtectora || "",
      descripcion: formData.descripcion || "",
      cantidadDeMascotas: formData.cantidadDeMascotas || 1,
      direccion: {
        idCiudad: formData.ciudad.idCiudad || 1 ,
        calle: formData.calle || "",
        numero: formData.numero || "",
        piso: formData.piso || "",
        departamento: formData.departamento || "",
        ciudad: {
          id: formData.ciudad.id || 1,
          nombre: formData.ciudad.nombre || "string",
          idProvincia: formData.ciudad.idProvincia || 1
        },
        provincia: {
          id: formData.provincia.id || 1,
          nombre: formData.provincia.nombre || "string"
        }
      },
      sitioWeb: formData.sitioWeb || "vacío",
      instagram: formData.instagram || "vacío",
      facebook: formData.facebook || "vacío"
    };
    console.log("Datos enviados:", registerData);


axios.post('http://localhost:8081/api/Protectoras/registro', registerData)
  .then(response => {
    console.log('Registro exitoso', response.data);
// Redirigir al componente ValidationRegister
    navigation.navigate('ValidationRegister');
    // Si el registro es exitoso, enviar el correo
    sendEmail(formData.email);
  })
  .catch(error => {
    console.error('Axion.post:Error al registrar', error);

    // Verificar si el error es por un correo duplicado
    if (error.response && error.response.status === 400) {  // Suponiendo que el backend devuelve 401 para correo duplicado
      // Redirigir al componente EmailError
      navigation.navigate('EmailError');  // Asegúrate de tener la ruta configurada en tu sistema de rutas
    } else {
      // Manejar otros posibles errores
      setErrorMessage('Ocurrió un error inesperado. Intenta nuevamente.');
    }
  })
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/Icons/isologo.svg")}
          style={styles.logo}
        />

        {/* Nombre Protectora */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Nombre Protectora*"
            value={formData.nombreProtectora}
            onChangeText={(text) => handleChange("nombreProtectora", text)}
          />
        </View>

        {/* Descripción */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Descripción*"
            value={formData.descripcion}
            onChangeText={(text) => handleChange("descripcion", text)}
            multiline
          />
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Email*"
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            keyboardType="email-address"
          />
        </View>

        {/* Contraseña */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña*"
            value={formData.password}
            secureTextEntry
            onChangeText={(text) => handleChange("password", text)}
          />
        </View>

        {/* Confirmar Contraseña */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña*"
            value={formData.confirmarPassword}
            secureTextEntry
            onChangeText={(text) => handleChange("confirmarPassword", text)}
          />
        </View>

        {/* Provincia */}
        <View style={styles.inputGroup}>
          <Picker
            selectedValue={formData.provincia}
            style={styles.input}
            onValueChange={(itemValue) => handleChange("provincia", itemValue)}
          >
            <Picker.Item label="Seleccione una provincia*" value="" />
            <Picker.Item label="Provincia 1" value="1" />
            <Picker.Item label="Provincia 2" value="2" />
          </Picker>
        </View>

        {/* Ciudad */}
        <View style={styles.inputGroup}>
          <Picker
            selectedValue={formData.ciudad}
            style={styles.input}
            onValueChange={(itemValue) => handleChange("ciudad", itemValue)}
          >
            <Picker.Item label="Seleccione una ciudad*" value="" />
            <Picker.Item label="Ciudad 1" value="1" />
            <Picker.Item label="Ciudad 2" value="2" />
          </Picker>
        </View>

        {/* Calle */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Calle*"
            value={formData.calle}
            onChangeText={(text) => handleChange("calle", text)}
          />
        </View>

        {/* Número y Piso en una fila */}
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput1]}
            placeholder="Número"
            value={formData.numero}
            onChangeText={(text) => handleChange("numero", text)}
          />
          <TextInput
            style={[styles.input, styles.halfInput2]}
            placeholder="Piso"
            value={formData.piso}
            onChangeText={(text) => handleChange("piso", text)}
          />
        </View>

        {/* Departamento */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Departamento"
            value={formData.departamento}
            onChangeText={(text) => handleChange("departamento", text)}
          />
        </View>

        {/* Sitio Web, Instagram, Facebook */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Sitio Web"
            value={formData.sitioWeb}
            onChangeText={(text) => handleChange("sitioWeb", text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Instagram"
            value={formData.instagram}
            onChangeText={(text) => handleChange("instagram", text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Facebook"
            value={formData.facebook}
            onChangeText={(text) => handleChange("facebook", text)}
          />
        </View>

        {/* Botón de Enviar */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProtectiveRegister;
