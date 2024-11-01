import 'react-native-gesture-handler';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/redux/store/store';
import HomeMascotero from './src/modules/home-mascotero';
import Profile from './src/modules/profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserSelect from './src/modules/seleccion-usuario';
import ProtectiveRegister from './src/modules/registro-protectora';
import EmailError from './src/modules/email-error';
import ValidationRegister from './src/modules/validation-register';
import MascoteroRegister from './src/modules/registro-mascotero';
import PetDetail from './src/modules/pet-detail';
import Login from './src/modules/login';
import SearchResultsScreen from './src/modules/search-results';
import HomeProtectora from './src/modules/home-protectora';
import DrawerContent from './DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  const idtiporegistro = useSelector((state) => state.user.usuario.idTipoRegistro);

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={idtiporegistro === 1 ? HomeProtectora : HomeMascotero}
        
      />
    </Drawer.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="MascoteroRegister" component={MascoteroRegister}  options={{ headerBackTitle: 'Back' }} />
      <Stack.Screen name="ProtectiveRegister" component={ProtectiveRegister}  options={{ headerBackTitle: 'Back' }} />
      <Stack.Screen name="ValidationRegister" component={ValidationRegister} options={{ headerBackTitle: 'Back' }} />
      <Stack.Screen name="EmailError" component={EmailError} options={{ headerBackTitle: 'Back' }}/>
      <Stack.Screen name="UserSelect" component={UserSelect}  options={{ headerBackTitle: 'Back' }} />
      <Stack.Screen name="PetDetail" component={PetDetail} options={{ headerBackTitle: 'Back' }} />
      <Stack.Screen name="SearchResultsScreen" component={SearchResultsScreen} options={{ headerBackTitle: 'Back' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerBackTitle: 'Back' }} />
      <Stack.Screen name="Home" component={HomeDrawer}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
}
