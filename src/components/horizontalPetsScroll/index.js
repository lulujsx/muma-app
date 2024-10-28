import {FlatList, Text, View} from 'react-native';
import PetsCard from '../petsCard'

import {styles} from './styles';

const HorizontalPetsScroll = ({data, large,edit}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <PetsCard data={item} large={large} edit={edit}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default HorizontalPetsScroll;