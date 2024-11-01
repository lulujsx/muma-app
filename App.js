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
import MascoteroRegister from './src/modules/registro-mascotero';
import PetDetail from './src/modules/pet-detail';
import Login from './src/modules/login';
import SearchResultsScreen from './src/modules/search-results';
import HomeProtectora from './src/modules/home-protectora';
import DrawerContent from './DrawerContent';
import {useEffect} from 'react';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeDrawer() {
  const idtiporegistro = useSelector((state) => state.user.usuario.idtiporegistro);

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={idtiporegistro === 1 ? HomeMascotero : HomeProtectora}
        
      />
    </Drawer.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="MascoteroRegister" component={MascoteroRegister} options={{ headerShown: false }} />
      <Stack.Screen name="ProtectiveRegister" component={ProtectiveRegister} options={{ headerShown: false }} />
      <Stack.Screen name="UserSelect" component={UserSelect} options={{ headerShown: false }} />
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



// function AppContent() {
//   const idtiporegistro = useSelector((state) => state.user.usuario.idtiporegistro);

//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <DrawerContent {...props} />}
//       screenOptions={({ route }) => ({
//         swipeEnabled: route.name === "Home", // Solo permite el gesto en la pantalla Home
//       })}
//     >
//       <Drawer.Screen name="Login" component={Login} />
//       <Drawer.Screen name="MascoteroRegister" component={MascoteroRegister} />
//       <Drawer.Screen name="ProtectiveRegister" component={ProtectiveRegister} />
//       <Drawer.Screen name="UserSelect" component={UserSelect} />
//       <Drawer.Screen name="PetDetail" component={PetDetail} />
//       <Drawer.Screen
//         name="Home"
//         component={idtiporegistro === 1 ? HomeMascotero : HomeProtectora}
//       />
//       <Drawer.Screen name="SearchResultsScreen" component={SearchResultsScreen} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <AppContent />
//       </NavigationContainer>
//     </Provider>
//   );
// }

//-------------------------------------------------------

// export default function App() {

//   const StackNav = () => {
//     const Stack = createNativeStackNavigator();
//     const navigation = useNavigation();
//     return (
//       <Stack.Navigator
//         screenOptions={{
//           statusBarColor: 'white',
//           headerStyle: {
//             backgroundColor: 'white',
//           },
//           headerTintColor: 'black',
//           headerTitleAlign: 'center',
//         }}>
//         <Stack.Screen
//           name="Home"
//           component={HomeProtectora}
//           options={{
//             headerLeft: () => {
//               return (
//                 <Feather
//                   name="menu"
//                   onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//                   size={24}
//                   color="black"
//                 />
//               );
//             },
//           }}
//         />
//         <Stack.Screen name="Profile" component={HomeProtectora} />
//         <Stack.Screen
//           name="User"
//           component={HomeProtectora}
//           options={{
//             headerShown: true,
//           }}
//         />
//       </Stack.Navigator>
//     );
//   };
  
//   const DrawerNav = () => {
//     const Drawer = createDrawerNavigator();
//     return (
//       <Drawer.Navigator
//         drawerContent={props => <DrawerContent {...props} />}
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Drawer.Screen name="Home" component={StackNav} />
//       </Drawer.Navigator>
//     );
//   };
  

//   return (
//     <Provider store={store}>
//       <NavigationContainer>

//          <DrawerNav/> 
//       </NavigationContainer>
//     </Provider>

//   );
// }
  