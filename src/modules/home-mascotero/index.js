import { View, SafeAreaView, Text,StyleSheet, TouchableOpacity,Image } from "react-native";
import { useEffect, useState } from "react"
import {styles} from './styles';
import Garfield from "../../assets/4b28cb6ef78891d578576987a660a713.jpg"
import Tigri from "../../assets/86927dea8b99a94c18244b964e8ddd2b.jpg"
import Cira from "../../assets/f9c2314943c874d6a628d8360ac252c8.png"
import Bob from "../../assets/c0c0126fc1be6a4fab1ca5c122a59336.png"
import Pia from "../../assets/781506b05e378a8594cdd7a285ba8f11.jpg"
import Burko from "../../assets/3eb4199b8431fbb96f99f6453e0a8bdb.png"
import Nala from "../../assets/34f9e760df0274a281bc0312b49ae8b8.png"
import Animalistas from "../../assets/animalistas.png"
import GalgosLibres from "../../assets/galgos-libres.png"
import ProtectoraSarmiento from "../../assets/protectora-sarmiento.png"
import Aprani from "../../assets/aprani.png"
import PichichosAlRescate from "../../assets/pichichos-al-rescate.png"
import Gato from "../../assets/gato.png"
import Perro from "../../assets/perro.png"
import Hamster from "../../assets/hamster.png"
import Conejo from "../../assets/conejo.png"
import HorizontalPetsScroll from "../../components/horizontalPetsScroll";
import HorizontalProtectorsScroll from "../../components/horizontalProtectorsScroll";
import { getAllPets } from "../../helpers/helper";
import { getPetById } from "../../helpers/helper";
import { CategoryFilter } from "../../components/categoryFilter";
import PetsGrid from "../../components/petsGrid";


const animales = [
  {
    id: 1,
    nombre: "Garfield",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Macho",
    foto: Garfield,
    especie: "Gato"
  },
  {
    id: 2,
    nombre: "Tigri",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    foto: Tigri,
    especie: "Gato"
  },
  {
    id: 3,
    nombre: "Cira",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    foto: Cira,
    especie: "Gato"
  },
  {
    id: 4,
    nombre: "Bob",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Macho",
    foto: Bob,
    especie: "Perro"
  },
  {
    id: 5,
    nombre: "Pia",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    foto: Pia,
    especie: "Perro"
  },
  {
    id: 6,
    nombre: "Burko",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Macho",
    foto: Burko,
    especie: "Perro"
  },
  {
    id: 7,
    nombre: "Nala",
    edad: 4,
    ciudad: "Rosario (2,5 km)",
    sexo: "Hembra",
    foto: Nala,
    especie: "Perro"
  },
];

const protectoras = [
    {
      id: 1,
      nombre: "Animalistas",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Se parte del cambio que queres ver en el mundo",
      foto: Animalistas
    },
    {
      id: 2,
      nombre: "Galgos Libres",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Rescatamos galgos del maltrato y los damos en adopción responsable",
      foto: GalgosLibres
    },
    {
      id: 3,
      nombre: "Protectora Sarmiento",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Somos una ONG que alberga a más de 60 animales",
      foto: ProtectoraSarmiento
    },
    {
      id: 4,
      nombre: "Aprani",
      ciudad: "Rosario (2,5 km)",
      descripcion: "Rescatamos, recuperamos, damos en adopción.",
      foto: Aprani
    },
    {
      id: 5,
      nombre: "Pichichos al rescate",
      ciudad: "Rosario (2,5 km)",
      descripcion: "La mejor comunidad cibernética si estás buscando agrandar tu familia",
      foto: PichichosAlRescate
    },

];

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
	// const [pets, setPets] = useState(animales);
	const [pets, setPets] = useState([]);
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [filteredItems, setFilteredItems] = useState(pets);
	const [showPetsGrid, setShowPetsGrid] = useState(false);

	async function getPets() {
		const response = await getAllPets()
		setPets(response.data)
	  }

	useEffect(() => {
		getPets();
		//console.log(user)
	}, [])

	const handleFilterButtonClick = (selectedCategory) => {
		if (selectedFilters.includes(selectedCategory)) {
		  let filters = selectedFilters.filter((el) => el !== selectedCategory);
		  setSelectedFilters(filters);
		} else {
		  setSelectedFilters([...selectedFilters, selectedCategory]);
		}
	};

	const toggleView = () => {
		setShowPetsGrid((prevShowGrid) => !prevShowGrid);
	  };

	useEffect(() => {
		filterItems();
	}, [pets,selectedFilters]);
	
	//para usar con los animales fetcheados
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
	
	//para usar con el array de animales
	// const filterItems = () => {
	// 	if (selectedFilters.length > 0) {
	// 	  let selectedItems = selectedFilters.map((selectedCategory) => {
	// 		let items = pets.filter((item) => item.especie === selectedCategory);
	// 		return items;
	// 	  });
	// 	  setFilteredItems(selectedItems.flat());
	// 	} else {
	// 	  setFilteredItems([...pets]);
	// 	}
	// };

	return (
		<>
			<SafeAreaView />
			<View style={styles.container}>
				
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
					<Text>Ver todos</Text>
				</View>
				<HorizontalProtectorsScroll data={protectoras}/>
			</View>
		</>
	);
};

export default HomeMascotero;

