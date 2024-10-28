import 'react-native-gesture-handler';
import HomeMascotero from './src/modules/home-mascotero';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserSelect from './src/modules/seleccion-usuario';
import ProtectiveRegister from './src/modules/registro-protectora';
import MascoteroRegister from './src/modules/registro-mascotero';
import PetDetail from './src/modules/pet-detail';
import Login from './src/modules/login';



export default function App() {
  //const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MascoteroRegister" component={MascoteroRegister} />
      <Stack.Screen name="ProtectiveRegister" component={ProtectiveRegister} />
      <Stack.Screen name="UserSelect" component={UserSelect} />
      <Stack.Screen name="PetDetail" component={PetDetail} />
      <Stack.Screen name="Home" component={HomeMascotero} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}