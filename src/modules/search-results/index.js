import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PetsGrid from '../../components/petsGrid';

const SearchResultsScreen = ({ route }) => {
	const { searchResults } = route.params;

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Resultados de la Búsqueda</Text>
			<PetsGrid data={searchResults}/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16 },
	title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
	itemContainer: { marginBottom: 10 },
	itemText: { fontSize: 16 },
});

export default SearchResultsScreen;