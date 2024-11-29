import {Image, Text, TouchableOpacity, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ProtectorsCard = ({data, onPress}) => {
    const {id, nombreProtectora, foto, descripcion} = data;
    return (
      <TouchableOpacity style={styles.protectorsCard}  onPress={onPress}>
          <View style={styles.profilePicture}>
              <Image source={{uri: foto || 'https://i.pinimg.com/736x/58/51/2e/58512eb4e598b5ea4e2414e3c115bef9.jpg'}} style={styles.profilePictureImage} alt="" />
          </View>
          <Text style={styles.protectorTitle}>{nombreProtectora}</Text>
          <Text style={styles.description}>{descripcion}</Text>
      </TouchableOpacity>
    )
  }
  
export default ProtectorsCard;

