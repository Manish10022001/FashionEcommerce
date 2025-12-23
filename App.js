import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
import Category from './src/components/Category';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function MyHomeStack(){
  return(
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Product_details" component={ProductDetailsScreen} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#34c38f"
      }}>
        <Tab.Screen name="Home Stack" component={MyHomeStack} options={{
        tabBarIcon:({color})=><Ionicons name='home' size={25} color={color} />
        }}/>
        <Tab.Screen name="Reorder" component={HomeScreen} options={{
        tabBarIcon:({color})=><Ionicons name='reorder-four' size={25} color={color} />
        }}/>
        <Tab.Screen name="Cart" component={HomeScreen} options={{
        tabBarIcon:({color})=><Ionicons name='cart' size={25} color={color} />
        }}/>
        <Tab.Screen name="Account" component={HomeScreen} options={{
        tabBarIcon:({color})=><Ionicons name='person' size={25} color={color} />
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
