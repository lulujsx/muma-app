import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40, // Aumenta espacio vertical para centrar mejor las opciones
  },
  optionContainer: {
    width: '80%', // Ajusta el ancho para que las opciones no ocupen toda la pantalla
    alignItems: 'center',
    marginVertical: 10, // Más separación entre las opciones
    position: 'relative', // Necesario para posicionar los puntitos
  },
  innerContainer: {
    alignItems: 'center',
  },
  tickContainer: {
    width: 120,
    height: 120,
    borderRadius: 60, // Ajustado al nuevo tamaño del círculo
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 15, // Espacio entre el círculo y el texto
  },
  tickContainer2: {
    width: 120,
    height: 120,
    borderRadius: 60, // Ajustado al nuevo tamaño del círculo
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 15, // Espacio entre el círculo y el texto
  },
  tickImage: {
    width: 90,
    height: 90,
    resizeMode: 'contain', // Ajuste para mantener la proporción del ícono
  },
  puntitosMascotero: {
    position: 'absolute',
    top: -50, // Mejor alineación hacia arriba
    left: 90, // Ajuste a la izquierda
    width: 175,
    height: 160,
  },
  puntitosProtectora: {
    position: 'absolute',
    bottom: -50, // Mejor alineación hacia abajo
    left: 50, // Ajuste a la derecha
    width: 175,
    height: 160,
  },
  tituloMascotero: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black', 
    marginBottom: "10px",
  },
  tituloProtectora: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black', // Color similar al del mockup
    marginBottom: "10px",
    marginRight: "20px",
  },
});
