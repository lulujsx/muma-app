import { View, SafeAreaView, Text,ScrollView } from "react-native";
import {styles} from './styles';
import { getAllPets } from "../../helpers/helper";
import PetSearch from "../../components/petsSearch";
import { CategoryFilter } from "../../components/categoryFilter";
import PetsGrid from "../../components/petsGrid";
import { useNavigation } from "@react-navigation/native";
import Gato from "../../assets/gato.png"
import Perro from "../../assets/perro.png"
import Hamster from "../../assets/hamster.png"
import Conejo from "../../assets/conejo.png"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const filtros = [
    {
        category: 'Gato',
        icon: Gato,
        id: 1,
    },
    {
        category: 'Perro',
        icon: Perro,
        id: 2
    },
    {
        category: 'Hamster',
        icon: Hamster,
        id: 3
    },
    {
        category: 'Conejo',
        icon: Conejo,
        id: 4
    },

];

const HomeProtectora = () => {
	const user = useSelector((state) => state.user.usuario);
  	const token = useSelector((state) => state.user.token);
	const [pets, setPets] = useState([]);
	const [myPets, setMyPets] = useState([]);
  	const [searchResults, setSearchResults] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
  	const navigation = useNavigation();

	async function getPets(token) {
		const response = await getAllPets(token);
		setPets(response.data);
		setFilteredItems(response.data); 
	}
   
	useEffect(() => {
	  if(token){
		getPets(token);
	  }
	}, [token])

	useEffect(() => {
		if (user) {
		  const filteredPets = pets.filter((pet) => pet.protectoraId === user.id);
		  setMyPets(filteredPets); 
		  setFilteredItems(filteredPets); 
		}
	  }, [pets, user]);
  
	const handleFilterButtonClick = (selectedCategory) => {
		if (selectedFilters.includes(selectedCategory)) {
			let filters = selectedFilters.filter((el) => el !== selectedCategory);
			setSelectedFilters(filters);
		} else {
			setSelectedFilters([...selectedFilters, selectedCategory]);
		}
	};
  
  
	const handleSearch = (searchTerm) => {
		let lowercasedTerm = searchTerm.toLowerCase();
		let results = pets.filter((pet) =>
			(pet.nombre && pet.nombre.toLowerCase().includes(lowercasedTerm)) ||
			(pet.id && pet.id.toString() === lowercasedTerm) ||
			(pet.ciudad && pet.ciudad.toLowerCase().includes(lowercasedTerm)) ||
			(pet.tipoAnimal && pet.tipoAnimal.toLowerCase().includes(lowercasedTerm))
		);
		setSearchResults(results);
	};
  
	const goToSearchResults = () => {
		navigation.navigate('SearchResultsScreen', { searchResults });
	};

  
	//Filtro por categorias
	useEffect(() => {
		filterItems();
	  	// console.log("usuario:",user)
	  	console.log("nombre de usuario:",user.nombre)
	  	console.log("token:",token)
	}, [myPets,selectedFilters]);
	  
	  
	const filterItems = () => {
		if (selectedFilters.length > 0) {
			let selectedItems = selectedFilters.map((selectedCategory) => {
				let items = myPets.filter((item) => item.tipoAnimal === selectedCategory);
				return items;
			});
		setFilteredItems(selectedItems.flat());
		} else {
			setFilteredItems([...myPets]);
		}
	};

	return (
		<ScrollView>
			<SafeAreaView />
			<View style={styles.container}>
        		<PetSearch onSearch={handleSearch} onSearchPress={goToSearchResults} />
				<Text style={styles.categoryTitle}>Categorias</Text>
				<CategoryFilter
					filtros={filtros}
					selectedFilters={selectedFilters}
					handleFilterButtonClick={handleFilterButtonClick}
				/>
				<View style={styles.category}>
					<Text style={styles.categoryTitle}>Animales</Text>
				</View>
				{filteredItems.length === 0 ? (
					<Text>No hay mascotas disponibles.</Text>
				) : (
					<PetsGrid data={filteredItems} />
				)}
				
			</View>
		</ScrollView>
	);
};

export default HomeProtectora;