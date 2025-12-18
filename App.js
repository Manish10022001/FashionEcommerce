import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#34c38f"
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
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
