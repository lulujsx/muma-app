import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  tickContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  tickImage: {
    width: 83,
    height: 83,
  },
  puntitosMascotero: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  puntitosProtectora: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  tituloMascotero: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tituloProtectora: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
