import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  Picker,
} from "react-native";
import styles from "./ProtectiveRegisterStyles";

const ProtectiveRegister = () => {
  const [formData, setFormData] = useState({
    nombreProtectora: "",
    descripcion: "",
    email: "",
    password: "",
    confirmarPassword: "",
    provincia: "",
    ciudad: "",
    calle: "",
    numero: "",
    piso: "",
    departamento: "",
    sitioWeb: "",
    instagram: "",
    facebook: "",
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

        {/* Número, Piso, Departamento */}
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Número"
            value={formData.numero}
            onChangeText={(text) => handleChange("numero", text)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Piso"
            value={formData.piso}
            onChangeText={(text) => handleChange("piso", text)}
          />
        </View>
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
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProtectiveRegister;
