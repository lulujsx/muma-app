import {FlatList, Text, View} from 'react-native';
import ProtectorsCard from '../protectorsCard'
import ModalProtectora from '../modalProtector/modal';


const HorizontalProtectorsScroll = ({data}) => {
  return (
    <View >
      <FlatList
        data={data}
        renderItem={({item}) => <ProtectorsCard data={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

export default HorizontalProtectorsScroll;