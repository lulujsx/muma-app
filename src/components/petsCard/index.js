import {Image, Text, TouchableOpacity, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import mapPin from "../../assets/Icons/map-pin.png"
import genderMasc from "../../assets/Icons/male.png"
import genderFem from "../../assets/Icons/fem.png"
import likeIcon from "../../assets/Icons/like.png"
import editIcon from "../../assets/Icons/edit.png"

const PetCard = ({data, large, edit}) => {
  
    const navigation = useNavigation()
    const {id, nombre, fotos, sexo, ciudad} = data;
    //const {id, nombre, foto, sexo, ciudad} = data;
  
    return (
      <TouchableOpacity
         onPress={() => navigation.navigate("PetDetail", {id})}
      >
        <View style={large ? styles.largeContainer : styles.container}>
            {edit ? 
                (<Pressable style={styles.cardButton} >
                    <Image source={editIcon} style={styles.cardButtonImage} alt="Editar Mascota" />
                </Pressable>) : 
                (<Pressable style={styles.cardButton} >
                    <Image source={likeIcon} style={styles.cardButtonImage} alt="" />
                </Pressable>)
            }
            <View>
                <Image source={{ uri: fotos[0] }} style={large? styles.largeAnimalImage :  styles.animalImage} />
                {/* <Image source={ foto } style={large? styles.largeAnimalImage :  styles.animalImage}/> */}

                <View style={large ? styles.animalInfoContainer : styles.minAnimalInfoContainer}>
                    <View style={large ? styles.animalInfo : styles.minAnimalInfo}>
                        <Text style={large ? styles.animalInfoText : styles.minAnimalInfoText}>{nombre}</Text>
                        <Image 
                            source={sexo === "Macho" ? genderMasc : genderFem} 
                            style={large ? styles.animalInfoImage : styles.minAnimalInfoImage}
                        />
                    </View>
            
                    <View style={large ? styles.locationInfo : styles.minLocationInfo}>
                        <Image source={mapPin} style={large ? styles.locationInfoImage : styles.minLocationInfoImage} />
                        <Text style={large ? styles.locationInfoText : styles.minLocationInfoText}>{ciudad}</Text>
                    </View>
                </View>
            </View>
        </View>
      </TouchableOpacity>
    );
  };
  export default PetCard;