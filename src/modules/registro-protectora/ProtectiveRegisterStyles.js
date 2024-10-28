import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Obtener ancho de la pantalla para ajustes responsivos.

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  halfInput1: {
    flex: 1,
    marginRight: 5,
  },
  halfInput2: {
    flex: 1,
    marginLeft: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  scrollView: {
    padding: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#fff',
    justifyContent: 'center', // Centrar los elementos verticalmente.
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 32, // Espacio más amplio debajo del logo.
  },
  inputGroup: {
    marginBottom: 16, // Aumentar margen entre campos para evitar superposición.
  },
  input: {
    width: '100%', // Asegurar que el input ocupe todo el ancho disponible.
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9', // Fondo claro para mayor contraste.
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 4,
    fontSize: 14,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Separar el input del ícono.
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16, // Asegurar que no se superponga con otros campos.
    backgroundColor: '#f9f9f9',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24, // Espacio adicional para separar del último input.
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
