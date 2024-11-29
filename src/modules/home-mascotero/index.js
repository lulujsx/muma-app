import { View, SafeAreaView, Text, TouchableOpacity,Image } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import {styles} from './styles';
import Gato from "../../assets/gato.png"
import Perro from "../../assets/perro.png"
import Hamster from "../../assets/hamster.png"
import Conejo from "../../assets/conejo.png"
import HorizontalPetsScroll from "../../components/horizontalPetsScroll";
import HorizontalProtectorsScroll from "../../components/horizontalProtectorsScroll";
import { getAllPets, getAllProtectors } from "../../helpers/helper";
import { CategoryFilter } from "../../components/categoryFilter";
import PetsGrid from "../../components/petsGrid";
import PetSearch from "../../components/petsSearch";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-web";
import ProtectorsGrid from "../../components/protectorsGrid";


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

const HomeMascotero = () => {
	
  const user = useSelector((state) => state.user.usuario);
  const token = useSelector((state) => state.user.token);
	const [pets, setPets] = useState([]);
  const [protectors, setProtectors] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [showPetsGrid, setShowPetsGrid] = useState(false);
  const [showProtectorsGrid, setShowProtectorsGrid] = useState(false);
  const navigation = useNavigation();

	async function getPets(token) {
      const response = await getAllPets(token);
      setPets(response.data);
      setFilteredItems(response.data); 
	}

  async function getProtectors(token) {
    const response = await getAllProtectors(token);
    setProtectors(response.data);
}
 
	useEffect(() => {
    if(token){
      getPets(token);
      getProtectors(token);
    }
	}, [token])

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

	const toggleView = () => {
		setShowPetsGrid((prevShowGrid) => !prevShowGrid);
	};

  const toggleProtectorsView = () => {
		setShowProtectorsGrid((prevShowGrid) => !prevShowGrid);
	};

  //Filtro por categorias
	useEffect(() => {
		filterItems();
    // console.log("usuario:",user)
    // console.log("nombre de usuario:",user.nombre)
    // console.log("tipo de usuario:",user)
    console.log("token:",token)
	}, [pets,selectedFilters]);
	
	
	const filterItems = () => {
		if (selectedFilters.length > 0) {
		  let selectedItems = selectedFilters.map((selectedCategory) => {
			let items = pets.filter((item) => item.tipoAnimal === selectedCategory);
			return items;
		  });
		  setFilteredItems(selectedItems.flat());
		} else {
		  setFilteredItems([...pets]);
		}
	};


	return (
		<ScrollView>
			<SafeAreaView/>
			<View style={styles.container}>
				{/* <Text>Hola, {user.nombre}</Text> */}
        <PetSearch onSearch={handleSearch} onSearchPress={goToSearchResults} />
				<Text style={styles.categoryTitle}>Categorias</Text>
				<CategoryFilter
					filtros={filtros}
					selectedFilters={selectedFilters}
					handleFilterButtonClick={handleFilterButtonClick}
				/>


				<View style={styles.category}>
					<Text style={styles.categoryTitle}>Animales</Text>
					<Text onPress={toggleView}> {showPetsGrid ? 'Ver menos' : 'Ver todos'} </Text>
				</View>
				{showPetsGrid ? (<PetsGrid data={filteredItems}/> ) : (<HorizontalPetsScroll data={filteredItems} large={true} edit={false} />)}
				
				

				<View style={styles.category}>
					<Text style={styles.categoryTitle}>Protectoras</Text>
					<Text onPress={toggleProtectorsView}> {showProtectorsGrid ? 'Ver menos' : 'Ver todos'} </Text>
				</View>
				{showProtectorsGrid ? (<ProtectorsGrid data={protectors}/> ) : (<HorizontalProtectorsScroll data={protectors}/>)}
			</View>
		</ScrollView>
	);
};

export default HomeMascotero;
