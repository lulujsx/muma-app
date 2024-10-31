import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native';
import PetsCard from '../petsCard'

const PetsGrid = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <PetsCard data={item} />
        </View>
      )}
      // keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={styles.row}
      
    />
  );

}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between'
  },
  cardContainer: {
    flex: 1,
    margin: 5,
  },
});

export default PetsGrid;