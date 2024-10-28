import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./MascoteroRegisterStyles";

const MascoteroRegister = () => {
  const [formData, setFormData] = useState({
    nombreApellido: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/Icons/isologo.svg")}
          style={styles.logo}
        />
        {/* Nombre y Apellido */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Nombre y Apellido*"
            value={formData.nombreApellido}
            onChangeText={(text) => handleChange("nombreApellido", text)}
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
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña*"
            value={formData.password}
            secureTextEntry
            onChangeText={(text) => handleChange("password", text)}
          />
        </View>

        {/* Confirmar Contraseña */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Confirmar Contraseña*"
            value={formData.confirmarPassword}
            secureTextEntry
            onChangeText={(text) => handleChange("confirmarPassword", text)}
          />
        </View>

        {/* Botón de Enviar */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MascoteroRegister;
