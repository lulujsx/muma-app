import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { logout } from './src/redux/slices/user';


const DrawerList = [
  {icon: 'home', label: 'Home', navigateTo: 'Home'},
  {icon: 'user', label: 'Perfil', navigateTo: 'Profile'},
];

const DrawerLayout = ({icon, label, navigateTo}) => {
  const navigation = useNavigation();
  return (
    <DrawerItem
      icon={({color, size}) => <Feather name={icon} color={color} size={size} />}
      label={label}
      onPress={() => {
        navigation.navigate(navigateTo);
      }}
    />
  );
};

const DrawerItems = () => {
    return DrawerList.map((el, i) => {
      return (
        <DrawerLayout
          key={i}
          icon={el.icon}
          label={el.label}
          navigateTo={el.navigateTo}
        />
      );
    });
  };
function DrawerContent(props) {
  const user = useSelector((state) => state.user.usuario);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = async () => {
    await dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                {/* <Avatar.Image
                  source={{
                    uri: user.avatarUrl || 'https://i.imgur.com/SItwxMY.jpeg',
                  }}
                  size={50}
                  style={{marginTop: 5}}
                /> */}
                <View style={{marginLeft: 10, flexDirection: 'column'}}>
                  <Title style={styles.title}>{user.nombre} {user.apellido}</Title>
                  <Text style={styles.caption} numberOfLines={1}>
                    {user.email}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.drawerSection}>
            <DrawerItems />
          </View>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Feather name="log-out" color={color} size={size} />
          )}
          label="Cerrar sesión"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    // color: '#6e6e6e',
    width: '100%',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    borderBottomWidth: 0,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#dedede',
    borderTopWidth: 1,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});