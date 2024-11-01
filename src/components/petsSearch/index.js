import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import styles from './styles';

const PetSearch = ({ onSearch, onSearchPress }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (text) => {
		setSearchTerm(text);
		onSearch(text); // Ejecuta la función de búsqueda en tiempo real
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Nombre, estado, protectora y sexo"
				value={searchTerm}
				onChangeText={handleInputChange}
                // underlineColorAndroid="transparent"
                // selectionColor="transparent"
			/>
			<Pressable onPress={() => onSearchPress(searchTerm)} style={styles.button}>
                <Feather name="search" size={24} color="white" />
            </Pressable>
		</View>
	);
};



export default PetSearch;


