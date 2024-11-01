import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  validationContainer: {
    maxWidth: 400,
    marginHorizontal: 'auto',
    textAlign: 'center',
    padding: 30,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    borderRadius: 75, // para un aspecto circular similar
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#4A4A4A',
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  text: {
    color: '#4A4A4A',
    fontSize: 16,
    marginBottom: '30%',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
