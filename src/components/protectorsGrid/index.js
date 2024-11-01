import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native';
import ProtectorsCard from '../protectorsCard'

const ProtectorsGrid = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <ProtectorsCard data={item}/>
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

export default ProtectorsGrid;