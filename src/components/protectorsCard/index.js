import {Image, Text, TouchableOpacity, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ProtectorsCard = ({data}) => {
    const {id, nombre, foto, descripcion} = data;
    return (
      <TouchableOpacity style={styles.protectorsCard}>
          <View style={styles.profilePicture}>
              <Image source={foto} style={styles.profilePictureImage} alt="" />
          </View>
          <Text style={styles.protectorTitle}>{nombre}</Text>
          <Text style={styles.description}>{descripcion}</Text>
      </TouchableOpacity>
    )
  }
  
export default ProtectorsCard;

