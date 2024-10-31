import React, { useContext, useState } from 'react';
import { View, TextInput, Button, Text, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
/* import { AuthContext } from '../../context/AuthContext'; */
import styles from './LoginStyles';
import mumaLogo from '../../../assets/Icons/isologo.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string('Debe ingresar su usuario')
    .email('Debe ingresar un email')
    .required('Usuario es requerido'),
  password: Yup.string().required('Password es requerido'),
});

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  /* const { saveLogin } = useContext(AuthContext); */
  const navigation = useNavigation();

  const handleRememberMe = () => {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  };

  const rememberLogin = async (token) => {
    //saveLogin(token);
    
    if (rememberMe) {
      await AsyncStorage.setItem('authToken', token);
    } else {
      await AsyncStorage.setItem('authToken', token); // Puedes usar AsyncStorage para ambas opciones si deseas.
    }
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:8081/api/Authentication/token", {
        user: values.email,
        password: values.password,
      });
      const { token } = response.data;
      rememberLogin(token);
      navigation.navigate("Home");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={mumaLogo} style={styles.logo} />
      </View>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit: formikHandleSubmit,
          isSubmitting,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email*"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {errors.email && touched.email && (
              <Text style={{ color: 'red' }}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Contraseña*"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {errors.password && touched.password && (
              <Text style={{ color: 'red' }}>{errors.password}</Text>
            )}

            <View style={styles.rememberMeContainer}>
              <TouchableOpacity onPress={handleRememberMe}>
                <Text>{rememberMe ? '☑ Recordarme' : '☐ Recordarme'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('RecoverPassword')}>
                <Text style={styles.link}>¿Olvidaste tu Contraseña?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                formikHandleSubmit();
                navigation.navigate('Home');
              }}
              disabled={isSubmitting}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('UserSelect')}
            >
              <Text style={styles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default Login;
