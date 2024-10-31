import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  largeContainer: {
    height: "auto",
    width: 290,
    borderRadius: 8,
    shadowColor: '#19214A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 28,
    elevation: 6,
    //flexShrink: 0,
    position: 'relative',
    backgroundColor: "white",
  },
  container: {
    height: 190,
    width: 170,
    borderRadius: 8,
    shadowColor: '#19214A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 28,
    elevation: 6,
    position: 'relative',
    backgroundColor: "white",
  },
  largeAnimalImage: {
    width: '100%',
    height: 290,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  animalImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  animalInfoContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  minAnimalInfoContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  animalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  animalInfoImage: {
    height: 26,
    width: 26,
  },
  animalInfoText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  minAnimalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  minAnimalInfoImage: {
    height: 20,
    width: 20,
  },
  minAnimalInfoText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'black',
  },
  locationInfo: {
    flexDirection: 'row',
    gap: 8,
  },
  locationInfoImage: {
    height: 20,
    width: 20,
  },
  locationInfoText: {
    color: '#B0B0B0',
  },
  minLocationInfo: {
    flexDirection: 'row',
    gap: 8,
  },
  minLocationInfoImage: {
    height: 15,
    width: 15,
  },
  minLocationInfoText: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  cardButton: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 1,
    top: 5,
  },
  cardButtonImage: {
    height: 50,
    width: 50,
  },
});

export default styles;
