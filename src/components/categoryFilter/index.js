import { TouchableOpacity, FlatList, Image, Text, View } from 'react-native';
import { styles } from './styles';

export const CategoryFilter = ({ filtros, selectedFilters, handleFilterButtonClick }) => {
  return (
    <FlatList
      data={filtros}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.buttonsContainer}
      renderItem={({ item: especie }) => (
        <TouchableOpacity
          onPress={() => handleFilterButtonClick(especie.category)}
          style={[
            styles.bttnCategory,
            selectedFilters.includes(especie.category) ? styles.active : ""
          ]}
        >
          <Image source={especie.icon} style={styles.icon} />
          <Text style={selectedFilters.includes(especie.category) ? styles.activeText : styles.text}>
            {especie.category}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};


