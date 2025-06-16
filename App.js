import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens.jsx/home";
import DetailsScreen from "./screens.jsx/details";
import ProfileScreen from "./screens.jsx/profile";

const Stack =createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen} 
            options={{title: 'Tela Principal', headerStyle:{backgroundColor:'#007bff'},
            headerTintColor:'#fff'}}/>
            <Stack.Screen 
            name="Details"
            component={DetailsScreen} 
            options={{title: 'Detalhes', headerStyle:{backgroundColor:'#dc3545'},
            headerTintColor:'#fff'}}/>
            <Stack.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{title: 'Perfil', headerStyle:{backgroundColor:'#ba55d3'},
            headerTintColor:'#fff'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
