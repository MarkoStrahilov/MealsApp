import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import MealsScreen from './pages/MealsScreen';
import MealDetails from './pages/MealDetails';
import FavoriteMeal from './pages/FavoriteMeal';
import { Ionicons } from "@expo/vector-icons"
import FavoritesContextProvider from './store/context/favories.context';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabNavigation = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarStyle: { backgroundColor: "#d3d3d3" }
        }}
      >
        <Tab.Screen name="All Categories" component={Home}
          options={{
            title: "All Categories",
            headerStyle: { backgroundColor: "#d3d3d3" },
            sceneContainerStyle: { backgroundColor: "#c3c1c1" },
            tabBarIcon: ({ color, size }) => <Ionicons name='home' color={color} size={size} />
          }} />
        <Tab.Screen name="Favorites" component={FavoriteMeal}
          options={{
            headerStyle: { backgroundColor: "#d3d3d3" },
            tabBarIcon: ({ color, size }) => <Ionicons name='heart' color={color} size={size} />
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <>
      <StatusBar style="dark" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='HomeCategories' component={BottomTabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name='Meals' component={MealsScreen} />
            <Stack.Screen name='MealDetails' component={MealDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
