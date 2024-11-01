import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  protectorsCard: {
    height: 200,
    width: 155,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4, // Para la sombra en Android
    flexShrink: 0,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: "white",
  },
  profilePicture: {
    height: 65,
    width: 65,
    borderRadius: 32.5, // Para React Native, usa el radio de la mitad del ancho o alto para hacer un círculo
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 2.25 },
    shadowOpacity: 1,
    shadowRadius: 2.25,
    elevation: 2, // Sombra en Android
  },
  profilePictureImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 32.5,
  },
  protectorTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 10,
    
  },
  description: {
    fontSize: 12,
    color: '#B1B1B1',
    textAlign: 'center',
    paddingHorizontal: 10,
    
  },
});

export default styles;

